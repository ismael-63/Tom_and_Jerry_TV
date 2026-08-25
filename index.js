import videosData from "./data.js";

let videosGlobal = [];
let indiceActual = 0;

// Función que devuelve los videos locales (reemplaza al fetch)
function getVideos() {
    return videosData;
}

// Función autoinvocada para inicializar la app
(() => {
    videosGlobal = getVideos();
    crearLinks();
    mostrarVideoInicial();
    funcionalidadBotones();
    autoPlay();
})();

function crearLinks() {
    let eps = document.getElementById("eps");

    videosGlobal.forEach((video, indice) => {
        let link = document.createElement("a");
        link.href = "#";
        link.textContent = video.name;
        link.classList.add("ep_link");
        link.addEventListener("click", (e) => {
            e.preventDefault();
            mostrarVideo(indice);
        });
        eps.appendChild(link);
    });
}

function mostrarVideoInicial() {
    let video_element = document.getElementById("video");

    let videosAleatorios = shuffleArray([...videosGlobal]);
    indiceActual = videosGlobal.findIndex(v => v.url === videosAleatorios[0].url);
    video_element.src = videosGlobal[indiceActual].url;
    setTimeout(() => {
		video_element.play();
	},500);
}

function shuffleArray(array) { // Algoritmo Fisher-Yates
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function mostrarVideo(indice) {
    let video_element = document.getElementById("video");

    if (indice < 0) indice = videosGlobal.length - 1;
    if (indice >= videosGlobal.length) indice = 0;

    indiceActual = indice;
    video_element.src = videosGlobal[indiceActual].url;
}

function mostrarSiguiente() {
    mostrarVideo(indiceActual + 1);
}

function mostrarAnterior() {
    mostrarVideo(indiceActual - 1);
}

function mostrarAleatorio() {
    let indiceAleatorio = Math.floor(Math.random() * videosGlobal.length);
    mostrarVideo(indiceAleatorio);
}

function funcionalidadBotones() {
    let botones = document.querySelectorAll(".video_controls button");

    botones[0].addEventListener("click", mostrarAnterior);
    botones[1].addEventListener("click", mostrarAleatorio);
    botones[2].addEventListener("click", mostrarSiguiente);
}

function autoPlay() {
    let video_element = document.getElementById("video");

    video_element.addEventListener("ended", () => {
        if (indiceActual === videosGlobal.length - 1) {
            let videosAleatorios = shuffleArray([...videosGlobal]);
            indiceActual = videosGlobal.findIndex(v => v.url === videosAleatorios[0].url);
        } else {
            indiceActual++;
        }
        video_element.src = videosGlobal[indiceActual].url;
        video_element.play();
    });
}
