//alert ('olá mundo')

$(document).ready ( function() {

    $('.culto-img').mouseover (function () {
        $(this).removeClass('m-3');
        $(this).addClass('shadow-lg')
    })
    $('.culto-img').mouseleave (function () {
        $(this).addClass('m-3');
        $(this).removeClass('shadow-lg');
    })

});