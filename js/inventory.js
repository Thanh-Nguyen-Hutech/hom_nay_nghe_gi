/* =========================================
   INVENTORY & SONG COLLECTION
========================================= */

const INVENTORY_KEY = "kpop_randomizer_inventory";

function getInventory() {
    const data = localStorage.getItem(INVENTORY_KEY);
    if (!data) return [];
    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("Inventory data bị lỗi:", error);
        return [];
    }
}

function saveToInventory(song) {
    if (!song) return;
    const inventory = getInventory();
    inventory.push({
        ...song,
        obtainedAt: new Date().toISOString()
    });
    localStorage.setItem(INVENTORY_KEY, JSON.stringify(inventory));
}

/* =========================================
   RENDER ALL SONGS (SHOW TOÀN BỘ BÀI TRONG HÒM)
========================================= */
function renderInventory() {
    const container = document.getElementById("inventory");
    if (!container) {
        console.warn("Không tìm thấy #inventory");
        return;
    }

    container.innerHTML = "";

    const songList = typeof songs !== "undefined" ? songs : [];

    // 1. LỌC DANH SÁCH THEO THỂ LOẠI HIỆN TẠI (currentMode)
    let filteredSongs = songList;
    if (typeof currentMode !== "undefined") {
        filteredSongs = songList.filter(song => song.genre === currentMode);
    }

    // 2. HIỂN THỊ THÔNG BÁO NẾU KHÔNG CÓ BÀI NÀO
    if (filteredSongs.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 40px;">
                Chưa có dữ liệu bài hát cho thể loại này.
            </div>
        `;
        return;
    }

    // 3. RENDER CÁC THẺ ĐÃ ĐƯỢC LỌC
    filteredSongs.forEach(song => {
        const card = createInventoryCard(song);
        container.appendChild(card);
    });
}

/* =========================================
   CREATE CARD ITEM (CHUẨN GACHA GRID)
========================================= */
function createInventoryCard(song) {
    const card = document.createElement("div");
    card.className = `inventory-card rarity-${song.rarity || "blue"}`;

    const thumbnailUrl = typeof getYoutubeThumbnail === "function" 
        ? getYoutubeThumbnail(song.youtube) 
        : "";

    card.innerHTML = `
        <div class="card-preview">
            <img 
                src="${thumbnailUrl || 'https://placehold.co/320x180/13171f/ffffff?text=No+Cover'}" 
                alt="${song.title || 'Song'}"
                loading="lazy"
                onerror="if(this.src.includes('maxresdefault')) { this.src = this.src.replace('maxresdefault', 'hqdefault'); } else { this.onerror = null; this.src = 'https://placehold.co/320x180/13171f/ffffff?text=K-POP'; }"
            >
        </div>

        <div class="card-details">
            <span class="card-category">${song.group || "K-POP"}</span>
            <h3 class="card-title" title="${song.title || 'Unknown'}">${song.title || "Unknown"}</h3>
            
            <div class="card-footer">
                <span class="card-sub">${song.artist || song.album || "Track"}</span>
                <span class="card-badge">${(song.rarity || "NORMAL").toUpperCase()}</span>
            </div>
        </div>
    `;

    return card;
}

/* =========================================
   POP-UP RESULT MODAL
========================================= */
function showResult(song) {
    const modal = document.getElementById("resultModal");
    const image = document.getElementById("modalImage");
    const title = document.getElementById("modalTitle");
    const subtitle = document.getElementById("modalSubtitle");
    const rarity = document.getElementById("modalRarity");
    const linkBtn = document.getElementById("modalLinkBtn"); // ĐÃ THÊM KHAI BÁO TẠI ĐÂY

    if (!modal) return;

    const thumbnailUrl = typeof getYoutubeThumbnail === "function" 
        ? getYoutubeThumbnail(song.youtube) 
        : "";

    if (image) {
        image.src = thumbnailUrl || "https://placehold.co/640x360/1a1a1a/ffffff?text=No+Cover";
        image.alt = song.title || "Result Card";
        image.onerror = function() {
            if (this.src.includes("maxresdefault")) {
                this.src = this.src.replace("maxresdefault", "hqdefault");
            } else {
                this.onerror = null;
                this.src = "https://placehold.co/640x360/1a1a1a/ffffff?text=K-POP";
            }
        };
    }

    if (title) title.textContent = song.title || "Unknown Song";
    if (subtitle) subtitle.textContent = song.group || "";
    
    if (rarity) {
        rarity.textContent = (song.rarity || "COMMON").toUpperCase();
    }

    // Xử lý nút Link YouTube
    if (linkBtn) {
        let url = song.youtube || "";
        if (url && !url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }
        
        if (url) {
            linkBtn.href = url;
            linkBtn.style.display = "inline-block"; // Hiện nút nếu có link
        } else {
            linkBtn.style.display = "none"; // Ẩn nút nếu không có link
        }
    }

    modal.className = `modal-overlay rarity-${song.rarity || "blue"} show`;
    modal.classList.remove("hidden");

    saveToInventory(song);
}

function closeModal() {
    const modal = document.getElementById("resultModal");
    if (modal) {
        modal.classList.remove("show");
        modal.classList.add("hidden");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("closeModalBtn");
    const acceptBtn = document.getElementById("acceptModalBtn");

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (acceptBtn) acceptBtn.addEventListener("click", closeModal);

    const modal = document.getElementById("resultModal");
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }
});