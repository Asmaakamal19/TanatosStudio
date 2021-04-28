$(function () {
    $('body').niceScroll({ //Nice Scroll Plugin
        cursorcolor: '#f7600e',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'
    });
    $(".header").height($(window).height());// Change Header Height
    // show content of menu
    $(".Menu").click(function(){
        $(".menulist").slideToggle();
    });
    $('.header .arrow i').click(function () { //scroll to Features
        $('html, body').animate({
            scrollTop: $('.Features').offset().top
        }, 1000);//move f 1000ms
        
    });
    // Scroll To Our work
    $('.hire').click(function () {
        $('html, body').animate({
            scrollTop: $('.ourTeam').offset().top
        }, 1000); 
    });
    // Scroll To Our work
    $('.work').click(function () {
        $('html, body').animate({
            scrollTop: $('.ourWork').offset().top
        }, 1000); 
    });
    // Show Hidden Items From ourWork
    $('.show').click(function () {
        $('.ourWork .hidden').fadeIn(1000); 
    });
    // clients opinions checked
    var arrowLeft = $('.opinions .fa-chevron-left'),
        
        arrowRright = $('.opinions .fa-chevron-right');
    
    function checkClients() {
        
        if ($('.client:first').hasClass('active')) {
            
            arrowLeft.fadeOut();
            
        } else {
            
            arrowLeft.fadeIn();
        }
    }
    checkClients();
    $('.opinions i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            $('.opinions .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();    
            });
            
        } else {
            $('.opinions .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });
            
        }
    }); 
});