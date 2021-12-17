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
        $(this).removeClass('m-1');
    })
    $('.card').mouseleave (function () {
        $(this).addClass('m-1');
    })

});

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

/*
$(document).ready ( function() {
    const themes = {
        ligth: {
            backgound: 'white',
            text: 'black',
        },
        dark: {
            backgound: 'black',
            text: 'white',
        }
    }
    
    function setTheme(newTheme) {
        const themeColors = themes[newTheme];
    
        Object.keys(themeColors).map(function(key){
            HTMLAllCollection.style.setProperty(`--${key}`, themeColors[key]);
        });
    }

    const darkModeToggle = document.querySelector('input[name=theme]');
    darkModeToggle.addEventListener('change', function({ target }) {
        setTheme(target.checked ? 'dark' : 'light');
});

});
*/

const $html = document.querySelector ('html');
const $checkbox = document.querySelector ('switch');

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark_mode');
});

