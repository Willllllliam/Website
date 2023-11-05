$(document).ready(function(){
  console.log("Jquery works!");
});
$(document).keypress(function(e) {
  console.log("keypress detected: " + e.keyCode)
  if (e.keyCode == 119) {
    $(".player").animate({top: "-=10px"}, 20);
    console.log("up");
  } else if (e.keyCode == 115) {
    $(".player").animate({top: "+=10px"}, 20);
    console.log("down");
  } else if (e.keyCode == 97) {
    $(".player").animate({left: "-=10px"}, 20);
    console.log("left");
  } else if (e.keyCode == 100) {
    $(".player").animate({left: "+=10px"}, 20);
    console.log("right");
  }
});