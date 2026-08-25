const baslatButonu = document.querySelector("#mavi");

const başlangıc = document.querySelector("#başlangıc");

const soruKutusu = document.querySelector("#soruKutusu");

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

    yanlis.textContent = yanlisY;

    puan.textContent = puanY;


    soruKutusu.style.display = "none";

    tablo.style.display = "block";

}