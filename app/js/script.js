//////////////////START NAV BAR///////////
$(document).ready(function (){
    $(window).scroll(function (){
        if(this.scrollY>20)
            $('.navbar').addClass("sticky");
        else
            $('.navbar').removeClass("sticky");

    });

    $('.menu-toggler').click(function (){
        $(this).toggleClass("active");
        $('.navbar-menu').toggleClass("active");
    })
});
$('.nav-link').on('click', function() {
    $('.active-link').removeClass('active-link');
    $(this).addClass('active-link');
});
////////////////////////////////END NAV BAR/////////////