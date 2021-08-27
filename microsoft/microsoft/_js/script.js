$ (document).ready( function() {
    $('.card').mouseover( function() {   
        $(this).addClass('shadow-lg');
        $(this).removeClass('m-2');
    });

    $('.card').mouseleave ( function () {
        $(this).removeClass('shadow-lg');
        $(this).addClass('m-2')
    });
});