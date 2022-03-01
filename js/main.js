let isMobileNavOpen = false;

function mobileNavHandler() {
  if (!isMobileNavOpen) {
    document.querySelector('.header nav').classList.add('open');

    document.body.style.overflow = 'hidden';

    isMobileNavOpen = true;
  } else {
    document.querySelector('.header nav').classList.remove('open');

    document.body.style.overflow = 'auto';

    isMobileNavOpen = false;
  }
}
