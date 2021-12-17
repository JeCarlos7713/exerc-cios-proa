/*$(document).ready ( function() {

$('.img').mouseover( function() {   
    $(this).addClass('shadow-lg');
    $(this).removeClass('m-3');
});

$('.img').mouseleave ( function () {
    $(this).removeClass('shadow-lg');
    $(this).addClass('m-3')

});*/

$(document).ready ( function() {

    $('.card').mouseover (function () {
        $(this).removeClass('m-2');
    })
    $('.card').mouseleave (function () {
        $(this).addClass('m-2');
    })

});

