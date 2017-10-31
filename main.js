$(document).ready(function() {
  //following two functions are for showing or hiding parts of the page
  $('#contactLink').click(function() {
    $('#contact').toggle();
  });
  $('.gear-heading').click(function() {
    $(this).next().toggle();
  });
  //instead of the default submit action, do submitEmail()
  $('#email-form').submit(function(event) {
    event.preventDefault();
    submitEmail();
  });

  function submitEmail() {
    //get the email POST variable
    var email = $('#email').val();
    /*give it to inserter.php, which will send an email to the user
    with a randomly generated access code, and a link to the download
    site. This is -hilariously- insecure. But, it doesn't need to be secure
    and at this juncture, I am too dumb to do it! Shippable product. */
    $.ajax({
      type: "POST",
      url: "inserter.php",
      data: "email=" + email
    });
    //clear out the text input box
    $('#email').val('');
  } //end submitEmail()
}); //end document.ready()
