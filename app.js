
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 0) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});


$("#advBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#advantages").offset().top
    }, 2000);
});

$("#introBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    }, 2000);
});

$("#faqBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#faq").offset().top
    }, 2000);
});

$("#autoBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#autopark").offset().top
    }, 2000);
});

$("#whyBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#why").offset().top
    }, 2000);
});

$("#mainBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    }, 2000);
});