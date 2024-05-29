import React, { FC } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider, css, Global } from '@emotion/react';
import { usePageScroll } from '@/utils';

type Props = {
  children?: React.ReactNode;
};

const cache = createCache({
  key: 'css',
  prepend: true,
});

const globalStyles = (pageScrollEnabled: boolean) => css`
  html {
    font-size: 62.5%;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
    overflow: ${pageScrollEnabled ? 'hidden' : 'auto'};
  }

  .wrapper {
    max-width: 120rem;
    margin: 0 auto;
  }

  .page-content {
    position: absolute;
    top: 11rem;
    left: 0;
    width: 100%;
    height: calc(100vh - 11rem);
    padding: 0 2rem;
  }

  @media (min-width: 960px) {
    .page-content {
      position: relative;
      top: 6rem;
      height: 100%;
      padding-left: 6rem;
      margin-bottom: 6rem;
    }
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    height: 11rem;
    width: 100%;
    background-image: url('/images/mobile-header-bg.jpg');
    background-repeat: repeat-x;
    background-size: auto 100%;
    z-index: 997;
  }

  @media (min-width: 960px) {
    header {
      position: fixed;
      background-color: #ffffff;
      background-image: none;
      height: 6rem;
      border-bottom: 0.4rem solid #ff4040;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    }
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-65%, -50%);
    transform: translate(-65%, -50%);
    width: 20rem;
    z-index: 999;
  }

  @media (min-width: 960px) {
    .logo {
      top: 0;
      left: 3rem;
      -ms-transform: none;
      transform: none;
      width: 30rem;
      height: 37rem;
      background-image: url('/images/desktop-logo-bg.jpg');
      background-size: auto 100%;
      background-position: bottom center;
    }
  }

  .logo .horizontal {
    display: block;
  }

  .logo .horizontal svg {
    width: 100%;
  }

  .logo .vertical {
    display: none;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .logo .vertical svg {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    height: calc(100% - 12rem);
  }

  .logo.desktop {
    display: none;
    top: -7rem;
  }

  @media (min-width: 960px) {
    .logo.desktop {
      display: block;
    }
    .logo.mobile {
      display: none;
    }
    .logo .horizontal {
      display: none;
    }
    .logo .vertical {
      display: block;
    }
  }
`;

export const AppTheme: FC<Props> = ({ children }) => {
  const { pageScrollEnabled } = usePageScroll();

  return (
    <CacheProvider value={cache}>
      <Global styles={globalStyles(pageScrollEnabled)} />
      {children}
    </CacheProvider>
  );
};
