$(document).ready(function() {
  $('#contactLink').click(function() {
    $('#contact').toggle();
  });
  $('.gear-heading').click(function() {
    $(this).next().toggle();
  });
});
