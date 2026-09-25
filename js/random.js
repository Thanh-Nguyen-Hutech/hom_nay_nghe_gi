const rarityConfig = {
    blue: {
        name: "COMMON",
        chance: 70
    },
    purple: {
        name: "UNCOMMON",
        chance: 20
    },
    pink: {
        name: "RARE",
        chance: 7
    },
    red: {
        name: "EPIC",
        chance: 2
    },
    gold: {
        name: "LEGENDARY",
        chance: 1
    }
};

function getRandomRarity() {
    const random = Math.random() * 100;
    let cumulative = 0;

    for (const rarity in rarityConfig) {
        cumulative += rarityConfig[rarity].chance;
        if (random <= cumulative) {
            return rarity;
        }
    }
    return "blue";
}

function getRandomSong(songList = songs) {
    if (!songList || songList.length === 0) {
        return null;
    }

    /*
     * 1. Lọc theo THỂ LOẠI (currentMode từ app.js)
     */
    let genrePool = songList;
    if (typeof currentMode !== "undefined") {
        genrePool = songList.filter(song => song.genre === currentMode);
    }

    // Nếu tab này chưa có bài nào, lấy tạm toàn bộ danh sách để dự phòng
    if (genrePool.length === 0) {
        genrePool = songList;
    }

    /*
     * 2. Quay ngẫu nhiên ĐỘ HIẾM
     */
    const rarity = getRandomRarity();

    /*
     * 3. Lọc ra các bài vừa ĐÚNG THỂ LOẠI vừa ĐÚNG ĐỘ HIẾM
     */
    let pool = genrePool.filter(song => song.rarity === rarity);

    // Nếu độ hiếm này chưa có bài nào trong thể loại đó, lấy random trong kho thể loại đó
    if (pool.length === 0) {
        pool = genrePool;
    }

    /*
     * 4. Bốc 1 bài ngẫu nhiên cuối cùng
     */
    const index = Math.floor(Math.random() * pool.length);

    return pool[index];
}