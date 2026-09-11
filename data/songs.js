const songs = [

    /* =====================================================
       NMIXX
    ===================================================== */
    { id: 1, title: "O.O", artist: "NMIXX", group: "NMIXX", album: "AD MARE", type: "title", rarity: "red", youtube: "https://youtu.be/3GWscde8LSY", spotify: "" },
    { id: 2, title: "DICE", artist: "NMIXX", group: "NMIXX", album: "ENTWURF", type: "title", rarity: "red", youtube: "https://youtu.be/p1bjnyDqI9k", spotify: "" },
    { id: 3, title: "Love Me Like This", artist: "NMIXX", group: "NMIXX", album: "expérgo", type: "title", rarity: "pink", youtube: "https://youtu.be/EDbwNBQMAzE", spotify: "" },
    { id: 4, title: "Party O'Clock", artist: "NMIXX", group: "NMIXX", album: "A Midsummer NMIXX's Dream", type: "title", rarity: "pink", youtube: "https://youtu.be/Xyje3i9Rj1s", spotify: "" },
    { id: 5, title: "DASH", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: BREAK", type: "title", rarity: "red", youtube: "https://youtu.be/7UecFm_bSTU", spotify: "" },
    { id: 6, title: "See that?", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: STICK OUT", type: "title", rarity: "red", youtube: "https://youtu.be/cZ4zZ8G2uG4", spotify: "" },
    { id: 7, title: "KNOW ABOUT ME", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: FORWARD", type: "title", rarity: "pink", youtube: "https://youtu.be/aFrQIJ5cbRc", spotify: "" },
    { id: 8, title: "Love Is Lonely", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: BREAK", type: "title", rarity: "purple", youtube: "https://youtu.be/zhrT1cmQ9zA", spotify: "" },
    { id: 9, title: "Young, Dumb, Stupid", artist: "NMIXX", group: "NMIXX", album: "expérgo", type: "title", rarity: "purple", youtube: "https://youtu.be/5eh6Vj_vVg4", spotify: "" },
    { id: 10, title: "Soñar (Breaker)", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: BREAK", type: "title", rarity: "pink", youtube: "https://youtu.be/MMtRxcy8PX0", spotify: "" }, /* FIX DEAD LINK */

    { id: 11, title: "Tank", artist: "NMIXX", group: "NMIXX", album: "AD MARE", type: "b-side", rarity: "pink", youtube: "https://youtu.be/kY1zVcDhUSU", spotify: "" },
    { id: 12, title: "LOUD", artist: "NMIXX", group: "NMIXX", album: "HEAVY SERENADE", type: "b-side", rarity: "gold", youtube: "https://youtu.be/e7t8JzqVXcs", spotify: "" },
    { id: 13, title: "Cool (Your Rainbow)", artist: "NMIXX", group: "NMIXX", album: "ENTWURF", type: "b-side", rarity: "pink", youtube: "https://youtu.be/4wKU9oIXnTI", spotify: "" },
    { id: 14, title: "Kiss", artist: "NMIXX", group: "NMIXX", album: "ENTWURF", type: "b-side", rarity: "purple", youtube: "https://youtu.be/cKkVGikfQ6M", spotify: "" },
    { id: 15, title: "Love Me Like This", artist: "NMIXX", group: "NMIXX", album: "expérgo", type: "b-side", rarity: "pink", youtube: "https://youtu.be/EDbwNBQMAzE", spotify: "" },
    { id: 16, title: "My Gosh", artist: "NMIXX", group: "NMIXX", album: "expérgo", type: "b-side", rarity: "purple", youtube: "https://youtu.be/qQ1W9y2Z4K8", spotify: "" },
    { id: 17, title: "Passionfruit", artist: "NMIXX", group: "NMIXX", album: "A Midsummer NMIXX's Dream", type: "b-side", rarity: "pink", youtube: "https://youtu.be/7Kx8V9j5Y5w", spotify: "" },
    { id: 18, title: "Roller Coaster", artist: "NMIXX", group: "NMIXX", album: "A Midsummer NMIXX's Dream", type: "b-side", rarity: "pink", youtube: "https://youtu.be/K1x9aZk4aE4", spotify: "" },
    { id: 19, title: "Run For Roses", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: BREAK", type: "b-side", rarity: "red", youtube: "https://youtu.be/h00DpJn_ldM", spotify: "" }, /* FIX DEAD LINK */
    { id: 20, title: "BOOM", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: BREAK", type: "b-side", rarity: "purple", youtube: "https://youtu.be/h-7ag-IkUdE", spotify: "" },


    /* =====================================================
       (G)I-DLE
    ===================================================== */
    { id: 21, title: "LATATA", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Am", type: "title", rarity: "red", youtube: "https://youtu.be/9mQk7Evt6Vs", spotify: "" },
    { id: 22, title: "HANN (Alone)", artist: "(G)I-DLE", group: "(G)I-DLE", album: "HANN", type: "title", rarity: "red", youtube: "https://youtu.be/OKNXn2qCEws", spotify: "" },
    { id: 23, title: "Senorita", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Made", type: "title", rarity: "pink", youtube: "https://youtu.be/GElGqO2Jq0A", spotify: "" },
    { id: 24, title: "Oh my god", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Trust", type: "title", rarity: "red", youtube: "https://youtu.be/om3n2ni8luE", spotify: "" },
    { id: 25, title: "HWAA", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Burn", type: "title", rarity: "red", youtube: "https://youtu.be/z3szNvgQxHo", spotify: "" },
    { id: 26, title: "TOMBOY", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I NEVER DIE", type: "title", rarity: "gold", youtube: "https://youtu.be/Jh4QFaPmdss", spotify: "" },
    { id: 27, title: "Nxde", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I love", type: "title", rarity: "gold", youtube: "https://youtu.be/fCO7f0SmrDc", spotify: "" },
    { id: 28, title: "Queencard", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I feel", type: "title", rarity: "gold", youtube: "https://youtu.be/7HDeem-JaSY", spotify: "" },
    { id: 29, title: "Super Lady", artist: "(G)I-DLE", group: "(G)I-DLE", album: "2", type: "title", rarity: "red", youtube: "https://youtu.be/6f3RzjXPQwA", spotify: "" },
    { id: 30, title: "Klaxon", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I SWAY", type: "title", rarity: "pink", youtube: "https://youtu.be/rTKqSmX9XhQ", spotify: "" },

    { id: 31, title: "Maze", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Am", type: "b-side", rarity: "purple", youtube: "https://youtu.be/Qy8r9jL3MHg", spotify: "" },
    { id: 32, title: "What's in Your House?", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Am", type: "b-side", rarity: "purple", youtube: "https://youtu.be/4L_Uv6XWzL8", spotify: "" },
    { id: 33, title: "Put It Straight", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Made", type: "b-side", rarity: "pink", youtube: "https://youtu.be/W8s5Yk7RjEw", spotify: "" },
    { id: 34, title: "Maybe", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Trust", type: "b-side", rarity: "purple", youtube: "https://youtu.be/K9sXz9z3R-s", spotify: "" },
    { id: 35, title: "Dahlia", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Burn", type: "b-side", rarity: "red", youtube: "https://youtu.be/D5R-5V8R0F4", spotify: "" },
    { id: 36, title: "Already", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I NEVER DIE", type: "b-side", rarity: "pink", youtube: "https://youtu.be/U0bXW8aO-L0", spotify: "" },
    { id: 37, title: "Villain Dies", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I NEVER DIE", type: "b-side", rarity: "pink", youtube: "https://youtu.be/P5zD5Xw8C_s", spotify: "" },
    { id: 38, title: "Escape", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I NEVER DIE", type: "b-side", rarity: "purple", youtube: "https://youtu.be/8b7-N3lY9-E", spotify: "" },
    { id: 39, title: "All Night", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I feel", type: "b-side", rarity: "pink", youtube: "https://youtu.be/4L-M4j8b-oQ", spotify: "" },
    { id: 40, title: "Fate", artist: "(G)I-DLE", group: "(G)I-DLE", album: "2", type: "b-side", rarity: "gold", youtube: "https://youtu.be/kM-zV78gKik", spotify: "" },


    /* =====================================================
       TWICE
    ===================================================== */
    { id: 41, title: "Like OOH-AHH", artist: "TWICE", group: "TWICE", album: "The Story Begins", type: "title", rarity: "red", youtube: "https://youtu.be/0rtV5esQT6I", spotify: "" },
    { id: 42, title: "CHEER UP", artist: "TWICE", group: "TWICE", album: "Page Two", type: "title", rarity: "gold", youtube: "https://youtu.be/c7rCyll5AeY", spotify: "" },
    { id: 43, title: "TT", artist: "TWICE", group: "TWICE", album: "TWICEcoaster: LANE 1", type: "title", rarity: "gold", youtube: "https://youtu.be/ePpPVE-GGJw", spotify: "" },
    { id: 44, title: "KNOCK KNOCK", artist: "TWICE", group: "TWICE", album: "TWICEcoaster: LANE 2", type: "title", rarity: "red", youtube: "https://youtu.be/8A2t_tAjMz8", spotify: "" },
    { id: 45, title: "SIGNAL", artist: "TWICE", group: "TWICE", album: "Signal", type: "title", rarity: "red", youtube: "https://youtu.be/VQtonf1fv_s", spotify: "" },
    { id: 46, title: "What is Love?", artist: "TWICE", group: "TWICE", album: "What is Love?", type: "title", rarity: "gold", youtube: "https://youtu.be/i0p1bmr0EmE", spotify: "" },
    { id: 47, title: "Dance The Night Away", artist: "TWICE", group: "TWICE", album: "Summer Nights", type: "title", rarity: "red", youtube: "https://youtu.be/Fm5iP0S1z9w", spotify: "" },
    { id: 48, title: "YES or YES", artist: "TWICE", group: "TWICE", album: "YES or YES", type: "title", rarity: "pink", youtube: "https://youtu.be/mAKsZ26SabQ", spotify: "" },
    { id: 49, title: "FANCY", artist: "TWICE", group: "TWICE", album: "FANCY YOU", type: "title", rarity: "gold", youtube: "https://youtu.be/kOHB85vDuow", spotify: "" },
    { id: 50, title: "Feel Special", artist: "TWICE", group: "TWICE", album: "Feel Special", type: "title", rarity: "gold", youtube: "https://youtu.be/3ymwOvzhwHs", spotify: "" },

    { id: 51, title: "Like a Fool", artist: "TWICE", group: "TWICE", album: "The Story Begins", type: "b-side", rarity: "purple", youtube: "https://youtu.be/1XzR5-xO4X8", spotify: "" },
    { id: 52, title: "Touchdown", artist: "TWICE", group: "TWICE", album: "TWICEcoaster: LANE 1", type: "b-side", rarity: "pink", youtube: "https://youtu.be/8y8z8eH1e-A", spotify: "" },
    { id: 53, title: "1 to 10", artist: "TWICE", group: "TWICE", album: "TWICEcoaster: LANE 1", type: "b-side", rarity: "purple", youtube: "https://youtu.be/4W2M8d-2z-g", spotify: "" },
    { id: 54, title: "JELLY JELLY", artist: "TWICE", group: "TWICE", album: "TWICEcoaster: LANE 1", type: "b-side", rarity: "purple", youtube: "https://youtu.be/1-X1Q0l08-c", spotify: "" },
    { id: 55, title: "WOW", artist: "TWICE", group: "TWICE", album: "TWICEcoaster: LANE 2", type: "b-side", rarity: "pink", youtube: "https://youtu.be/8zG2-4H_xXw", spotify: "" },
    { id: 56, title: "HO!", artist: "TWICE", group: "TWICE", album: "Summer Nights", type: "b-side", rarity: "pink", youtube: "https://youtu.be/5-eF0H7-s_I", spotify: "" },
    { id: 57, title: "Shot Thru the Heart", artist: "TWICE", group: "TWICE", album: "Summer Nights", type: "b-side", rarity: "purple", youtube: "https://youtu.be/8T-Q8U-ZzLg", spotify: "" },
    { id: 58, title: "LOVE FOOLISH", artist: "TWICE", group: "TWICE", album: "Feel Special", type: "b-side", rarity: "red", youtube: "https://youtu.be/PeFXRIJXYZo", spotify: "" }, /* FIX DEAD LINK */
    { id: 59, title: "UP NO MORE", artist: "TWICE", group: "TWICE", album: "Eyes wide open", type: "b-side", rarity: "red", youtube: "https://youtu.be/2V2A-G0q8Kw", spotify: "" },
    { id: 60, title: "ICON", artist: "TWICE", group: "TWICE", album: "Formula of Love", type: "b-side", rarity: "gold", youtube: "https://youtu.be/8cM2o-6Z-8w", spotify: "" },


    /* =====================================================
       IVE
    ===================================================== */
    { id: 61, title: "ELEVEN", artist: "IVE", group: "IVE", album: "ELEVEN", type: "title", rarity: "gold", youtube: "https://youtu.be/--FmExEAsM8", spotify: "" },
    { id: 62, title: "LOVE DIVE", artist: "IVE", group: "IVE", album: "LOVE DIVE", type: "title", rarity: "gold", youtube: "https://youtu.be/Y8JFxS1HlDo", spotify: "" },
    { id: 63, title: "After LIKE", artist: "IVE", group: "IVE", album: "After LIKE", type: "title", rarity: "gold", youtube: "https://youtu.be/F0B7HDiY-10", spotify: "" },
    { id: 64, title: "I AM", artist: "IVE", group: "IVE", album: "I've IVE", type: "title", rarity: "gold", youtube: "https://youtu.be/6ZUIwj3FgUY", spotify: "" },
    { id: 65, title: "Baddie", artist: "IVE", group: "IVE", album: "I've Mine", type: "title", rarity: "red", youtube: "https://youtu.be/Da4P2uT4mAQ", spotify: "" },
    { id: 66, title: "HEYA", artist: "IVE", group: "IVE", album: "IVE SWITCH", type: "title", rarity: "red", youtube: "https://youtu.be/FJOOmp6OQpM", spotify: "" },
    { id: 67, title: "Accendio", artist: "IVE", group: "IVE", album: "IVE SWITCH", type: "title", rarity: "pink", youtube: "https://youtu.be/xJ-Kng4YyqM", spotify: "" },
    { id: 68, title: "REBEL HEART", artist: "IVE", group: "IVE", album: "IVE EMPATHY", type: "title", rarity: "red", youtube: "https://youtu.be/g36q0ZLvygQ?si=EIb7HYrhj2VAPVcg", spotify: "" },
    { id: 69, title: "ATTITUDE", artist: "IVE", group: "IVE", album: "IVE EMPATHY", type: "title", rarity: "pink", youtube: "https://youtu.be/8O-9zX9C2mE", spotify: "" },
    { id: 70, title: "XOXZ", artist: "IVE", group: "IVE", album: "IVE SECRET", type: "title", rarity: "red", youtube: "https://youtu.be/2k-4Z-8eK2g", spotify: "" },

    { id: 71, title: "Take It", artist: "IVE", group: "IVE", album: "ELEVEN", type: "b-side", rarity: "purple", youtube: "https://youtu.be/3T-C4C2mG3A", spotify: "" },
    { id: 72, title: "ROYAL", artist: "IVE", group: "IVE", album: "LOVE DIVE", type: "b-side", rarity: "red", youtube: "https://youtu.be/pXbugSyo0tI", spotify: "" }, /* FIX DEAD LINK */
    { id: 73, title: "My Satisfaction", artist: "IVE", group: "IVE", album: "After LIKE", type: "b-side", rarity: "red", youtube: "https://youtu.be/2T-J3O-8v2w", spotify: "" },
    { id: 74, title: "Blue Blood", artist: "IVE", group: "IVE", album: "I've IVE", type: "b-side", rarity: "gold", youtube: "https://youtu.be/7T-E9w-4P2Q", spotify: "" },
    { id: 75, title: "Kitsch", artist: "IVE", group: "IVE", album: "I've IVE", type: "b-side", rarity: "red", youtube: "https://youtu.be/pG6iaOMV46I", spotify: "" },
    { id: 76, title: "Hypnosis", artist: "IVE", group: "IVE", album: "I've IVE", type: "b-side", rarity: "pink", youtube: "https://youtu.be/8O-G2x-9w4c", spotify: "" },
    { id: 77, title: "Holy Moly", artist: "IVE", group: "IVE", album: "I've Mine", type: "b-side", rarity: "pink", youtube: "https://youtu.be/3E-H2M-4d5w", spotify: "" },
    { id: 78, title: "Off The Record", artist: "IVE", group: "IVE", album: "I've Mine", type: "b-side", rarity: "red", youtube: "https://youtu.be/_ApV7Lm87cg", spotify: "" },
    { id: 79, title: "Either Way", artist: "IVE", group: "IVE", album: "I've Mine", type: "b-side", rarity: "pink", youtube: "https://youtu.be/_Am2GhlWzAw", spotify: "" },
    { id: 80, title: "Ice Queen", artist: "IVE", group: "IVE", album: "IVE SWITCH", type: "b-side", rarity: "purple", youtube: "https://youtu.be/2w-O-2K2J-E", spotify: "" },


    /* =====================================================
       NEWJEANS
    ===================================================== */
    { id: 81, title: "Attention", artist: "NewJeans", group: "NewJeans", album: "New Jeans", type: "title", rarity: "gold", youtube: "https://youtu.be/js1CtxSY38I", spotify: "" },
    { id: 82, title: "Hype Boy", artist: "NewJeans", group: "NewJeans", album: "New Jeans", type: "title", rarity: "gold", youtube: "https://youtu.be/11cta61wi0g", spotify: "" },
    { id: 83, title: "Cookie", artist: "NewJeans", group: "NewJeans", album: "New Jeans", type: "title", rarity: "red", youtube: "https://youtu.be/VOmIplFAGeg", spotify: "" },
    { id: 84, title: "Ditto", artist: "NewJeans", group: "NewJeans", album: "OMG", type: "title", rarity: "gold", youtube: "https://youtu.be/pSUydWEqKwE", spotify: "" },
    { id: 85, title: "OMG", artist: "NewJeans", group: "NewJeans", album: "OMG", type: "title", rarity: "gold", youtube: "https://youtu.be/sVTy_wmn5SU", spotify: "" },
    { id: 86, title: "Super Shy", artist: "NewJeans", group: "NewJeans", album: "Get Up", type: "title", rarity: "gold", youtube: "https://youtu.be/ArmDp-zijuc", spotify: "" },
    { id: 87, title: "ETA", artist: "NewJeans", group: "NewJeans", album: "Get Up", type: "title", rarity: "red", youtube: "https://youtu.be/jOTfBlKSQAE", spotify: "" },
    { id: 88, title: "Cool With You", artist: "NewJeans", group: "NewJeans", album: "Get Up", type: "title", rarity: "red", youtube: "https://youtu.be/zsYSSVoQnP4", spotify: "" },
    { id: 89, title: "How Sweet", artist: "NewJeans", group: "NewJeans", album: "How Sweet", type: "title", rarity: "red", youtube: "https://youtu.be/Q3K0TOvTOno", spotify: "" },
    { id: 90, title: "Supernatural", artist: "NewJeans", group: "NewJeans", album: "Supernatural", type: "title", rarity: "gold", youtube: "https://youtu.be/ZncbtRo7RXs", spotify: "" },

    { id: 91, title: "Hurt", artist: "NewJeans", group: "NewJeans", album: "New Jeans", type: "b-side", rarity: "pink", youtube: "https://youtu.be/tVIXY14aJms", spotify: "" },
    { id: 92, title: "New Jeans", artist: "NewJeans", group: "NewJeans", album: "New Jeans", type: "b-side", rarity: "purple", youtube: "https://youtu.be/kcelgrGY1h8", spotify: "" },
    { id: 93, title: "ASAP", artist: "NewJeans", group: "NewJeans", album: "Get Up", type: "b-side", rarity: "pink", youtube: "https://youtu.be/dJdqn5v4Dkw", spotify: "" },
    { id: 94, title: "Get Up", artist: "NewJeans", group: "NewJeans", album: "Get Up", type: "b-side", rarity: "purple", youtube: "https://youtu.be/2W2w-G2O2Gk", spotify: "" },
    { id: 95, title: "New Jeans", artist: "NewJeans", group: "NewJeans", album: "Get Up", type: "b-side", rarity: "pink", youtube: "https://youtu.be/kcelgrGY1h8", spotify: "" },
    { id: 96, title: "Gods", artist: "NewJeans", group: "NewJeans", album: "GODS", type: "b-side", rarity: "gold", youtube: "https://youtu.be/C3GouGa0noM", spotify: "" },
    { id: 97, title: "Right Now", artist: "NewJeans", group: "NewJeans", album: "Supernatural", type: "b-side", rarity: "pink", youtube: "https://youtu.be/7T-J2P-9k7s", spotify: "" },
    { id: 98, title: "Bubble Gum", artist: "NewJeans", group: "NewJeans", album: "How Sweet", type: "b-side", rarity: "red", youtube: "https://youtu.be/11Otw2sXnF4", spotify: "" },
    { id: 99, title: "ASAP", artist: "NewJeans", group: "NewJeans", album: "Get Up", type: "b-side", rarity: "pink", youtube: "https://youtu.be/dJzqjcNCjcY", spotify: "" },
    { id: 100, title: "Cool With You", artist: "NewJeans", group: "NewJeans", album: "Get Up", type: "b-side", rarity: "red", youtube: "https://youtu.be/zsYGoE1_ZyI", spotify: "" }
];

/* =====================================================
   HÀM LẤY ẢNH ĐƯỢC FIX LỖI "THIẾU HTTPS"
===================================================== */
function getYoutubeThumbnail(url) {
    if (!url) return "";
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
    }

    let videoId = "";
    try {
        const parsed = new URL(url);
        if (parsed.hostname === "youtu.be") {
            videoId = parsed.pathname.substring(1);
        } else if (parsed.hostname.includes("youtube.com")) {
            videoId = parsed.searchParams.get("v");
            if (!videoId && parsed.pathname.startsWith("/embed/")) {
                videoId = parsed.pathname.split("/embed/")[1];
            }
        }
    } catch (error) { return ""; }
    if (!videoId) return "";

    // Ưu tiên tải ảnh Max Resolution
    return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
}