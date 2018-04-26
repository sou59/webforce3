document.addEventListener('DOMContentLoaded', () => {
  (function initCaroussel() {
    const carrousel = document.querySelector('.carrousel');
    const btnPrevious = document.querySelector('.previous');
    const btnNext = document.querySelector('.next');

    // on duplique le dernier LI pour permettre de slider à gauche dès le début
    const dupeLastListElement = carrousel.querySelectorAll('li')[carrousel.querySelectorAll('li').length - 1].cloneNode(true);
    carrousel.insertAdjacentElement('afterbegin', dupeLastListElement);

    function moveCarousselLeft() {
      carrousel.removeChild(carrousel.querySelectorAll('li')[carrousel.querySelectorAll('li').length - 1]);
      carrousel.insertAdjacentElement('afterbegin', carrousel.querySelectorAll('li')[carrousel.querySelectorAll('li').length - 1].cloneNode(true));
    }

    function moveCarousselRight() {
      carrousel.insertAdjacentElement('beforeend', carrousel.querySelectorAll('li')[1].cloneNode(true));
      carrousel.removeChild(carrousel.querySelectorAll('li')[0]);
    }

    btnPrevious.addEventListener('click', moveCarousselLeft);
    btnNext.addEventListener('click', moveCarousselRight);
    document.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          moveCarousselRight();
          break;
        case 'ArrowLeft':
          moveCarousselLeft();
          break;
        default:
          break;
      }
    });
  }());
});
