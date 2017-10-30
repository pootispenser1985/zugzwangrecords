$(document).ready(function() {
  $('#contactLink').click(function() {
    $('#contact').toggle();
  });
  $('.gear-heading').click(function() {
    $(this).next().toggle();
  });

  $('#email-form').submit(function(event) {
    event.preventDefault();
    submitEmail();
  });

  function submitEmail() {
    var email = $('#email').val();

    alert(email);
  }
});
