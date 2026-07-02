const VIDEO_URL = (location.href + "/db.php");


//Funcion autoinvocada para obtener los videos
(async () => {
    await crearLinks();
    let videos = await getVideos();
    await mostrarVideoInicial();
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
        link.href = video.url;
        link.textContent = video.name;
        link.classList.add("ep_link");
        eps.appendChild(link);
    });
}

async function mostrarVideoInicial(){
    let video_element = document.querySelector(".video");
    let videos = await getVideos();

    videos = shuffleArray(videos);
    video_element.src = videos[0].url;
}   

function shuffleArray(array){ // Algoritmo Fisher-Yates

    for (let i = array.length -1 ; i > 0; i--){
        const j = Math.floor(Math.random()* (i+1));
        [array[i], array[j]] = [array[j], array[i]]
    }

    return array;
}

