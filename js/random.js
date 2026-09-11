const rarityConfig = {

    blue: {
        name: "COMMON",
        chance: 50
    },

    purple: {
        name: "UNCOMMON",
        chance: 25
    },

    pink: {
        name: "RARE",
        chance: 15
    },

    red: {
        name: "EPIC",
        chance: 8
    },

    gold: {
        name: "LEGENDARY",
        chance: 2
    }

};

function getRandomRarity() {

    const random =
        Math.random() * 100;

    let cumulative = 0;

    for (const rarity in rarityConfig) {

        cumulative +=
            rarityConfig[rarity].chance;

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

    const rarity =
        getRandomRarity();

    let pool =
        songList.filter(song =>
            song.rarity === rarity
        );

    /*
     * Nếu rarity chưa có data,
     * lấy random toàn bộ.
     */
    if (pool.length === 0) {

        pool = songList;

    }

    const index =
        Math.floor(
            Math.random() * pool.length
        );

    return pool[index];

}