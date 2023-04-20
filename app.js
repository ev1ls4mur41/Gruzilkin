import $ from "jquery";
$(function(){

    /*Fixed Header*/
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function(){
        introH = intro.innerHeight();

        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH)
    },);

    function checkScroll(scrollPos, introH){
        if(scrollPos > introH){
            header.addClass("fixed");

        }  else{
            header.removeClass("fixed");
        }
    }



    /*Smooth scroll*/

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top;

        console.log(blockOffset);

        $("html, body").animate({
            scrollTop: blockOffset - 60
        }, 0 );
    });





});