"use strict"  //make this script works in the 'modern' way;

//shorthand form of $(document).ready();
$(function() {
    


    $(".name").on("click" ,function(){
        $(this).animate({
            left: "+=50px",
            opacity: [ 0.25, "linear" ]
        }, 500)
    });


});
