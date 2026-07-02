const videosData = [
	{ "name": "Baby Puss", "url": "https://ww.supercartoons.net/tom-and-jerry/baby-puss.mp4" },
	{ "name": "The Cat And The Mermouse", "url": "https://ww.supercartoons.net/tom-and-jerry/the-cat-and-the-mermouse.mp4" },
	{ "name": "Thats My Pup", "url": "https://ww.supercartoons.net/tom-and-jerry/thats-my-pup.mp4" },
	{ "name": "Mucho Mouse", "url": "https://ww.supercartoons.net/tom-and-jerry/mucho-mouse.mp4" },
	{ "name": "Of Feline Bondage", "url": "https://ww.supercartoons.net/tom-and-jerry/of-feline-bondage.mp4" },
	{ "name": "Quiet Please", "url": "https://ww.supercartoons.net/tom-and-jerry/quiet-please.mp4" },
	{ "name": "Casanova Cat", "url": "https://ww.supercartoons.net/tom-and-jerry/casanova-cat.mp4" },
	{ "name": "Downhearted Duckling", "url": "https://ww.supercartoons.net/tom-and-jerry/downhearted-duckling.mp4" },
	{ "name": "Mouse Into Space", "url": "https://ww.supercartoons.net/tom-and-jerry/mouse-into-space.mp4" },
	{ "name": "Catty Cornered Tom And Jerry", "url": "https://ww.supercartoons.net/tom-and-jerry/catty-cornered-tom-and-jerry.mp4" },
	{ "name": "The Midnight Snack", "url": "https://ww.supercartoons.net/tom-and-jerry/the-midnight-snack.mp4" },
	{ "name": "The Invisible Mouse", "url": "https://ww.supercartoons.net/tom-and-jerry/the-invisible-mouse.mp4" },
	{ "name": "Smitten Kitten", "url": "https://ww.supercartoons.net/tom-and-jerry/smitten-kitten.mp4" },
	{ "name": "The Flying Sorceress", "url": "https://ww.supercartoons.net/tom-and-jerry/the-flying-sorceress.mp4" },
	{ "name": "Is There A Doctor In The Mouse", "url": "https://ww.supercartoons.net/tom-and-jerry/is-there-a-doctor-in-the-mouse.mp4" },
	{ "name": "The Zoot Cat", "url": "https://ww.supercartoons.net/tom-and-jerry/the-zoot-cat.mp4" },
	{ "name": "Love That Pup", "url": "https://ww.supercartoons.net/tom-and-jerry/love-that-pup.mp4" },
	{ "name": "Just Ducky", "url": "https://ww.supercartoons.net/tom-and-jerry/just-ducky.mp4" },
	{ "name": "Toms Photo Finish", "url": "https://ww.supercartoons.net/tom-and-jerry/toms-photo-finish.mp4" },
	{ "name": "The Year Of The Mouse", "url": "https://ww.supercartoons.net/tom-and-jerry/the-year-of-the-mouse.mp4" },
	{ "name": "Springtime For Thomas", "url": "https://ww.supercartoons.net/tom-and-jerry/springtime-for-thomas.mp4" },
	{ "name": "Jerry And The Goldfish", "url": "https://ww.supercartoons.net/tom-and-jerry/jerry-and-the-goldfish.mp4" },
	{ "name": "Pet Peeve", "url": "https://ww.supercartoons.net/tom-and-jerry/pet-peeve.mp4" },
	{ "name": "Landing Stripling", "url": "https://ww.supercartoons.net/tom-and-jerry/landing-stripling.mp4" },
	{ "name": "Cannery Rodent", "url": "https://ww.supercartoons.net/tom-and-jerry/cannery-rodent.mp4" },
	{ "name": "The Bowling Alley Cat", "url": "https://ww.supercartoons.net/tom-and-jerry/the-bowling-alley-cat.mp4" },
	{ "name": "Mouse Cleaning", "url": "https://ww.supercartoons.net/tom-and-jerry/mouse-cleaning.mp4" },
	{ "name": "Cruise Cat", "url": "https://ww.supercartoons.net/tom-and-jerry/cruise-cat.mp4" },
	{ "name": "Blue Cat Blues", "url": "https://ww.supercartoons.net/tom-and-jerry/blue-cat-blues.mp4" },
	{ "name": "Tom Ic Energy", "url": "https://ww.supercartoons.net/tom-and-jerry/tom-ic-energy.mp4" },
	{ "name": "Mouse Trouble", "url": "https://ww.supercartoons.net/tom-and-jerry/mouse-trouble.mp4" },
	{ "name": "Purr Chance To Dream", "url": "https://ww.supercartoons.net/tom-and-jerry/purr-chance-to-dream.mp4" },
	{ "name": "Hic Cup Pup", "url": "https://ww.supercartoons.net/tom-and-jerry/hic-cup-pup.mp4" },
	{ "name": "Tot Watchers", "url": "https://ww.supercartoons.net/tom-and-jerry/tot-watchers.mp4" },
	{ "name": "Love Me Love My Mouse", "url": "https://ww.supercartoons.net/tom-and-jerry/love-me-love-my-mouse.mp4" },
	{ "name": "Part Time Pal", "url": "https://ww.supercartoons.net/tom-and-jerry/part-time-pal.mp4" },
	{ "name": "Nit Witty Kitty", "url": "https://ww.supercartoons.net/tom-and-jerry/nit-witty-kitty.mp4" },
	{ "name": "Designs On Jerry", "url": "https://ww.supercartoons.net/tom-and-jerry/designs-on-jerry.mp4" },
	{ "name": "Sorry Safari", "url": "https://ww.supercartoons.net/tom-and-jerry/sorry-safari.mp4" },
	{ "name": "The Mouse From H U N G E R", "url": "https://ww.supercartoons.net/tom-and-jerry/the-mouse-from-h-u-n-g-e-r.mp4" },
	{ "name": "Fine Feathered Friend", "url": "https://ww.supercartoons.net/tom-and-jerry/fine-feathered-friend.mp4" },
	{ "name": "Polka Dot Puss", "url": "https://ww.supercartoons.net/tom-and-jerry/polka-dot-puss.mp4" },
	{ "name": "The Dog House", "url": "https://ww.supercartoons.net/tom-and-jerry/the-dog-house.mp4" },
	{ "name": "Barbecue Brawl", "url": "https://ww.supercartoons.net/tom-and-jerry/barbecue-brawl.mp4" },
	{ "name": "Bad Day At Cat Rock", "url": "https://ww.supercartoons.net/tom-and-jerry/bad-day-at-cat-rock.mp4" },
	{ "name": "The Mouse Comes To Dinner", "url": "https://ww.supercartoons.net/tom-and-jerry/the-mouse-comes-to-dinner.mp4" },
	{ "name": "Safety Second", "url": "https://ww.supercartoons.net/tom-and-jerry/safety-second.mp4" },
	{ "name": "Little School Mouse", "url": "https://ww.supercartoons.net/tom-and-jerry/little-school-mouse.mp4" },
	{ "name": "Switchin Kitten", "url": "https://ww.supercartoons.net/tom-and-jerry/switchin-kitten.mp4" },
	{ "name": "Puss N Boats", "url": "https://ww.supercartoons.net/tom-and-jerry/puss-n-boats.mp4" },
	{ "name": "The Cat Concerto", "url": "https://ww.supercartoons.net/tom-and-jerry/the-cat-concerto.mp4" },
	{ "name": "Cat Napping", "url": "https://ww.supercartoons.net/tom-and-jerry/cat-napping.mp4" },
	{ "name": "Tom And Cherie", "url": "https://ww.supercartoons.net/tom-and-jerry/tom-and-cherie.mp4" },
	{ "name": "Buddies Thicker Than Water", "url": "https://ww.supercartoons.net/tom-and-jerry/buddies-thicker-than-water.mp4" },
	{ "name": "Surf Bored Cat", "url": "https://ww.supercartoons.net/tom-and-jerry/surf-bored-cat.mp4" },
	{ "name": "Sufferin Cats", "url": "https://ww.supercartoons.net/tom-and-jerry/sufferin-cats.mp4" },
	{ "name": "The Little Orphan", "url": "https://ww.supercartoons.net/tom-and-jerry/the-little-orphan.mp4" },
	{ "name": "The Missing Mouse", "url": "https://ww.supercartoons.net/tom-and-jerry/the-missing-mouse.mp4" },
	{ "name": "Tops With Pops", "url": "https://ww.supercartoons.net/tom-and-jerry/tops-with-pops.mp4" },
	{ "name": "The Brothers Carry Mouse Off", "url": "https://ww.supercartoons.net/tom-and-jerry/the-brothers-carry-mouse-off.mp4" },
	{ "name": "Mouse In Manhattan", "url": "https://ww.supercartoons.net/tom-and-jerry/mouse-in-manhattan.mp4" },
	{ "name": "The Hollywood Bowl", "url": "https://ww.supercartoons.net/tom-and-jerry/the-hollywood-bowl.mp4" },
	{ "name": "Baby Butch", "url": "https://ww.supercartoons.net/tom-and-jerry/baby-butch.mp4" },
	{ "name": "Down And Outing", "url": "https://ww.supercartoons.net/tom-and-jerry/down-and-outing.mp4" },
	{ "name": "Filet Meow", "url": "https://ww.supercartoons.net/tom-and-jerry/filet-meow.mp4" },
	{ "name": "Dr Jekyll And Mr Mouse", "url": "https://ww.supercartoons.net/tom-and-jerry/dr-jekyll-and-mr-mouse.mp4" },
	{ "name": "The Flying Cat", "url": "https://ww.supercartoons.net/tom-and-jerry/the-flying-cat.mp4" },
	{ "name": "Smarty Cat", "url": "https://ww.supercartoons.net/tom-and-jerry/smarty-cat.mp4" },
	{ "name": "Carmen Get It", "url": "https://ww.supercartoons.net/tom-and-jerry/carmen-get-it.mp4" },
	{ "name": "Shutter Bugged Cat", "url": "https://ww.supercartoons.net/tom-and-jerry/shutter-bugged-cat.mp4" },
	{ "name": "Jerry And The Lion", "url": "https://ww.supercartoons.net/tom-and-jerry/jerry-and-the-lion.mp4" },
	{ "name": "Hatch Up Your Troubles", "url": "https://ww.supercartoons.net/tom-and-jerry/hatch-up-your-troubles.mp4" },
	{ "name": "Jerry And Jumbo", "url": "https://ww.supercartoons.net/tom-and-jerry/jerry-and-jumbo.mp4" },
	{ "name": "Timid Tabby", "url": "https://ww.supercartoons.net/tom-and-jerry/timid-tabby.mp4" },
	{ "name": "Haunted Mouse", "url": "https://ww.supercartoons.net/tom-and-jerry/haunted-mouse.mp4" },
	{ "name": "Tee For Two", "url": "https://ww.supercartoons.net/tom-and-jerry/tee-for-two.mp4" },
	{ "name": "The Framed Cat", "url": "https://ww.supercartoons.net/tom-and-jerry/the-framed-cat.mp4" },
	{ "name": "Mice Follies", "url": "https://ww.supercartoons.net/tom-and-jerry/mice-follies.mp4" },
	{ "name": "Its Greek To Me Ow", "url": "https://ww.supercartoons.net/tom-and-jerry/its-greek-to-me-ow.mp4" },
	{ "name": "Matinee Mouse", "url": "https://ww.supercartoons.net/tom-and-jerry/matinee-mouse.mp4" },
	{ "name": "Texas Tom", "url": "https://ww.supercartoons.net/tom-and-jerry/texas-tom.mp4" },
	{ "name": "Saturday Evening Puss", "url": "https://ww.supercartoons.net/tom-and-jerry/saturday-evening-puss.mp4" },
	{ "name": "Posse Cat", "url": "https://ww.supercartoons.net/tom-and-jerry/posse-cat.mp4" },
	{ "name": "Robin Hoodwinked", "url": "https://ww.supercartoons.net/tom-and-jerry/robin-hoodwinked.mp4" },
	{ "name": "Jerry Go Round", "url": "https://ww.supercartoons.net/tom-and-jerry/jerry-go-round.mp4" },
	{ "name": "Cat Fishin", "url": "https://ww.supercartoons.net/tom-and-jerry/cat-fishin.mp4" },
	{ "name": "Slicked Up Pup", "url": "https://ww.supercartoons.net/tom-and-jerry/slicked-up-pup.mp4" },
	{ "name": "Mouse For Sale", "url": "https://ww.supercartoons.net/tom-and-jerry/mouse-for-sale.mp4" },
	{ "name": "Tall In The Trap", "url": "https://ww.supercartoons.net/tom-and-jerry/tall-in-the-trap.mp4" },
	{ "name": "Im Just Wild About Jerry", "url": "https://ww.supercartoons.net/tom-and-jerry/im-just-wild-about-jerry.mp4" },
	{ "name": "Flirty Birdy", "url": "https://ww.supercartoons.net/tom-and-jerry/flirty-birdy.mp4" },
	{ "name": "Cue Ball Cat", "url": "https://ww.supercartoons.net/tom-and-jerry/cue-ball-cat.mp4" },
	{ "name": "Neapolitan Mouse", "url": "https://ww.supercartoons.net/tom-and-jerry/neapolitan-mouse.mp4" },
	{ "name": "High Steaks", "url": "https://ww.supercartoons.net/tom-and-jerry/high-steaks.mp4" },
	{ "name": "The A Tom Inable Snowman", "url": "https://ww.supercartoons.net/tom-and-jerry/the-a-tom-inable-snowman.mp4" },
	{ "name": "Puss Gets The Boot", "url": "https://ww.supercartoons.net/tom-and-jerry/puss-gets-the-boot.mp4" },
	{ "name": "A Mouse In The House", "url": "https://ww.supercartoons.net/tom-and-jerry/a-mouse-in-the-house.mp4" },
	{ "name": "The Two Mouseketeers", "url": "https://ww.supercartoons.net/tom-and-jerry/the-two-mouseketeers.mp4" },
	{ "name": "Thats My Mommy", "url": "https://ww.supercartoons.net/tom-and-jerry/thats-my-mommy.mp4" },
	{ "name": "The Cat Above And The Mouse Below", "url": "https://ww.supercartoons.net/tom-and-jerry/the-cat-above-and-the-mouse-below.mp4" }
];

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
