$('.button').on('click', function () {
  console.log($(this).parent());
});

$('form').on('submit', function (e) {
  e.preventDefault();

  if ( ! $('#select-taille').val() ) {
    $('#select-taille').css('border', '1px solid red');
  } else {
    $('#select-taille').css('border', '1px solid lightgray');
  }

  if ( ! $('#select-quantity').val() ) {
    $('#select-quantity').css('border', '1px solid red');
  } else {
    $('#select-quantity').css('border', '1px solid lightgray');
  }
})
