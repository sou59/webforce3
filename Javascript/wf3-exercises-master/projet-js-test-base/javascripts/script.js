$('#hamburger').on('click', function () {
  $('#hamburger').parent().addClass('displayed');
  $('#navigation').show();
});
$('#hamburger').parent().on('mouseleave', function () {
  $(this).removeClass('displayed');
});

$('#navigation li a').on('click', function () {
  $('#main-section').load($(this).attr('data-href'), function () {
    $('.switch-form').on('click', function () {
      $('.questionnaire').toggleClass('displayed');
    });
  });
});
