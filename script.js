$(window).bind('scroll', function(e) {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = $(window).scrollTop(); 
    
    $('.layer-1').css('top', (0 - (scrolled * 0.2)) + 'px');
    
    
    $('.planet-1').css('top', (1200 - (scrolled * 0.7)) + 'px');
    $('.planet-2').css('top', (900 - (scrolled * 0.5)) + 'px');
    $('.planet-3').css('top', (500 - (scrolled * 0.4)) + 'px');
    $('.planet-4').css('top', (600 - (scrolled * 0.6)) + 'px');
    
    $('.star-1').css('top', (150 - (scrolled * 0.15)) + 'px');
    $('.star-2').css('top', (350 - (scrolled * 0.25)) + 'px');
    $('.star-3').css('top', (280 - (scrolled * 0.2)) + 'px');
    $('.star-4').css('top', (450 - (scrolled * 0.3)) + 'px');
    $('.star-5').css('top', (240 - (scrolled * 0.18)) + 'px');
    $('.star-6').css('top', (600 - (scrolled * 0.22)) + 'px');
    $('.star-7').css('top', (750 - (scrolled * 0.28)) + 'px');
    $('.star-8').css('top', (950 - (scrolled * 0.24)) + 'px');
    
    $('.asteroid-1').css('top', (400 - (scrolled * 0.8)) + 'px');
    $('.asteroid-2').css('top', (500 - (scrolled * 0.9)) + 'px');
    $('.asteroid-3').css('top', (1200 - (scrolled * 0.75)) + 'px');
}