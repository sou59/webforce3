$(() => {
  $('#exercice_3_1 #b').click(function () {
    $(this).hide();
  });
  $('#exercice_3_2 .clic').click(function () {
    $('#exercice_3_2 .cible').hide();
  });
  $('#exercice_3_3 #b0').dblclick(function () {
    $(this).next().toggleClass('highlight');
  });
  $('#exercice_3_4 #b1').dblclick(function () {
    $(this).next().fadeToggle();
  });
  $('#exercice_3_5 #b2').hover(function () {
    $(this).fadeOut();
  });
  $('#exercice_3_6 #b3').hover(function () {
    $(this).css('opacity', .5);
  }, function () {
    $(this).css('opacity', 1);
  });
  $('#exercice_3_7 #inp0').focus(function () {
    $(this).parent().next("div").fadeOut();
  });
  $('#exercice_3_8 #inp1').focusout(function () {
    $(this).parent().next("div").fadeOut();
  });
  $('#exercice_3_9 #inp2').change(function () {
    $(this).parent().next("div").fadeOut();
  });
  $(document).keypress(function(e) {
    if(e.which == 104) {
      $('#exercice_3_10 div').fadeOut();
    }
  });
});
