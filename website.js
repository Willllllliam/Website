//    -   _          - -         - -   -       -       
//  /    |  \   / \   |   |     |     |  \   /      |  
//                                                     
//  \    |  /  |   |  |   |     |     |  /   \      |  
//        -                      -     -               
//    \  |     |   |  |   |     |     |  \     \       
//                                                     
//    /  |      \ /   |   |     |     |   |    /    |  
//  -                - -   - -   - -         -         
//What if I edit this in the browser?
$(document).ready(function () {
  $("#inconspicuousButton").click(function () {
    $("#anotherButton").show();
  });
  
  $("#anotherButton").click(function () {
    $("#secretLink").show();
  });
});
