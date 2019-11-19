$(document).ready(function() {
  $("form").submit(function(event) {
    var textInput = $("input#text").val().toUpperCase();
    $(".text").text(textInput);
    $("#shouting-text").show();
    event.preventDefault();
  });

});
