$(document).ready(function() {
  $("form").submit(function(event) {
    $(".postedComments").prepend("<p>" +  $("#newComment").val() + "</p>");

    event.preventDefault();
  });
});
