// JavaScript Document

// hamburger openen
var openButton = document.querySelector("header button:nth-of-type(2)");
openButton.onclick = openMenu;

function openMenu() {
    var overlay = document.querySelector("header>section>section")
    var hamburger = document.querySelector("header nav:nth-of-type(1)")
    hamburger.classList.add("toonMenu");
    overlay.classList.add("overlayOn")
}

// hamburger sluiten
var sluitButton = document.querySelector("header nav:nth-of-type(1) ul li:nth-of-type(1) button");
sluitButton.onclick = sluitMenu;

function sluitMenu() {
    var overlay = document.querySelector("header>section>section")
    var hamburger = document.querySelector("header nav");
    hamburger.classList.remove("toonMenu");
    overlay.classList.remove("overlayOn");
}

// horizontale scroll categoriën
function rightScroll() {
    const left = document.querySelector(".categorieën ul");
    left.scrollBy(1200, 0);
}
function leftScroll() {
    const right = document.querySelector(".categorieën ul");
    right.scrollBy(-1200, 0);
}
scrollBy(x - coord, y - coord)

// horizontale scroll merken
function rightScrollmerken() {
    const left = document.querySelector(".merken ul");
    left.scrollBy(288, 0);
}
function leftScrollmerken() {
    const right = document.querySelector(".merken ul");
    right.scrollBy(-288, 0);
}
scrollBy(x - coord, y - coord)

// horizontale scroll aanbiedingen
function rightScrollaanbiedingen() {
    const left = document.querySelector(".aanbiedingen>section>nav>ul");
    left.scrollBy(224, 0);
}
function leftScrollaanbiedingen() {
    const right = document.querySelector(".aanbiedingen>section>nav>ul");
    right.scrollBy(-224, 0);
}
scrollBy(x - coord, y - coord)


// horizontale scroll thema's
function rightScrollthema() {
    const left = document.querySelector(".themas ul");
    left.scrollBy(288, 0);
}
function leftScrollthema() {
    const right = document.querySelector(".themas ul");
    right.scrollBy(-288, 0);
}
scrollBy(x - coord, y - coord)


function rightScrollbestverkocht() {
    const left = document.querySelector(".bestverkocht>nav>ul");
    left.scrollBy(224, 0);
}
function leftScrollbestverkocht() {
    const right = document.querySelector(".bestverkocht>nav>ul");
    right.scrollBy(-224, 0);
}
scrollBy(x - coord, y - coord)