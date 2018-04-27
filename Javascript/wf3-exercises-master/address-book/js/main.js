$(() => {

  $('#show-form').click(() => {
    $('#contact-form').show();
  });

  function displayContacts() {
    $('#address-book').append("<ul></ul>");
    for (let i = 0; i < localStorage.length; i++) {
      let title = JSON.parse(localStorage.getItem(i)).title;
      let lastName = JSON.parse(localStorage.getItem(i)).lastName;
      let firstName = JSON.parse(localStorage.getItem(i)).firstName;
      let phone = JSON.parse(localStorage.getItem(i)).phone;
      let listElement = `<li class='${i}'>${firstName} ${lastName}</li>`;
      $('#address-book ul').append(listElement);
      $(`#address-book .${i}`).click( () => {
        $('#contact-form').hide();
        $('#title').val(title);
        $('#lastName').val(lastName);
        $('#firstName').val(firstName);
        $('#phone').val(phone);
        $('#contact-details h3').html(title + ' ' + lastName + ' ' + firstName);
        $('#contact-details span').html('Numéro de téléphone : ' + phone);
      });
    }
  }

  $('#contact-details a').click( (event) => {
    $('#contact-form').show();
  });

  $('#clear-address-book').click( () => {
    localStorage.clear();
    $('#address-book li').remove();
  });

  $("form").submit(function( event ) {
    event.preventDefault();
    const contactItem = {
      title:  $('#title').val(),
      lastName:  $('#lastName').val(),
      firstName:  $('#firstName').val(),
      phone:  $('#phone').val()
    };
    localStorage.setItem(`${localStorage.length}`, JSON.stringify(contactItem));
    $('#contact-form').hide();
    $('#lastName').val('');
    $('#firstName').val('');
    $('#phone').val('');
    $('#address-book ul').remove();
    displayContacts();
  });

  displayContacts();
}); // end domready
