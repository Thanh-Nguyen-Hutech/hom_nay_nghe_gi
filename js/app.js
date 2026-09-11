let currentMode = "song";

/* =========================================
   RANDOM CONTROLLER
========================================= */

function randomize() {
    if (typeof isSpinning !== "undefined" && isSpinning) {
        return;
    }

    const winner = getWinnerByMode();

    if (!winner) {
        alert("Không tìm thấy dữ liệu bài hát!");
        return;
    }

    if (typeof spinReel === "function") {
        spinReel(winner);
    }
}

function getWinnerByMode() {
    switch (currentMode) {
        case "song":
            return getRandomSong();
        case "idol":
            return getRandomSong();
        case "group":
            return getRandomSong();
        case "album":
            return getRandomSong();
        default:
            return getRandomSong();
    }
}

/* =========================================
   SETUP BUTTONS
========================================= */

function setupModeButtons() {
    const buttons = document.querySelectorAll(".mode-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            currentMode = button.dataset.mode;
        });
    });
}

function setupRandomButton() {
    const button = document.getElementById("randomBtn");
    if (!button) return;

    button.addEventListener("click", randomize);
}

/* =========================================
   INIT APPLICATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    setupModeButtons();
    setupRandomButton();

    // 1. Tự động nạp khung Reel ban đầu bằng 1 bài bất kỳ để không bị hộp đen
    if (typeof generateReel === "function" && typeof songs !== "undefined" && songs.length > 0) {
        generateReel(songs[0]);
    }

    // 2. Render toàn bộ bài hát vào lưới showcase dưới cùng
    if (typeof renderInventory === "function") {
        renderInventory();
    }
});