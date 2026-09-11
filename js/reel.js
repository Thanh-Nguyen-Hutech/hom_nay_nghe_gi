/* =========================================
   REEL CONFIG
========================================= */

const REEL_SIZE = 120;
const WINNER_INDEX = 100;
let isSpinning = false;

/* =========================================
   CREATE SONG CARD (GACHA STYLE)
========================================= */

function createSongCard(song) {
    const card = document.createElement("div");
    card.className = `song-card rarity-${song.rarity || "blue"}`;
    card.dataset.id = song.id ?? "";

    const thumbnailUrl = typeof getYoutubeThumbnail === "function" 
        ? getYoutubeThumbnail(song.youtube) 
        : "";

    card.innerHTML = `
        <div class="card-preview">
            <img 
                src="${thumbnailUrl || 'https://placehold.co/320x180/161a22/ffffff?text=No+Cover'}" 
                alt="${song.title || 'Song'}"
                loading="lazy"
                onerror="this.onerror=null; this.src='https://placehold.co/320x180/161a22/ffffff?text=K-POP';"
            >
        </div>
        <div class="card-details">
            <span class="song-group">${song.group || "K-POP"}</span>
            <span class="song-title" title="${song.title || 'Unknown Song'}">${song.title || "Unknown Song"}</span>
            <div class="card-footer">
                <span class="song-badge">${(song.rarity || "NORMAL").toUpperCase()}</span>
            </div>
        </div>
    `;

    return card;
}

/* =========================================
   GENERATE REEL
========================================= */

function generateReel(winner) {
    const reel = document.getElementById("reel");
    if (!reel) {
        console.error("Không tìm thấy #reel");
        return;
    }

    reel.innerHTML = "";

    for (let i = 0; i < REEL_SIZE; i++) {
        let song;

        if (i === WINNER_INDEX) {
            song = winner;
        } else {
            song = songs[Math.floor(Math.random() * songs.length)];
        }

        const card = createSongCard(song);
        reel.appendChild(card);
    }
}

/* =========================================
   SPIN REEL (THÊM 1S CHUẨN BỊ & 7S QUAY)
========================================= */

function spinReel(winner) {
    if (isSpinning) return;

    if (!winner) {
        console.error("Winner không tồn tại");
        return;
    }

    isSpinning = true;
    const reel = document.getElementById("reel");

    if (!reel) {
        console.error("Không tìm thấy #reel");
        isSpinning = false;
        return;
    }

    // 1. Reset vị trí ban đầu
    reel.style.transition = "none";
    reel.style.transform = "translateX(0px)";

    // 2. Tạo danh sách thẻ cho lượt quay mới
    generateReel(winner);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            const firstCard = reel.querySelector(".song-card");
            if (!firstCard) {
                isSpinning = false;
                return;
            }

            // Tính toán khoảng cách chính xác theo card thực tế
            const cardWidth = firstCard.offsetWidth;
            const computedStyle = window.getComputedStyle(firstCard);
            const cardMargin = parseFloat(computedStyle.marginLeft) + parseFloat(computedStyle.marginRight);
            const itemWidth = cardWidth + cardMargin;

            const reelWindow = document.querySelector(".reel-window");
            const windowWidth = reelWindow ? reelWindow.offsetWidth : 960;
            const center = windowWidth / 2;

            const winnerPosition = WINNER_INDEX * itemWidth;
            const finalPosition = -(winnerPosition - center + cardWidth / 2 + parseFloat(computedStyle.marginLeft));

            // PHÁT ÂM THANH NGAY LẬP TỨC KHI BẤM
            if (typeof playOpenSound === "function") {
                playOpenSound();
            }

            // ĐỢI ĐÚNG 2 GIÂY (2000ms) SAU ĐÓ VÒNG QUAY MỚI BẮT ĐẦU CHẠY (Thời gian quay giữ nguyên 7 giây)
            setTimeout(() => {
                reel.style.transition = "transform 6s cubic-bezier(0.08, 0.6, 0.1, 1)";
                reel.style.transform = `translateX(${finalPosition}px)`;
            }, 2000);

            // TỔNG THỜI GIAN CHỜ MỞ POP-UP: 2000ms (đợi) + 7000ms (quay) + 200ms (dừng ổn định) = 9200ms
            setTimeout(() => {
                isSpinning = false;

                if (typeof playResultSound === "function") {
                    playResultSound(winner.rarity);
                }

                if (typeof showResult === "function") {
                    showResult(winner);
                }
            }, 8200);
        });
    });
}