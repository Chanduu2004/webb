$(document).ready(function() {
  alert("Welcome to my student portfolio!");
});

$(document).ready(function() {
  var scrollButton = $('<button>').text('Scroll to Top').addClass('scroll-top');
  $('body').append(scrollButton);

  scrollButton.click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});