function openMobileMenu (event) {
  event.preventDefault();

  var hamburgerMenu = $('.hamburger');
  var mobileMenu = $('.mobile-menu');
  var mobileMenuBackdrop = $('.mobile-menu-backdrop');
  var isOpen = hamburgerMenu.hasClass('open');

  hamburgerMenu
    .removeClass('open')
    .removeClass('closed')
    .addClass(isOpen ? 'closed' : 'open');

  mobileMenu
    .removeClass('open')
    .removeClass('closed')
    .addClass(isOpen ? 'closed' : 'open');

  mobileMenuBackdrop
    .removeClass('open')
    .removeClass('closed')
    .addClass(isOpen ? 'closed' : 'open')
    .on('click', closeMobileMenu);
}

function closeMobileMenu (event) {
  event.preventDefault();

  var hamburgerMenu = $('.hamburger');
  var mobileMenu = $('.mobile-menu');
  var mobileMenuBackdrop = $('.mobile-menu-backdrop');

  hamburgerMenu
    .removeClass('open')
    .addClass('closed');

  mobileMenu
    .removeClass('open')
    .addClass('closed');

  mobileMenuBackdrop
    .removeClass('open')
    .addClass('closed')
    .off('click', closeMobileMenu)
}