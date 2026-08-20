const baslatButonu = document.querySelector("#mavi");
const başlangıc = document.querySelector("#başlangıc")
const soruKutusu = document.querySelector("#soruKutusu")

baslatButonu.addEventListener("click", function () {

    başlangıc.style.display = "none";

    soruKutusu.style.display = "block";
});


let dogruY = 0;
let yanlısY = 0;
let puanY = 0;


function cevap(dogruMu){
    if(dogruMu){
        dogruY = dogruY + 1;
        puanY = puanY + 10;
    }else{
        yanlısY = yanlısY +1 ;
    }

    dogru.textContent = dogruY;
    yanlıs.textContent = yanlısY;
    puanY.textContent = puanY;

    soruKutusu.style.display = "none";
    tablo.style.display = "block";
}
