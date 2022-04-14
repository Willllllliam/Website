//    -   _          - -         - -   -       -       
//  /    |  \   / \   |   |     |     |  \   /      |  
//                                                     
//  \    |  /  |   |  |   |     |     |  /   \      |  
//        -                      -     -               
//    \  |     |   |  |   |     |     |  \     \       
//                                                     
//    /  |      \ /   |   |     |     |   |    /    |  
//  -                - -   - -   - -         -         
//Why won't github work?
//Git is being dumb
$(document).ready(function () {
  $("#inconspicuousButton").click(function () {
    $("#anotherButton").show();
  });
  
  $("#anotherButton").click(function () {
    $("#secretLink").show();
  });
});