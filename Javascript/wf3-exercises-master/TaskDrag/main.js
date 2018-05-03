/*
À faire :
1. Rendre les tâches glissables
2. Rendre les tâches déposables
3. Si les tâches sont déposées dans la liste des tâches archivées
4. Le formulaire doit pouvoir ajouter une nouvelle tâche disposant des mêmes possibilités

*/
function nl2br (str, is_xhtml) {
  if (typeof str === 'undefined' || str === null) {
      return '';
  }
  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

$(document).ready(function() {
  var $dragging = null;

  $(document.body).on("mousemove", function(e) {
    if ($dragging) {
      $dragging.offset({
        top: e.pageY,
        left: e.pageX
      });
    }
  });

  $(document).on('mousedown', 'article', function (e) {
    if ( $(e.target).is('h1') || $(e.target).is('hr') || $(e.target).is('p') ) {
      $dragging = $(e.target).parent();
    } else {
      $dragging = $(e.target);
      $(e.target).addClass('movable');
    }

  }).on('mouseup', function () {
    if ( $('#done').hasClass('hover') ) {
      if ( $('.moveable').length ) {
        console.log('test');
        $('#done ul').append(`<li>${$(".movable h1").html()}</li>`)
        $('.movable').remove();
      } else {
        console.log('return');
        return;
      }
    }
    $dragging = null;
    $('article').removeClass('movable');
  });

  // ajout d'article
  $('#actions form').on('submit', function (e) {
    e.preventDefault();

    if ( !$('#InputTitle').val() ) {
      $('#InputTitle').css('border', 'solid 2px red');
    } else {
      $('#InputTitle').css('border', 'solid 2px gray');
      $('#tasks').append(`<article style="left: ${Math.floor(Math.random() * Math.floor(150))}px; top: ${Math.floor(Math.random() * Math.floor(150))}px"><h1>${$('#InputTitle').val()}</h1><hr><p>${nl2br($('#InputDescription').val())}</p></article>`)
    }
  })

  $('#done').on('mouseover', function () {
    $(this).addClass('hover');
  }).on('mouseleave', function () {
    $(this).removeClass('hover');
  });

  $('article').on('mouseover', function () {
    $(this).addClass('hover');
  }).on('mouseleave', function () {
    $(this).removeClass('hover');
  });
});
