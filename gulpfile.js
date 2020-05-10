'use strict';

// Set environment
// To generate source map files of the css.
const _dev = true;


// Configure variables
const sassStyle = (_dev) ? 'expanded' : 'compressed',
  autoprefixerBrowsers = ['last 3 versions', 'IE 8', '> 3%'],
  themePath = '';

// Load plugins
const gulp = require('gulp');
const { series, parallel, watch } = require('gulp');
const log = require('fancy-log');
const c = require('ansi-colors');
const noop = require('gulp-noop');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const rename = require('gulp-rename');
const randomToken = require('random-token');
const replace = require('gulp-replace');
const gulpStylelint = require('gulp-stylelint');
const connect = require('gulp-connect');
const plumber = require('gulp-plumber');
const cached = require('gulp-cached');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const pixrem = require('gulp-pixrem');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const path = require('path');
const merge = require('gulp-merge-json');
const data = require('gulp-data');
const fs = require('fs');
const ghPages = require('gulp-gh-pages');
const file = require('gulp-file');

// Configure paths
const paths = {
  pug: {
    compileSrc: [themePath + 'src/**/*.pug', '!' + themePath + 'src/includes/*.pug'],
    watchSrc: themePath + 'src/**/*.pug',
    dest: themePath + 'dist/',
    data: themePath + 'src/data/**/*.json',
    dataDest: themePath + 'dist',
  },
  icons: {
    src:  themePath + 'src/icons/*.svg',
    dest: themePath + 'dist/fonts/'
  },
  styles: {
    src:  themePath + 'src/sass/**/*.scss',
    dest: themePath + 'dist/css/'
  },
  scripts: {
    src:  themePath + 'src/scripts/**/*.js',
    dest: themePath + 'dist/js/'
  },
  assets: {
    src: themePath + 'src/assets/**/*.*',
    dest: themePath + 'dist/assets',
  },
  deploy: {
    path: themePath + 'dist/**/*',
    cname: 'aikidogent.be',
  },
};


// buildPug task
const buildPug = () => {
  return gulp
    .src(paths.pug.compileSrc)
    .pipe(plumber())
    .pipe(data(() => {
      return JSON.parse(fs.readFileSync(`${paths.pug.dest}/data.json`).toString());
    }))
    .pipe(pug({
      pretty: true,
    }))
    .pipe(plumber.stop())
    .pipe(cached('pug'))
    .pipe(gulp.dest(paths.pug.dest))
    .pipe(connect.reload());
};


// Pug data
const pugData = () => {
  return gulp
    .src(paths.pug.data)
    .pipe(merge({
      fileName: 'data.json',
      edit: (json, file) => {
        // Extract the filename and strip the extension
        let filename = path.basename(file['path']),
          primaryKey = filename.replace(path.extname(filename), '');

        // Set the filename as the primary key for our JSON data
        let data = {};
        data[primaryKey.toUpperCase()] = json;

        return data;
      }
    }))
    .pipe(gulp.dest(paths.pug.dataDest))
};


// Iconfont task
const icons = () => {
  return gulp
    .src([paths.icons.src,], {base: themePath})
    .pipe(iconfontCss({
      fontName: 'icons',
      path: themePath + 'icons/_template.scss',
      targetPath: '../sass/config/_icons.scss',
      fontPath: paths.icons.dest
    }))
    .pipe(iconfont({
      fontName: 'icons',
      formats: ['ttf', 'eot', 'woff', 'svg', 'woff2'],
      normalize: true,
      fontHeight: 128,
      descent: 24
    }))
    .pipe(replace('{{icon-font-token}}', randomToken(8)))
    .pipe(gulp.dest(paths.icons.dest))
    .pipe(connect.reload());
};


// Sass lint
const lintsass = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(gulpStylelint({
      failAfterError: false,
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
    .pipe(connect.reload());
};


// Sass compile + prefix task
const buildSass = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(plumber())
    .pipe(_dev ? sourcemaps.init() : noop())
    .pipe(sass({
      outputStyle: sassStyle
    }).on('error', sass.logError))
    .pipe(pixrem('1rem', {atrules: true}))
    .pipe(autoprefixer({
      overrideBrowserslist: autoprefixerBrowsers,
      cascade: false
    }))
    .pipe(_dev ? sourcemaps.write('./') : noop())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(connect.reload());
};


// Javascript minify task
const scripts = () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(connect.reload());
};


// Assets copy task
const assets = () => {
  return gulp
    .src(paths.assets.src)
    .pipe(gulp.dest(paths.assets.dest))
    .pipe(connect.reload());
};


// Logging
const logWrapper = (type, cb) => {
  const message = (path, verb) =>
    log(`${c.red(`${type} event:`)} ${c.cyan(path.replace('src/', ''))} was ${c.magenta(verb)}`);

  cb()
    .on('change', (path) => message(path, 'changed'))
    .on('add', (path) => message(path, 'added'))
    .on('unlink', (path) => message(path, 'deleted'));
};


// Watching files
const watchFiles = () => {
  logWrapper('Pug', () => watch(paths.pug.watchSrc, {usePolling: true}, buildPug));
  logWrapper('Sass', () => watch(paths.styles.src, {usePolling: true}, series(buildSass, lintsass)));
  logWrapper('Scripts', () => watch(paths.scripts.src, {usePolling: true}, scripts));
  logWrapper('Assets', () => watch(paths.assets.src, {usePolling: true}, assets));
  logWrapper('PugData', () => watch(paths.pug.data, {usePolling: true}, series(pugData, buildPug)));
};


// Serve to localhost with livereload
const serve = (done) => {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 3000,
  }, function () { this.server.on('close', done) })
};


// Deploy dist folder to github pages
const deploy = () => {
  return gulp
    .src(paths.deploy.path)
    .pipe(file('CNAME', paths.deploy.cname))
    .pipe(ghPages({
      branch: 'master'
    }))
};


// Commands
const buildCommand = series(pugData, icons, parallel(series(buildSass, lintsass), buildPug, scripts, assets));
const watchCommand = series(buildCommand, parallel(serve, watchFiles));
const sasslintCommand = series(lintsass);
const deployCommand = series(buildCommand, deploy);

exports.build = buildCommand;
exports.watch = watchCommand;
exports.sasslint = sasslintCommand;
exports.deploy = deployCommand;
exports.default = watchCommand;