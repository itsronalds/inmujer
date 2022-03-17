/* HEADER - NAVBAR */
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

/* GALLERY SLIDER */
function selectedCard(number) {
  const screenWidth = document.body.offsetWidth;

  if (screenWidth < 768) {
    return;
  }

  scrollTo({
    top: document.body.offsetHeight / 3.5,
    behavior: 'smooth',
  });

  // Disable prev active card
  document.querySelector('.card-active').classList.remove('card-active');

  // Get all cards
  const cards = document.querySelectorAll('.card');
  const preSelectedCardIndex = number - 1;

  // Set selected card
  for (let i = 0; i < cards.length; i++) {
    if (i === preSelectedCardIndex) {
      cards[i].classList.add('card-active');
    }
  }

  // GET ALL BIG CARDS ELEMENTS
  // const bigCards = document.querySelectorAll('.big-card');

  // REMOVE BIG CARD ACTIVE CLASS
  document.querySelector('.big-card-active').classList.add('unselected');
  document.querySelector('.big-card-active').classList.remove('big-card-active');

  // ADD BIG CATD ACTIVE CLASS
  document.querySelector(`.number-${number}`).classList.add('big-card-active');
  document.querySelector(`.number-${number}`).classList.remove('unselected');
}

function next() {
  const screenWidth = document.body.offsetWidth;

  if (screenWidth >= 768) {
    return;
  }

  // GET ALL BIG CARDS ELEMENTS
  const bigCards = document.querySelectorAll('.big-card');

  for (let i = 0; i < bigCards.length; i++) {
    const bigCard = bigCards[i];
    const classes = bigCard.className.split(' ');

    if (classes.includes('big-card-active')) {
      document
        .querySelector(`.number-${i + 1}`)
        ?.classList.replace('big-card-active', 'unselected');

      document
        .querySelector(`.number-${i + 2}`)
        ?.classList.replace('unselected', 'big-card-active');

      return;
    }
  }
}

function prev() {
  const screenWidth = document.body.offsetWidth;

  if (screenWidth >= 768) {
    return;
  }

  // GET ALL BIG CARDS ELEMENTS
  const bigCards = document.querySelectorAll('.big-card');

  for (let i = 0; i < bigCards.length; i++) {
    const bigCard = bigCards[i];
    const classes = bigCard.className.split(' ');

    if (classes.includes('big-card-active')) {
      document
        .querySelector(`.number-${i + 1}`)
        ?.classList.replace('big-card-active', 'unselected');

      document
        .querySelector(`.number-${i + 1 - 1}`)
        ?.classList.replace('unselected', 'big-card-active');

      return;
    }
  }
}
