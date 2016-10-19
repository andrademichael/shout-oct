$(function(){
  $("#fields form").submit(function() {
    var entry = $("input#entry").val();
    entry = entry.toUpperCase();
    $(".responseUpperCase").text(entry);

    $("#shout").show();

    event.preventDefault();
  });
});
