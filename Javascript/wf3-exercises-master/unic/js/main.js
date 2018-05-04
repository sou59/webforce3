$('form').on('submit', function (e) {
  e.preventDefault();
  if ( ! $("input[type='email']").val() ) {
    $("input[type='email']").css('border', 'solid 1px red');
  } else {
    $('.newsletter form').hide();
    $('.newsletter p').html('Merci !<br><br>Votre inscription a bien été validée !');
  }
});
