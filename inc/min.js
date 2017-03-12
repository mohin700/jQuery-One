
$(document).ready(function(){

	//Faid out
    $(".ui-close").click(function(){
        $(this).parent(".massege-block").fadeOut();
    });


    //FAQ-Hide-Ans
    $(".answer").hide();

    //Toggle Function
    $(".question-unit .question").click(function(){

    	$(this).next('.answer').slideToggle();
    })

    //add question style
    $('.question h3').addClass('fa-style');




});