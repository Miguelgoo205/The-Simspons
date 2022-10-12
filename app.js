window.addEventListener("load", FetchApi)
const apiRest = "https://thesimpsonsquoteapi.glitch.me/quotes";
const btnGenerate = document.getElementById("generate");
const img = document.getElementById("img");
const phrase = document.getElementById("phrase");
const tittle = document.getElementById("tittle");

btnGenerate.addEventListener("click", FetchApi)
function FetchApi() {
    fetch(apiRest)
    .then(response => response.json())
    .then(data => (img.src=data[0].image, tittle.textContent=data[0].character, phrase.textContent=`"${data[0].quote}"`));
}
