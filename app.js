const baslatButonu = document.querySelector("#mavi");

const başlangıc = document.querySelector("#başlangıc");

const soruKutusu = document.querySelector("#soruKutusu");

const soruKutusu2 = document.querySelector("#soruKutusu2")

const soruKutusu3 = document.querySelector("#soruKutusu3")

const soruKutusu4 = document.querySelector("#soruKutusu4")


const tablo = document.querySelector("#tablo");


let dogruY = 0;

let yanlisY = 0;

let puanY = 0;


baslatButonu.addEventListener("click", function () {

    başlangıc.style.display = "none";

    soruKutusu.style.display = "block";

});


function cevap(dogruMu) {

    if (dogruMu) {

        dogruY = dogruY + 1;

        puanY = puanY + 10;

    } else {

        yanlisY = yanlisY + 1;

    }

    dogru.textContent = dogruY;
    yanlış.textContent = yanlisY;
    puan.textContent = puanY;

    soruKutusu.style.display = "none";
    soruKutusu2.style.display = "block";

}

function cevap2(dogruMu) {

    if (dogruMu) {
        dogruY = dogruY + 1;
        puanY = puanY + 10;
    } else {
        yanlisY = yanlisY + 1;
    }

    dogru.textContent = dogruY;
    yanlış.textContent = yanlisY;
    puan.textContent = puanY;

    soruKutusu2.style.display = "none";
    soruKutusu3.style.display = "block";
}

function cevap3(dogruMu) {

    if (dogruMu) {
        dogruY = dogruY + 1;
        puanY = puanY + 10;
    } else {
        yanlisY = yanlisY + 1;
    }

    dogru.textContent = dogruY;
    yanlış.textContent = yanlisY;
    puan.textContent = puanY;

    soruKutusu3.style.display = "none";
    soruKutusu4.style.display = "block";
}

function cevap4(dogruMu) {

    if (dogruMu) {
        dogruY = dogruY + 1;
        puanY = puanY + 10;
    } else {
        yanlisY = yanlisY + 1;
    }

    dogru.textContent = dogruY;
    yanlış.textContent = yanlisY;
    puan.textContent = puanY;

    soruKutusu4.style.display = "none";
    tablo.style.display = "block";
}