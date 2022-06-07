//alert("ok");

function zmienKlase(idObiektu,nazwaKlasy) {
    let element = document.getElementById(idObiektu);
    element.className = nazwaKlasy;
}

var napis = "Kochamy siatkówkę!";
var dziala = false;

function ruchomy() {
    let element = document.getElementById('rTekst');
    element.value = napis;
    napis = napis.substring(1, napis.length) + napis.substring(0, 1);

    //uchomy tekst.....r

    
    element.value = napis;

    if (dziala) {
        setTimeout('ruchomy()', 200);
    }
    var counterContainer = document.querySelector(".website-counter");
    var resetButton = document.querySelector("#reset");
    var visitCount = localStorage.getItem("page_view");

    let isCounterIncremented = sessionStorage.getItem('isCounterIncremented');
    if (!isCounterIncremented) {
        if (visitCount) {
            visitCount = Number(visitCount) + 1;
            localStorage.setItem("page_view", visitCount);

        } else {
            visitCount = 1;
            localStorage.setItem("page_view", 1);
        }
    }
}