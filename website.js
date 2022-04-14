//    -   _          - -         - -   -       -       
//  /    |  \   / \   |   |     |     |  \   /      |  
//                                                     
//  \    |  /  |   |  |   |     |     |  /   \      |  
//        -                      -     -               
//    \  |     |   |  |   |     |     |  \     \       
//                                                     
//    /  |      \ /   |   |     |     |   |    /    |  
//  -                - -   - -   - -         -         
$(document).ready(function () {
  $("#inconspicuousButton").click(function () {
    $("#anotherButton").show();
  });
  
  $("#anotherButton").click(function () {
    $("#secretLink").show();
  });
});