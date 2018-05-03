// Afficher les tooltips
$('#InputNom, #InputPrenom, #InputPassword, #InputConfirmPassword, #InputPhraseSecrete').on('focus', function () {
  $(this).next().show();
}).on('blur', function () {
  $(this).next().hide();
});



$('form').on('submit', function (e) {
  let validated = true;
  console.log('Envoi formulaire');
  $('input').each(function () {
    if ( !$(this).val() ) {
      $(this).css('border', 'solid 1px red')
      validated = false;
    } else {
      $(this).css('border', 'solid 1px green');
    }
  });

  if ( $('#InputAimeJS').prop('checked') ) {
    // true
  } else {
    // false
    validated = false;
  }

  if ($('#InputPassword').val() != $('#InputConfirmPassword').val()) {
    validated = false;
    $('#InputPassword').css('border', 'solid 1px red');
    $('#InputConfirmPassword').css('border', 'solid 1px red');
    $('#InputConfirmPassword').parent().find('p').remove();
    $('#InputConfirmPassword').parent().append('<p>Mots de passse différents, wtf bro</p>')
  } else if ($('#InputPassword').val() && $('#InputConfirmPassword').val()) {
    $('#InputPassword').css('border', 'solid 1px green');
    $('#InputConfirmPassword').css('border', 'solid 1px green');
  }

  if ( $('#InputPhraseSecrete').val() != "lol" ) {
    validated = false;
    $('#InputPhraseSecrete').css('border', 'solid 1px red');
    $('#InputPhraseSecrete').parent().find('p').remove();
    $('#InputPhraseSecrete').parent().append('<p>Erreur tu nes pas un anananymous !!!</p>')
  } else {
    $('#InputPhraseSecrete').css('border', 'solid 1px green');
  }

  if ( validated ) {
    $('body').load('bravo.html');
  }

  e.preventDefault();
});
