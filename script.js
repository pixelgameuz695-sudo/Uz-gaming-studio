"use strict";


/* =========================
   UZ GAMING STUDIO
   MAIN JAVASCRIPT
========================= */


/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector(".menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    document.querySelectorAll(".menu a").forEach(function (link) {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });
}


/* =========================
   GAMES
========================= */

const games = [
    {
        name: "Counter-Strike 2",
        tag: "FPS",
        description: "Mashhur raqobatbardosh shooter.",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
        steam: "https://store.steampowered.com/app/730/CounterStrike_2/"
    },

    {
        name: "Dota 2",
        tag: "MOBA",
        description: "Strategiya va jamoaviy janglar.",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
        steam: "https://store.steampowered.com/app/570/Dota_2/"
    },

    {
        name: "PUBG: BATTLEGROUNDS",
        tag: "BATTLE ROYALE",
        description: "Omon qolish uchun kurash.",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg",
        steam: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/"
    },

    {
        name: "Apex Legends",
        tag: "BATTLE ROYALE",
        description: "Tezkor va dinamik janglar.",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg",
        steam: "https://store.steampowered.com/app/1172470/Apex_Legends/"
    },

    {
        name: "Rocket League",
        tag: "SPORT",
        description: "Futbol va avtomobillar bir joyda.",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg",
        steam: "https://store.steampowered.com/app/252950/Rocket_League/"
    },

    {
        name: "Warframe",
        tag: "ACTION",
        description: "Tezkor kosmik action o'yini.",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg",
        steam: "https://store.steampowered.com/app/230410/Warframe/"
    },

    {
        name: "Team Fortress 2",
        tag: "FPS",
        description: "Klassik jamoaviy shooter.",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg",
        steam: "https://store.steampowered.com/app/440/Team_Fortress_2/"
    },

    {
        name: "Civilization VI",
        tag: "STRATEGY",
        description: "O'z imperiyangizni quring.",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg",
        steam: "https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/"
    }
];


function renderGames() {

    const gameGrid = document.getElementById("gameGrid");

    if (!gameGrid) {
        return;
    }

    gameGrid.innerHTML = "";

    games.forEach(function (game) {

        const card = document.createElement("article");

        card.className = "game-card";

        card.innerHTML = `
            <div class="game-image">
                <img
                    src="${game.image}"
                    alt="${game.name}"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >
            </div>

            <div class="game-info">
                <div class="game-tag">${game.tag}</div>

                <h3>${game.name}</h3>

                <p>${game.description}</p>

                <a
                    href="${game.steam}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="steam-btn"
                >
                    🎮 Steam'da ko'rish
                </a>
            </div>
        `;

        gameGrid.appendChild(card);
    });
}


renderGames();


/* =========================
   NEWS
========================= */

const news = [
    {
        date: "UZ GAMING",
        title: "Gaming olamiga xush kelibsiz",
        text: "UZ Gaming Studio yangi gaming portal sifatida ish boshladi."
    },

    {
        date: "GAME ZONE",
        title: "Eng mashhur o'yinlar",
        text: "Portalda mashhur PC o'yinlari va ularning rasmiy Steam sahifalari jamlandi."
    },

    {
        date: "COMMUNITY",
        title: "O'zbek gamerlar hamjamiyati",
        text: "Yangiliklar va gaming suhbatlari uchun bizning ijtimoiy tarmoqlarimizga qo'shiling."
    }
];


function renderNews() {

    const newsGrid = document.getElementById("newsGrid");

    if (!newsGrid) {
        return;
    }

    newsGrid.innerHTML = "";

    news.forEach(function (item) {

        const card = document.createElement("article");

        card.className = "news-card";

        card.innerHTML = `
            <div class="news-date">${item.date}</div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        `;

        newsGrid.appendChild(card);
    });
}


renderNews();


/* =========================
   FPS TEST
========================= */

const fpsBtn = document.getElementById("fpsBtn");
const fpsResult = document.getElementById("fpsResult");

if (fpsBtn && fpsResult) {

    fpsBtn.addEventListener("click", function () {

        fpsResult.textContent = "Test qilinmoqda...";

        let frames = 0;
        let start = performance.now();

        function countFrames(now) {

            frames++;

            if (now - start < 1000) {
                requestAnimationFrame(countFrames);
            } else {

                const fps = Math.round(
                    frames * 1000 / (now - start)
                );

                fpsResult.textContent = "Taxminiy FPS: " + fps;
            }
        }

        requestAnimationFrame(countFrames);
    });
}


/* =========================
   GAMING TIMER
========================= */

const timerElement = document.getElementById("timer");
const startTimer = document.getElementById("startTimer");
const resetTimer = document.getElementById("resetTimer");

let seconds = 0;
let timerInterval = null;


function updateTimer() {

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const mm = String(minutes).padStart(2, "0");
    const ss = String(remainingSeconds).padStart(2, "0");

    if (timerElement) {
        timerElement.textContent = `${mm}:${ss}`;
    }
}


if (startTimer) {

    startTimer.addEventListener("click", function () {

        if (timerInterval !== null) {
            clearInterval(timerInterval);
            timerInterval = null;
            startTimer.textContent = "Start";
            return;
        }

        startTimer.textContent = "Pause";

        timerInterval = setInterval(function () {

            seconds++;

            updateTimer();

        }, 1000);
    });
}


if (resetTimer) {

    resetTimer.addEventListener("click", function () {

        clearInterval(timerInterval);

        timerInterval = null;
        seconds = 0;

        updateTimer();

        if (startTimer) {
            startTimer.textContent = "Start";
        }
    });
}


/* =========================
   RANDOM GAME
========================= */

const randomGameBtn = document.getElementById("randomGameBtn");
const randomGameResult = document.getElementById("randomGameResult");


if (randomGameBtn && randomGameResult) {

    randomGameBtn.addEventListener("click", function () {

        const randomIndex = Math.floor(
            Math.random() * games.length
        );

        const selectedGame = games[randomIndex];

        randomGameResult.textContent =
            "Bugun o'ynang: " + selectedGame.name;
    });
}


/* =========================
   STARTUP
========================= */

console.log("UZ Gaming Studio ishga tushdi."); 