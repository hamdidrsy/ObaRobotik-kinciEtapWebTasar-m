const baslatButonu = document.querySelector("#mavi");
const başlangıc = document.querySelector("#başlangıc")
const soruKutusu = document.querySelector("#soruKutusu")

baslatButonu.addEventListener("click", function () {

    başlangıc.style.display = "none";

    soruKutusu.style.display = "block";
});