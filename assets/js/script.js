$(function(){

AOS.init({
  duration: 500,
  easing: 'ease-out-quart'
//  once: true
});


$('.moreList').click(function(){
    $('ul.mobList').toggle("slow");
    //$('ul.mobList').toggleClass('active')
});


$('#nav-icon4').click(function(){
  	$(this).toggleClass('open');
    $('.menuBg').toggleClass('active')
    $('.overlay').toggleClass('show');
    $('body').toggleClass('nav-active')
});


$('.menuBg ul li a').click(function(){
    $('#nav-icon4').removeClass('open');
    $('.menuBg').toggleClass('active')
    $('.overlay').toggleClass('show');
    $('body').toggleClass('nav-active')
});



// Smooth Scroll 
    jQuery(function() {
        jQuery('.smoothClick, .smoothLink > a').click(function() {
        
        var dis = jQuery(this);

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = jQuery(this.hash);
          target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top-80
            }, 1000);
            return false;
          }
        }
      });
    });



// Tabs Function
$('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
});




    if($('input[type="text"], textarea, select').val().length > 0 ){
                $('fieldset').addClass('active');
            }
        $('.field input, .field textarea, .field select').blur(function()
        {
            if($(this).val() != ''){
            $(this).closest('.field').addClass('active');
        } else {
        
             $(this).closest('.field').removeClass('active');
        }
        
    });
    $('.field input, .field textarea, .field select').focusin(function()
        {
            $(this).closest('.field').addClass('active');
    });








}); //---Main Function Close



$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 100) {
        $('header.header').addClass('logoHide')
    } else {
        $('header.header').removeClass('logoHide')
    }
});


$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 900) {
        $('header.header .logoSmall').addClass('show')
    } else {
        $('header.header .logoSmall').removeClass('show')
    }
});



