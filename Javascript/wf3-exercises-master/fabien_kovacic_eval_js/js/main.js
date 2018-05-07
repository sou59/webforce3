$(document).ready(() => {
  // note pour le formateur : je me suis aidé du "Airbnb JavaScript Style Guide" : https://github.com/airbnb/javascript

  // Attribution de variables pour la lisibilté
  const form = $('#adoption-chats form');
  const cat = $('#adoption-chats #select-cat');
  const reason = $('#adoption-chats #raison-adoption');

  // Gestion du formulaire d'adoption
  form.on('submit', (e) => {
    e.preventDefault();

    let isFormValid = true;
    let catChosen = '';

    // partie SELECT
    if (!cat.val()) {
      isFormValid = false;
      cat.css('border', 'solid 1px red');
    } else {
      catChosen = cat.val();
    }

    // partie TEXTAREA
    if (!reason.val() || reason.val().length < 15) {
      reason.css('border', 'solid 1px red');
      isFormValid = false;
    }

    // Si tout est valide on envoie le formulaire :
    if (isFormValid) {
      // Simulation d'une vérification asynchrone avec le serveur
      $('#adoption-chats button').html(`<div class='sk-circle'>
          <div class='sk-circle1 sk-child'></div>
          <div class='sk-circle2 sk-child'></div>
          <div class='sk-circle3 sk-child'></div>
          <div class='sk-circle4 sk-child'></div>
          <div class='sk-circle5 sk-child'></div>
          <div class='sk-circle6 sk-child'></div>
          <div class='sk-circle7 sk-child'></div>
          <div class='sk-circle8 sk-child'></div>
          <div class='sk-circle9 sk-child'></div>
          <div class='sk-circle10 sk-child'></div>
          <div class='sk-circle11 sk-child'></div>
          <div class='sk-circle12 sk-child'></div>
        </div>`);
      setTimeout(() => {
        form.fadeOut(() => {
          form.fadeIn();
          form.html(`<p class='confirmation-message'>😺 Félicitations ! 😺</p><p>${catChosen} vous attend ! 😻💗<br>Nous allons vous envoyer par mail la procédure pour venir le chercher, il ronronne déjà d'impatience !</p>`);
        });
      }, 2000);
    }
  });

  // On remet la bordure par défaut si la valeur de l'input change
  $('#adoption-chats #select-cat, #adoption-chats #raison-adoption').on(
    'change',
    function () {
      $(this).css('border', 'solid 1px #ced4da');
    },
  );

  // on change le carousel selon le chat choisi pour voir sa photo
  $('#adoption-chats #select-cat').on('change', () => {
    const carousel = $('#carousel-cats');
    carousel.carousel('pause');
    switch (cat.val()) {
      case 'Sushi':
        carousel.carousel(0);
        break;
      case 'Maki':
        carousel.carousel(1);
        break;
      case 'Sashimi':
        carousel.carousel(2);
        break;
      case 'Yakitori':
        carousel.carousel(3);
        break;
      case 'Onigri':
        carousel.carousel(4);
        break;

      default:
        $('#carousel-cats').carousel(0);
        break;
    }
  });

  // Gestion de la couleur de la tête de chat au survol de la zone
  $('section#description-site').on('mousemove', () => {
    $('section#description-site img').css('background', '#061339');
  });
  $('section#description-site').on('mouseleave', () => {
    $('section#description-site img').css('background', '#7885a5');
  });
});
