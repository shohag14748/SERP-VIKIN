$(document).ready(function(){
    $('.button-group a').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.button-group a:first-child').on('click',function(e){
        $('.price td span:first-child,.total td h2 span:first-child').addClass('active');
        $('.price td span:first-child,.total td h2 span:first-child').siblings().removeClass('active');
    });
    $('.button-group a:last-child').on('click',function(e){
        $('.price td span:last-child,.total td h2 span:last-child').addClass('active');
        $('.price td span:last-child,.total td h2 span:last-child').siblings().removeClass('active');
    });
});