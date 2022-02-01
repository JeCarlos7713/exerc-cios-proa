//data 
const data = document.getElementById('data');
data.innerHTML = new Date().getFullYear();

// abre e fecha menu
const btnMenu = document.querySelector(".btn-menu");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

btnMenu.addEventListener("click", function () {

    const linksAltura = links.getBoundingClientRect().height; // getBoundingClientRect() captura a altura dos elementos
    const containerAltura = linksContainer.getBoundingClientRect().height;

    //console.log(linksAltura); //200

    if (containerAltura === 0) {
        linksContainer.style.height = `${linksAltura}px`;
    } else {
        linksContainer.style.height = 0;
    }
});
// abre e fecha do menu


//Scroll menu
const nav = document.getElementById("nav");
const scrollTop = document.querySelector(".scroll-top")

window.addEventListener("scroll", function () {
    const scrollAltura = this.window.pageYOffset;
    const navAltura = nav.getBoundingClientRect().height;

    if (scrollAltura > navAltura) {
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }

    if (scrollAltura > 500) {
        scrollTop.classList.add("show-link");
    } else {
        scrollTop.classList.remove("show-link");
    }
})