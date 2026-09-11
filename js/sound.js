/* =========================================
   SINGLE SOUND ENGINE (KHÔNG BỊ LOOP / ĐÈ TIẾNG)
========================================= */

const SINGLE_SOUND_PATH = "sounds/roll.mp3";

// Sử dụng đúng 1 đối tượng Audio duy nhất trong suốt vòng đời web
const reelAudio = new Audio(SINGLE_SOUND_PATH);
reelAudio.volume = 0.7;

/* =========================================
   1. PHÁT 1 LẦN DUY NHẤT KHI BẮT ĐẦU QUAY
========================================= */
function playOpenSound() {
    try {
        reelAudio.pause();
        reelAudio.currentTime = 0; // Đưa về mốc 0s để phát từ đầu
        reelAudio.play().catch(err => {
            console.warn("Chưa thể phát âm thanh:", err);
        });
    } catch (e) {
        console.warn("Lỗi phát audio:", e);
    }
}

function stopOpenSound() {
    try {
        reelAudio.pause();
        reelAudio.currentTime = 0;
    } catch (e) {}
}

/* =========================================
   2. KHÔNG PHÁT LẠI KHI DỪNG (TRÁNH LẶP 2 LẦN)
========================================= */
function playResultSound(rarity = "blue") {
    // Để trống để file âm thanh phát liên tục từ lúc quay đến khi hiện popup mà không bị lặp lại
}