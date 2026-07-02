const VIDEO_URL = "http://cartoontv.page.gd/db.php";

let videosGlobal = [];
let indiceActual = 0;


//Funcion autoinvocada para obtener los videos
(async () => {
    await crearLinks();
    videosGlobal = await getVideos();
    await mostrarVideoInicial();
    funcionalidadBotones();
    autoPlay();
})();



async function getVideos() {
    let response = await fetch(VIDEO_URL);
    
    if (!response.ok){
        throw new Error("Http error !status not ok");
    }
    response = await response.json();
    return response;
}

async function crearLinks(){
    let eps = document.getElementById("eps"); //Donde se va a ir agregando los enlaces
    
    let videos = await getVideos();
    videos.forEach(video => {
        let link = document.createElement("a");
        link.href = "#";
        link.textContent = video.name;
        link.classList.add("ep_link");
        link.addEventListener("click", (e) => {
            e.preventDefault();
            let indice = videosGlobal.findIndex(v => v.url === video.url);
            mostrarVideo(indice);
        });
        eps.appendChild(link);
    });
}

async function mostrarVideoInicial(){
    let video_element = document.getElementById("video");
    
    let videosAleatorios = shuffleArray([...videosGlobal]);
    indiceActual = videosGlobal.findIndex(v => v.url === videosAleatorios[0].url);
    video_element.src = videosGlobal[indiceActual].url;
}   

function shuffleArray(array){ // Algoritmo Fisher-Yates

    for (let i = array.length -1 ; i > 0; i--){
        const j = Math.floor(Math.random()* (i+1));
        [array[i], array[j]] = [array[j], array[i]]
    }

    return array;
}

function mostrarVideo(indice){
    let video_element = document.getElementById("video");
    
    if(indice < 0) indice = videosGlobal.length - 1;
    if(indice >= videosGlobal.length) indice = 0;
    
    indiceActual = indice;
    video_element.src = videosGlobal[indiceActual].url;
}

function mostrarSiguiente(){
    mostrarVideo(indiceActual + 1);
}

function mostrarAnterior(){
    mostrarVideo(indiceActual - 1);
}

function mostrarAleatorio(){
    let indiceAleatorio = Math.floor(Math.random() * videosGlobal.length);
    mostrarVideo(indiceAleatorio);
}

function funcionalidadBotones(){
    let botones = document.querySelectorAll(".video_controls button");
    
    botones[0].addEventListener("click", mostrarAnterior);
    botones[1].addEventListener("click", mostrarAleatorio);
    botones[2].addEventListener("click", mostrarSiguiente);
}

function autoPlay(){
    let video_element = document.getElementById("video");
    
    video_element.addEventListener("ended", () => {
        if(indiceActual === videosGlobal.length - 1){
            // Si es el último video, aleatorizar y reiniciar
            let videosAleatorios = shuffleArray([...videosGlobal]);
            indiceActual = videosGlobal.findIndex(v => v.url === videosAleatorios[0].url);
        } else {
            // Si no, ir al siguiente
            indiceActual++;
        }
        video_element.src = videosGlobal[indiceActual].url;
        video_element.play();
    });
}

