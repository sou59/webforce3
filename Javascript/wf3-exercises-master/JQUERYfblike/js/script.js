/*
Ce script se décomposera en trois parties :
1. Les différents éléments de votre page doivent etre chargés en Ajax

Ces éléments sont présent dans le dossier html

2. Il faudra ensuite gérer le formulaire de login qui doit etre envoyé en ajax
au fichier php/connexion. Il vous faudra déterminer en fonction de la réponse
ajax si le formulaire est valide ou pas et afficher dans la popin aside un
message adapté. Les popins doivent pouvoir etre refermées de façon à laisser
l'utilisateur corriger sa saisie

3. Le formulaire d'inscription doit subir un première validation coté client :

 - Aucun champs ne doit etre vide et la checkbox doit etre cochée. Sinon,
 une bordure rouge doit apparaitre sur les inputs
 - Si aucun champs n'est vide. Un délai artificiel doit etre mis en place à l'issue
 duquel la popin doit afficher un message ressemblant à "Votre inscription a bien été
 prise en compte"
*/
document.addEventListener('DOMContentLoaded', () => {
  // init
  $('header').load('html/header.html');
  $('article:first-child').load('html/map.html');
  $('article:last-child').load('html/signin.html');
  $('footer').load('html/footer.html');


  // Formulaire de login
  $(document).on('submit', 'header form', function(e) {
    $.ajax({
      type: "POST",
      url: "php/connexion.php", // the script where you handle the form input.
      data: $("header form").serialize(), // serializes the form's elements.
      success: function(data) {
        console.log(data); // show response from the php script.
        if (!data) {
          $("header aside p").html("Nom d'utilisateur ou mot de passe erroné");
          $("header aside").show();
        }
      }
    });
    e.preventDefault();
  });

  // Formulaire d'inscription
  $(document).on('blur', 'main form input', function() {
    if( !$(this).val() ) {
      $(this).css('border', '1px solid red');
    } else {
      $(this).css('border', '.1rem solid #BDC7D3');
    }
  });
  $(document).on('submit', 'main form', function(e) {
    let validated = true;
    // tout les input text ou password
    $('main form :text, main form :password').each(function () {
      if( !$(this).val() ) {
        validated = false;
        $(this).css('border', '1px solid red');
      }
    });
    // la checkbox
    if ($('main form :radio').is(':checked')) {
      $('main form :radio').parent().css('border', 'none');
    } else {
      validated = false;
      $('main form :radio').parent().css('border', '1px solid red');
    }

    if (validated) {
      $("header aside p").html("Bravo vous avez réussi à vous inscrire, all you base belong to us");
      $("header aside").show();
    }

    e.preventDefault();
  });

  // Gestion popup
  $(document).on('click', 'header aside a', function(e) {
    $("header aside").hide();
  });
});
