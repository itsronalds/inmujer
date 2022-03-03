let isMobileNavOpen = false;

function mobileNavHandler() {
  if (!isMobileNavOpen) {
    document.querySelector('.header nav').classList.add('open');
    document.querySelector('.header').classList.remove('border-radius');

    document.body.style.overflow = 'hidden';

    isMobileNavOpen = true;
  } else {
    document.querySelector('.header nav').classList.remove('open');
    document.querySelector('.header').classList.add('border-radius');

    document.body.style.overflow = 'auto';

    isMobileNavOpen = false;
  }
}
