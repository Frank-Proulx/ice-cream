$(document).ready(function() {
  $("form#groceries").submit(function(event) {
    event.preventDefault();
    $("#groceries").addClass("hide");
    let array = [$("#item1").val(), $("#item2").val(), $("#item3").val(), $("#item4").val(), $("#item5").val()];
    
    let newArray = array.sort();
    let array3 = [];

    newArray.forEach(function(element){
      array3.push(element.toUpperCase());
    });

    array3.forEach(function(element){
      $("ul#result").append("<li></li>");
      $("ul#result").children("li").last().text(element);
    });
    


  });
});