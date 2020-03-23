let burgerKnap = document.querySelector("#burger_knap");

document.addEventListener("DOMContentLoaded", start);

function start() {
    //I vores start funktion kalder vi forskellige funktioner, og gør vores burgermenu klikbar, så den kan åbnes.

    burgerKnap.addEventListener("click", openMenu);
}

function openMenu() {
    //Hver gang der klikkes på burgerKnap bliver denne funktion kaldt.
    console.log("openMenu");

    //Knappen, selve menuen og overlayet toggler de klasser der viser dem og skjuler dem. Toggle betyder, at hvis klassen allerede er på, fjerner den den, og hvis den ikke er på, tilføjer den den.
    burgerKnap.classList.toggle("open");
    document.querySelector("#menu").classList.toggle("toggle_menu");
    document.querySelector(".menu_overlay").classList.toggle("overlay_on_off");

    let links = document.querySelectorAll(".menu_links a");

    //Da det er en one-pager, bliver vi nødt til at lytte på hvert link, efter et tryk. Så når man løfter musen eller fingeren fra et link, bliver funktionen toggleMenu kaldt, hvilket lukker menuen.
    links.forEach(link => {
        link.addEventListener("mouseup", toggleMenu);
    })
}

function toggleMenu() {
    console.log("toggleMenu");
    burgerKnap.classList.toggle("open");
    document.querySelector("#menu").classList.toggle("toggle_menu");
    document.querySelector(".menu_overlay").classList.toggle("overlay_on_off");
}
