$(function(){
    
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
    
    
    function HeightDetected(){
        var height = $(window).height();
        $('.wall').css('height',height);
    }
	
    HeightDetected();
	
    $(window).resize(function(){
        HeightDetected();
         var sharesPos = $('.shares-container').offset().top-80;
         var uslPos = $('.usl-cont').offset().top-80;
         var aboutPos = $('.about').offset().top-80;
         var mapPos = $('.map').offset().top-80;
         var zakazPos = $('.zakaz').offset().top-80;
         var obrPos = $('.obr').offset().top-80;
    })

    var sharesPos = $('.shares-container').offset().top-300;
    var uslPos = $('.wa').offset().top-300;
    var aboutPos = $('.about').offset().top-300;
    var mapPos = $('.map').offset().top-300;
    var zakazPos = $('.zakaz').offset().top-300;
    var obrPos = $('.obr').offset().top-300;
    
    $(window).scroll(function(){
        if($(this).scrollTop()>=sharesPos){
            $('.shares-container').addClass('animated zoomIn');
        }
        else{
            $('.shares-container').removeClass('animated zoomIn');
        }
        
        
        if($(this).scrollTop()>=uslPos){
            $('.wa').addClass('animated zoomIn');
        }
        else{
            $('.wa').removeClass('animated zoomIn');
        }
        
        
        if($(this).scrollTop()>=aboutPos){
            $('.about').addClass('animated jello');
        }
        else{
            $('.about').removeClass('animated jello');
        }
        
         if($(this).scrollTop()>=mapPos){
            $('.map').addClass('animated jello');
        }
        else{
            $('.map').removeClass('animated jello');
        }
        
         if($(this).scrollTop()>=zakazPos){
            $('.zakaz').addClass('animated jello');
        }
        else{
            $('.zakaz').removeClass('animated jello');
        }
        
         if($(this).scrollTop()>=obrPos){
            $('.main-form').addClass('animated jello');
        }
        else{
            $('.main-form').removeClass('animated jello');
        }
    });
    
    $('.button-menu').click(function(){
        $('.nav-menu').slideToggle("fast");
    });
    
    
    
    
    var clock = $('.flipp').FlipClock(3600 * 24 * 5, {
    clockFace: 'DailyCounter',
    countdown: true,
    });

    
    $('#fil').click(function(){
         $('#fil').fadeOut("slow");
    });
    
        $("ul li a").mPageScroll2id();
        $(".about a").mPageScroll2id();
        $(".shares-container a").mPageScroll2id();
            
        $(".carrepair").click(function(){
            $("html,body").animate({scrollTop: 0 }, 500);
        
        });
    
    
    
});

$(window).load(function(){
    $('.loader').fadeOut();
    $('.text').delay(400).fadeOut('slow');
})
