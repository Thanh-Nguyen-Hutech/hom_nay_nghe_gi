const songs = [
    /* =====================================================
       K-POP (100 Bài)
    ===================================================== */
    // NMIXX
    { id: 1, genre: "kpop", title: "O.O", artist: "NMIXX", group: "NMIXX", album: "AD MARE", type: "title", rarity: "red", youtube: "https://youtu.be/3GWscde8rM8", spotify: "" },
    { id: 2, genre: "kpop", title: "DICE", artist: "NMIXX", group: "NMIXX", album: "ENTWURF", type: "title", rarity: "red", youtube: "https://youtu.be/p1bjnyDqI9k", spotify: "" },
    { id: 3, genre: "kpop", title: "Love Me Like This", artist: "NMIXX", group: "NMIXX", album: "expérgo", type: "title", rarity: "pink", youtube: "https://youtu.be/EDnwWcFpObo", spotify: "" },
    { id: 4, genre: "kpop", title: "Party O'Clock", artist: "NMIXX", group: "NMIXX", album: "A Midsummer NMIXX's Dream", type: "title", rarity: "pink", youtube: "https://youtu.be/Rd2wppggYxo", spotify: "" },
    { id: 5, genre: "kpop", title: "DASH", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: BREAK", type: "title", rarity: "gold", youtube: "https://youtu.be/7UecFm_bSTU", spotify: "" },
    { id: 6, genre: "kpop", title: "See that?", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: STICK OUT", type: "title", rarity: "red", youtube: "https://youtu.be/_Q8Jskeps9w", spotify: "" },
    { id: 7, genre: "kpop", title: "KNOW ABOUT ME", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: FORWARD", type: "title", rarity: "pink", youtube: "https://youtu.be/aFrQIJ5cbRc", spotify: "" },
    { id: 8, genre: "kpop", title: "Love Is Lonely", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: BREAK", type: "title", rarity: "red", youtube: "https://youtu.be/zhrT1cmQ9zA", spotify: "" },
    { id: 9, genre: "kpop", title: "Young, Dumb, Stupid", artist: "NMIXX", group: "NMIXX", album: "expérgo", type: "title", rarity: "purple", youtube: "https://youtu.be/5eh6Vj_vVg4", spotify: "" },
    { id: 10, genre: "kpop", title: "Soñar (Breaker)", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: BREAK", type: "title", rarity: "gold", youtube: "https://youtu.be/MMtRxcy8PX0", spotify: "" },
    { id: 11, genre: "kpop", title: "Tank", artist: "NMIXX", group: "NMIXX", album: "AD MARE", type: "b-side", rarity: "pink", youtube: "https://youtu.be/kY1zVcDhUSU", spotify: "" },
    { id: 12, genre: "kpop", title: "LOUD", artist: "NMIXX", group: "NMIXX", album: "HEAVY SERENADE", type: "b-side", rarity: "gold", youtube: "https://youtu.be/e7t8JzqVXcs", spotify: "" },
    { id: 13, genre: "kpop", title: "Cool (Your Rainbow)", artist: "NMIXX", group: "NMIXX", album: "ENTWURF", type: "b-side", rarity: "red", youtube: "https://youtu.be/4wKU9oIXnTI", spotify: "" },
    { id: 14, genre: "kpop", title: "Ocean", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: FORWARD", type: "b-side", rarity: "gold", youtube: "https://youtu.be/JLUqbQJswyA", spotify: "" },
    { id: 15, genre: "kpop", title: "Papillon", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: FORWARD", type: "b-side", rarity: "red", youtube: "https://youtu.be/qQhEwaHszKo", spotify: "" },
    { id: 16, genre: "kpop", title: "My Gosh", artist: "NMIXX", group: "NMIXX", album: "expérgo", type: "b-side", rarity: "purple", youtube: "https://youtu.be/4q3JKyLc4xA", spotify: "" },
    { id: 17, genre: "kpop", title: "Phoenix", artist: "NMIXX", group: "NMIXX", album: "Blue Valentine", type: "b-side", rarity: "red", youtube: "https://youtu.be/dgeH9vxwYss", spotify: "" },
    { id: 18, genre: "kpop", title: "Roller Coaster", artist: "NMIXX", group: "NMIXX", album: "A Midsummer NMIXX's Dream", type: "b-side", rarity: "pink", youtube: "https://youtu.be/fqBAzCH4-9g", spotify: "" },
    { id: 19, genre: "kpop", title: "Run For Roses", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: BREAK", type: "b-side", rarity: "red", youtube: "https://youtu.be/h00DpJn_ldM", spotify: "" },
    { id: 20, genre: "kpop", title: "BOOM", artist: "NMIXX", group: "NMIXX", album: "Fe3O4: BREAK", type: "b-side", rarity: "purple", youtube: "https://youtu.be/h-7ag-IkUdE", spotify: "" },

    // (G)I-DLE
    { id: 21, genre: "kpop", title: "LATATA", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Am", type: "title", rarity: "red", youtube: "https://youtu.be/9mQk7Evt6Vs", spotify: "" },
    { id: 22, genre: "kpop", title: "HANN (Alone)", artist: "(G)I-DLE", group: "(G)I-DLE", album: "HANN", type: "title", rarity: "red", youtube: "https://youtu.be/OKNXn2qCEws", spotify: "" },
    { id: 23, genre: "kpop", title: "Senorita", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Made", type: "title", rarity: "pink", youtube: "https://youtu.be/2cevbhEqQF4", spotify: "" },
    { id: 24, genre: "kpop", title: "Oh my god", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Trust", type: "title", rarity: "red", youtube: "https://youtu.be/om3n2ni8luE", spotify: "" },
    { id: 25, genre: "kpop", title: "HWAA", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Burn", type: "title", rarity: "red", youtube: "https://youtu.be/z3szNvgQxHo", spotify: "" },
    { id: 26, genre: "kpop", title: "TOMBOY", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I NEVER DIE", type: "title", rarity: "gold", youtube: "https://youtu.be/Jh4QFaPmdss", spotify: "" },
    { id: 27, genre: "kpop", title: "Nxde", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I love", type: "title", rarity: "gold", youtube: "https://youtu.be/fCO7f0SmrDc", spotify: "" },
    { id: 28, genre: "kpop", title: "Queencard", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I feel", type: "title", rarity: "gold", youtube: "https://youtu.be/7HDeem-JaSY", spotify: "" },
    { id: 29, genre: "kpop", title: "Super Lady", artist: "(G)I-DLE", group: "(G)I-DLE", album: "2", type: "title", rarity: "red", youtube: "https://youtu.be/6f3RzjXPQwA", spotify: "" },
    { id: 30, genre: "kpop", title: "Klaxon", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I SWAY", type: "title", rarity: "pink", youtube: "https://youtu.be/rTKqSmX9XhQ", spotify: "" },
    { id: 31, genre: "kpop", title: "Maze", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Am", type: "b-side", rarity: "purple", youtube: "https://youtu.be/klKKrmRY2R8", spotify: "" },
    { id: 32, genre: "kpop", title: "What's in Your House?", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Am", type: "b-side", rarity: "purple", youtube: "https://youtu.be/ehXwFRCvTa8", spotify: "" },
    { id: 33, genre: "kpop", title: "Put It Straight", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Made", type: "b-side", rarity: "pink", youtube: "https://youtu.be/SBtF_e6XWnc", spotify: "" },
    { id: 34, genre: "kpop", title: "Maybe", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Trust", type: "b-side", rarity: "purple", youtube: "https://youtu.be/k8pEDdNUvzI", spotify: "" },
    { id: 35, genre: "kpop", title: "Dahlia", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I Burn", type: "b-side", rarity: "red", youtube: "https://youtu.be/adl0yFg8Ntc", spotify: "" },
    { id: 36, genre: "kpop", title: "Already", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I NEVER DIE", type: "b-side", rarity: "pink", youtube: "https://youtu.be/_2iwrMT2r5s", spotify: "" },
    { id: 37, genre: "kpop", title: "Villain Dies", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I NEVER DIE", type: "b-side", rarity: "pink", youtube: "https://youtu.be/jYkvghyX_mo", spotify: "" },
    { id: 38, genre: "kpop", title: "Escape", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I NEVER DIE", type: "b-side", rarity: "purple", youtube: "https://youtu.be/7UQ7AVKsYvc", spotify: "" },
    { id: 39, genre: "kpop", title: "All Night", artist: "(G)I-DLE", group: "(G)I-DLE", album: "I feel", type: "b-side", rarity: "pink", youtube: "https://youtu.be/iOoeLYqx3yI", spotify: "" },
    { id: 40, genre: "kpop", title: "Fate", artist: "(G)I-DLE", group: "(G)I-DLE", album: "2", type: "b-side", rarity: "gold", youtube: "https://youtu.be/ATK7gAaZTOM", spotify: "" },

    // TWICE
    { id: 41, genre: "kpop", title: "Like OOH-AHH", artist: "TWICE", group: "TWICE", album: "The Story Begins", type: "title", rarity: "red", youtube: "https://youtu.be/904UMBcnaC4", spotify: "" },
    { id: 42, genre: "kpop", title: "CHEER UP", artist: "TWICE", group: "TWICE", album: "Page Two", type: "title", rarity: "gold", youtube: "https://youtu.be/8tgs9Oq-7a4", spotify: "" },
    { id: 43, genre: "kpop", title: "TT", artist: "TWICE", group: "TWICE", album: "TWICEcoaster: LANE 1", type: "title", rarity: "gold", youtube: "https://youtu.be/0kFysgVv9ZQ", spotify: "" },
    { id: 44, genre: "kpop", title: "KNOCK KNOCK", artist: "TWICE", group: "TWICE", album: "TWICEcoaster: LANE 2", type: "title", rarity: "red", youtube: "https://youtu.be/yi_OCnQIL_g", spotify: "" },
    { id: 45, genre: "kpop", title: "SIGNAL", artist: "TWICE", group: "TWICE", album: "Signal", type: "title", rarity: "red", youtube: "https://youtu.be/TRijPlol9D8", spotify: "" },
    { id: 46, genre: "kpop", title: "What is Love?", artist: "TWICE", group: "TWICE", album: "What is Love?", type: "title", rarity: "gold", youtube: "https://youtu.be/8FiRcFUurNE", spotify: "" },
    { id: 47, genre: "kpop", title: "Dance The Night Away", artist: "TWICE", group: "TWICE", album: "Summer Nights", type: "title", rarity: "red", youtube: "https://youtu.be/Fm5iP0S1z9w", spotify: "" },
    { id: 48, genre: "kpop", title: "YES or YES", artist: "TWICE", group: "TWICE", album: "YES or YES", type: "title", rarity: "pink", youtube: "https://youtu.be/mAKsZ26SabQ", spotify: "" },
    { id: 49, genre: "kpop", title: "FANCY", artist: "TWICE", group: "TWICE", album: "FANCY YOU", type: "title", rarity: "gold", youtube: "https://youtu.be/kOHB85vDuow", spotify: "" },
    { id: 50, genre: "kpop", title: "Feel Special", artist: "TWICE", group: "TWICE", album: "Feel Special", type: "title", rarity: "gold", youtube: "https://youtu.be/3ymwOvzhwHs", spotify: "" },
    { id: 51, genre: "kpop", title: "Like a Fool", artist: "TWICE", group: "TWICE", album: "The Story Begins", type: "b-side", rarity: "purple", youtube: "https://youtu.be/DFdjt6ykwTY", spotify: "" },
    { id: 52, genre: "kpop", title: "Touchdown", artist: "TWICE", group: "TWICE", album: "TWICEcoaster: LANE 1", type: "b-side", rarity: "pink", youtube: "https://youtu.be/a2rRdbSRbRM", spotify: "" },
    { id: 53, genre: "kpop", title: "1 to 10", artist: "TWICE", group: "TWICE", album: "TWICEcoaster: LANE 1", type: "b-side", rarity: "purple", youtube: "https://youtu.be/wXlrZpTWKgM", spotify: "" },
    { id: 54, genre: "kpop", title: "Turtle", artist: "TWICE", group: "TWICE", album: "TWICEcoaster: LANE 2", type: "b-side", rarity: "gold", youtube: "https://youtu.be/tVv_C2fYStU", spotify: "" },
    { id: 55, genre: "kpop", title: "WOW", artist: "TWICE", group: "TWICE", album: "TWICEcoaster: LANE 2", type: "b-side", rarity: "pink", youtube: "https://youtu.be/ngpGqFCioUI", spotify: "" },
    { id: 56, genre: "kpop", title: "HO!", artist: "TWICE", group: "TWICE", album: "Summer Nights", type: "b-side", rarity: "pink", youtube: "https://youtu.be/3pcCmShOGes", spotify: "" },
    { id: 57, genre: "kpop", title: "Shot Thru the Heart", artist: "TWICE", group: "TWICE", album: "Summer Nights", type: "b-side", rarity: "purple", youtube: "https://youtu.be/G0Rg1fOn9kk", spotify: "" },
    { id: 58, genre: "kpop", title: "LOVE FOOLISH", artist: "TWICE", group: "TWICE", album: "Feel Special", type: "b-side", rarity: "red", youtube: "https://youtu.be/PeFXRIJXYZo", spotify: "" },
    { id: 59, genre: "kpop", title: "UP NO MORE", artist: "TWICE", group: "TWICE", album: "Eyes wide open", type: "b-side", rarity: "red", youtube: "https://youtu.be/bq8kFdQbrNU", spotify: "" },
    { id: 60, genre: "kpop", title: "ICON", artist: "TWICE", group: "TWICE", album: "Formula of Love", type: "b-side", rarity: "gold", youtube: "https://youtu.be/wfXETdOzYos", spotify: "" },

    // IVE
    { id: 61, genre: "kpop", title: "ELEVEN", artist: "IVE", group: "IVE", album: "ELEVEN", type: "title", rarity: "gold", youtube: "https://youtu.be/--FmExEAsM8", spotify: "" },
    { id: 62, genre: "kpop", title: "LOVE DIVE", artist: "IVE", group: "IVE", album: "LOVE DIVE", type: "title", rarity: "gold", youtube: "https://youtu.be/Y8JFxS1HlDo", spotify: "" },
    { id: 63, genre: "kpop", title: "After LIKE", artist: "IVE", group: "IVE", album: "After LIKE", type: "title", rarity: "gold", youtube: "https://youtu.be/F0B7HDiY-10", spotify: "" },
    { id: 64, genre: "kpop", title: "I AM", artist: "IVE", group: "IVE", album: "I've IVE", type: "title", rarity: "gold", youtube: "https://youtu.be/6ZUIwj3FgUY", spotify: "" },
    { id: 65, genre: "kpop", title: "Baddie", artist: "IVE", group: "IVE", album: "I've Mine", type: "title", rarity: "red", youtube: "https://youtu.be/Da4P2uT4mVc", spotify: "" },
    { id: 66, genre: "kpop", title: "HEYA", artist: "IVE", group: "IVE", album: "IVE SWITCH", type: "title", rarity: "red", youtube: "https://youtu.be/07EzMbVH3QE", spotify: "" },
    { id: 67, genre: "kpop", title: "Accendio", artist: "IVE", group: "IVE", album: "IVE SWITCH", type: "title", rarity: "pink", youtube: "https://youtu.be/PGLx4V680J8", spotify: "" },
    { id: 68, genre: "kpop", title: "REBEL HEART", artist: "IVE", group: "IVE", album: "IVE EMPATHY", type: "title", rarity: "red", youtube: "https://youtu.be/g36q0ZLvygQ", spotify: "" },
    { id: 69, genre: "kpop", title: "ATTITUDE", artist: "IVE", group: "IVE", album: "IVE EMPATHY", type: "title", rarity: "pink", youtube: "https://youtu.be/38xYeot-ciM", spotify: "" },
    { id: 70, genre: "kpop", title: "XOXZ", artist: "IVE", group: "IVE", album: "IVE SECRET", type: "title", rarity: "red", youtube: "https://youtu.be/B1ShLiq3EVc", spotify: "" },
    { id: 71, genre: "kpop", title: "Take It", artist: "IVE", group: "IVE", album: "ELEVEN", type: "b-side", rarity: "purple", youtube: "https://youtu.be/4pjWi5POJvI", spotify: "" },
    { id: 72, genre: "kpop", title: "ROYAL", artist: "IVE", group: "IVE", album: "LOVE DIVE", type: "b-side", rarity: "red", youtube: "https://youtu.be/pXbugSyo0tI", spotify: "" },
    { id: 73, genre: "kpop", title: "My Satisfaction", artist: "IVE", group: "IVE", album: "After LIKE", type: "b-side", rarity: "red", youtube: "https://youtu.be/K_ONXvktaIY", spotify: "" },
    { id: 74, genre: "kpop", title: "Blue Blood", artist: "IVE", group: "IVE", album: "I've IVE", type: "b-side", rarity: "gold", youtube: "https://youtu.be/8ZcfwNisYso", spotify: "" },
    { id: 75, genre: "kpop", title: "Kitsch", artist: "IVE", group: "IVE", album: "I've IVE", type: "b-side", rarity: "red", youtube: "https://youtu.be/pG6iaOMV46I", spotify: "" },
    { id: 76, genre: "kpop", title: "Hypnosis", artist: "IVE", group: "IVE", album: "I've IVE", type: "b-side", rarity: "pink", youtube: "https://youtu.be/27Tvv1JE3QU", spotify: "" },
    { id: 77, genre: "kpop", title: "Holy Moly", artist: "IVE", group: "IVE", album: "I've Mine", type: "b-side", rarity: "pink", youtube: "https://youtu.be/YttVotuZ_Wo", spotify: "" },
    { id: 78, genre: "kpop", title: "Off The Record", artist: "IVE", group: "IVE", album: "I've Mine", type: "b-side", rarity: "red", youtube: "https://youtu.be/_ApV7Lm87cg", spotify: "" },
    { id: 79, genre: "kpop", title: "Either Way", artist: "IVE", group: "IVE", album: "I've Mine", type: "b-side", rarity: "pink", youtube: "https://youtu.be/_Hu4GYtye5U", spotify: "" },
    { id: 80, genre: "kpop", title: "Ice Queen", artist: "IVE", group: "IVE", album: "IVE SWITCH", type: "b-side", rarity: "purple", youtube: "https://youtu.be/dL5nxJHIlgU", spotify: "" },

    // NewJeans
    { id: 81, genre: "kpop", title: "Attention", artist: "NewJeans", group: "NewJeans", album: "New Jeans", type: "title", rarity: "gold", youtube: "https://youtu.be/js1CtxSY38I", spotify: "" },
    { id: 82, genre: "kpop", title: "Hype Boy", artist: "NewJeans", group: "NewJeans", album: "New Jeans", type: "title", rarity: "gold", youtube: "https://youtu.be/11cta61wi0g", spotify: "" },
    { id: 83, genre: "kpop", title: "Cookie", artist: "NewJeans", group: "NewJeans", album: "New Jeans", type: "title", rarity: "red", youtube: "https://youtu.be/VOmIplFAGeg", spotify: "" },
    { id: 84, genre: "kpop", title: "Ditto", artist: "NewJeans", group: "NewJeans", album: "OMG", type: "title", rarity: "gold", youtube: "https://youtu.be/pSUydWEqKwE", spotify: "" },
    { id: 85, genre: "kpop", title: "OMG", artist: "NewJeans", group: "NewJeans", album: "OMG", type: "title", rarity: "gold", youtube: "https://youtu.be/sVTy_wmn5SU", spotify: "" },
    { id: 86, genre: "kpop", title: "Super Shy", artist: "NewJeans", group: "NewJeans", album: "Get Up", type: "title", rarity: "gold", youtube: "https://youtu.be/ArmDp-zijuc", spotify: "" },
    { id: 87, genre: "kpop", title: "ETA", artist: "NewJeans", group: "NewJeans", album: "Get Up", type: "title", rarity: "red", youtube: "https://youtu.be/jOTfBlKSQYY", spotify: "" },
    { id: 88, genre: "kpop", title: "Cool With You", artist: "NewJeans", group: "NewJeans", album: "Get Up", type: "title", rarity: "red", youtube: "https://youtu.be/zsYSSVoQnP4", spotify: "" },
    { id: 89, genre: "kpop", title: "How Sweet", artist: "NewJeans", group: "NewJeans", album: "How Sweet", type: "title", rarity: "red", youtube: "https://youtu.be/Q3K0TOvTOno", spotify: "" },
    { id: 90, genre: "kpop", title: "Supernatural", artist: "NewJeans", group: "NewJeans", album: "Supernatural", type: "title", rarity: "gold", youtube: "https://youtu.be/ZncbtRo7RXs", spotify: "" },
    { id: 91, genre: "kpop", title: "Hurt", artist: "NewJeans", group: "NewJeans", album: "New Jeans", type: "b-side", rarity: "pink", youtube: "https://youtu.be/tVIXY14aJms", spotify: "" },
    { id: 92, genre: "kpop", title: "New Jeans", artist: "NewJeans", group: "NewJeans", album: "New Jeans", type: "b-side", rarity: "purple", youtube: "https://youtu.be/kcelgrGY1h8", spotify: "" },
    { id: 93, genre: "kpop", title: "ASAP", artist: "NewJeans", group: "NewJeans", album: "Get Up", type: "b-side", rarity: "pink", youtube: "https://youtu.be/dJdqn5v4Dkw", spotify: "" },
    { id: 94, genre: "kpop", title: "Get Up", artist: "NewJeans", group: "NewJeans", album: "Get Up", type: "b-side", rarity: "purple", youtube: "https://youtu.be/SXM1q0CTfew", spotify: "" },
    { id: 95, genre: "kpop", title: "Zero", artist: "NewJeans", group: "NewJeans", album: "Get Up", type: "b-side", rarity: "pink", youtube: "https://youtu.be/XIOoqJyx8E4", spotify: "" },
    { id: 96, genre: "kpop", title: "Gods", artist: "NewJeans", group: "NewJeans", album: "GODS", type: "b-side", rarity: "gold", youtube: "https://youtu.be/C3GouGa0noM", spotify: "" },
    { id: 97, genre: "kpop", title: "Right Now", artist: "NewJeans", group: "NewJeans", album: "Supernatural", type: "b-side", rarity: "pink", youtube: "https://youtu.be/m6pTbEz4w3o", spotify: "" },
    { id: 98, genre: "kpop", title: "Bubble Gum", artist: "NewJeans", group: "NewJeans", album: "How Sweet", type: "b-side", rarity: "red", youtube: "https://youtu.be/ft70sAYrFyY", spotify: "" },
    { id: 99, genre: "kpop", title: "Heavy Serenade", artist: "NMIXX", group: "NMIXX", album: "HEAVY SERENADE", type: "title", rarity: "gold", youtube: "https://youtu.be/6Ycn9qZK09I", spotify: "" },
    { id: 100, genre: "kpop", title: "Blue Valentine", artist: "NMIXX", group: "NMIXX", album: "BLUE VALENTINE", type: "title", rarity: "gold", youtube: "https://youtu.be/EmeW6li6bbo", spotify: "" },


    /* =====================================================
       V-POP (20 Bài)
    ===================================================== */
    { id: 101, genre: "vpop", title: "Chúng Ta Của Tương Lai", artist: "Sơn Tùng M-TP", group: "V-POP", album: "Single", type: "title", rarity: "gold", youtube: "https://youtu.be/jvGbbjO9m1k" },
    { id: 102, genre: "vpop", title: "Muộn Rồi Mà Sao Còn", artist: "Sơn Tùng M-TP", group: "V-POP", album: "Single", type: "title", rarity: "gold", youtube: "https://youtu.be/xypzmu5mMPY" },
    { id: 103, genre: "vpop", title: "Có Chắc Yêu Là Đây", artist: "Sơn Tùng M-TP", group: "V-POP", album: "Single", type: "title", rarity: "red", youtube: "https://youtu.be/6t-MjIl2gEo" },
    { id: 104, genre: "vpop", title: "Waiting For You", artist: "MONO", group: "V-POP", album: "22", type: "title", rarity: "gold", youtube: "https://youtu.be/0-8tV6zUvAE" },
    { id: 105, genre: "vpop", title: "Em Xinh", artist: "MONO", group: "V-POP", album: "ĐẸP", type: "title", rarity: "pink", youtube: "https://youtu.be/n585-Lg2Nys" },
    { id: 106, genre: "vpop", title: "See Tình", artist: "Hoàng Thuỳ Linh", group: "V-POP", album: "LINK", type: "title", rarity: "gold", youtube: "https://youtu.be/gZHQVxdJQww" },
    { id: 107, genre: "vpop", title: "Để Mị Nói Cho Mà Nghe", artist: "Hoàng Thuỳ Linh", group: "V-POP", album: "Hoàng", type: "title", rarity: "red", youtube: "https://youtu.be/JcNjtMA3G0M" },
    { id: 108, genre: "vpop", title: "Cắt Đôi Nỗi Sầu", artist: "Tăng Duy Tân", group: "V-POP", album: "Single", type: "title", rarity: "gold", youtube: "https://youtu.be/N8K183XQn5Y" },
    { id: 109, genre: "vpop", title: "Bên Trên Tầng Lầu", artist: "Tăng Duy Tân", group: "V-POP", album: "Single", type: "title", rarity: "red", youtube: "https://youtu.be/9fK84b-B-S8" },
    { id: 110, genre: "vpop", title: "Từng Quen", artist: "Wren Evans", group: "V-POP", album: "Loi Choi", type: "title", rarity: "gold", youtube: "https://youtu.be/nL5iFk7H87Y" },
    { id: 111, genre: "vpop", title: "Call Me", artist: "Wren Evans", group: "V-POP", album: "Loi Choi", type: "title", rarity: "red", youtube: "https://youtu.be/7Tf-Q5m2h3M" },
    { id: 112, genre: "vpop", title: "Đưa Em Về Nhà", artist: "GREY D, Chillies", group: "V-POP", album: "Single", type: "title", rarity: "pink", youtube: "https://youtu.be/90089t_Z7yQ" },
    { id: 113, genre: "vpop", title: "Vaicaunoicokhiennguoithaydoi", artist: "GREY D, tlinh", group: "V-POP", album: "Single", type: "title", rarity: "red", youtube: "https://youtu.be/1O_uKOfWnI8" },
    { id: 114, genre: "vpop", title: "Anh Là Ngoại Lệ Của Em", artist: "Phương Ly", group: "V-POP", album: "Single", type: "title", rarity: "red", youtube: "https://youtu.be/Vz_iS052VqE" },
    { id: 115, genre: "vpop", title: "Thích Thích", artist: "Phương Ly", group: "V-POP", album: "Single", type: "title", rarity: "pink", youtube: "https://youtu.be/83w5GzbF5pU" },
    { id: 116, genre: "vpop", title: "Trên Tình Bạn Dưới Tình Yêu", artist: "MIN", group: "V-POP", album: "50/50", type: "title", rarity: "red", youtube: "https://youtu.be/0-8zW-7kGxE" },
    { id: 117, genre: "vpop", title: "Anh Nhà Ở Đâu Thế", artist: "AMEE, B Ray", group: "V-POP", album: "dreAMEE", type: "title", rarity: "pink", youtube: "https://youtu.be/V26wHqBOP3c" },
    { id: 118, genre: "vpop", title: "Bùa Yêu", artist: "Bích Phương", group: "V-POP", album: "Dramatic", type: "title", rarity: "gold", youtube: "https://youtu.be/qJ3YagQ851s" },
    { id: 119, genre: "vpop", title: "Bước Qua Nhau", artist: "Vũ.", group: "V-POP", album: "Một Vạn Năm", type: "title", rarity: "red", youtube: "https://youtu.be/gMvI019C3hQ" },
    { id: 120, genre: "vpop", title: "Hơn Cả Yêu", artist: "Đức Phúc", group: "V-POP", album: "Single", type: "title", rarity: "purple", youtube: "https://youtu.be/n0N1NPI2P2M" },

    /* =====================================================
       RAP VIỆT (20 Bài)
    ===================================================== */
    { id: 121, genre: "rapviet", title: "Ngủ Một Mình", artist: "HIEUTHUHAI, Negav", group: "RAP VIỆT", album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó", type: "title", rarity: "gold", youtube: "https://youtu.be/pM36Dq77-J8" },
    { id: 122, genre: "rapviet", title: "Không Thể Say", artist: "HIEUTHUHAI", group: "RAP VIỆT", album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó", type: "title", rarity: "red", youtube: "https://youtu.be/oX632wGz7R8" },
    { id: 123, genre: "rapviet", title: "Mang Tiền Về Cho Mẹ", artist: "Đen, Nguyên Thảo", group: "RAP VIỆT", album: "Single", type: "title", rarity: "gold", youtube: "https://youtu.be/UVbjP5U-Rng" },
    { id: 124, genre: "rapviet", title: "Trốn Tìm", artist: "Đen, MTV Band", group: "RAP VIỆT", album: "Single", type: "title", rarity: "gold", youtube: "https://youtu.be/ws2K-T6jQEA" },
    { id: 125, genre: "rapviet", title: "Bài Này Chill Phết", artist: "Đen, MIN", group: "RAP VIỆT", album: "Single", type: "title", rarity: "red", youtube: "https://youtu.be/1mE-F8pUXXU" },
    { id: 126, genre: "rapviet", title: "Hai Triệu Năm", artist: "Đen, Biên", group: "RAP VIỆT", album: "Single", type: "title", rarity: "pink", youtube: "https://youtu.be/G2_Jj9mZ6Y8" },
    { id: 127, genre: "rapviet", title: "Chìm Sâu", artist: "MCK, Trung Trần", group: "RAP VIỆT", album: "Single", type: "title", rarity: "gold", youtube: "https://youtu.be/jJ4X4s8oHxE" },
    { id: 128, genre: "rapviet", title: "Tại Vì Sao", artist: "MCK", group: "RAP VIỆT", album: "99%", type: "title", rarity: "red", youtube: "https://youtu.be/XlYyA0BvI68" },
    { id: 129, genre: "rapviet", title: "Anh Đã Ổn Hơn", artist: "MCK", group: "RAP VIỆT", album: "99%", type: "title", rarity: "pink", youtube: "https://youtu.be/x338wz1aHMI" },
    { id: 130, genre: "rapviet", title: "Nếu Lúc Đó", artist: "tlinh, 2pillz", group: "RAP VIỆT", album: "ái", type: "title", rarity: "gold", youtube: "https://youtu.be/2cZ22tX16E4" },
    { id: 131, genre: "rapviet", title: "Gái Độc Thân", artist: "tlinh", group: "RAP VIỆT", album: "Single", type: "title", rarity: "red", youtube: "https://youtu.be/t-jA9qQo6M0" },
    { id: 132, genre: "rapviet", title: "Bigcityboi", artist: "Binz, Touliver", group: "RAP VIỆT", album: "Single", type: "title", rarity: "gold", youtube: "https://youtu.be/W8s55WJtqU4" },
    { id: 133, genre: "rapviet", title: "Don't Break My Heart", artist: "Binz, Touliver", group: "RAP VIỆT", album: "Single", type: "title", rarity: "pink", youtube: "https://youtu.be/6E9XfX8Yv9c" },
    { id: 134, genre: "rapviet", title: "Ex's Hate Me", artist: "B Ray, AMEE", group: "RAP VIỆT", album: "Single", type: "title", rarity: "red", youtube: "https://youtu.be/rNqHj5yYxZQ" },
    { id: 135, genre: "rapviet", title: "Con Trai Cưng", artist: "B Ray", group: "RAP VIỆT", album: "Single", type: "title", rarity: "pink", youtube: "https://youtu.be/L1XQYm3j3Qo" },
    { id: 136, genre: "rapviet", title: "Người Lạ Ơi", artist: "Karik, Superbrothers", group: "RAP VIỆT", album: "Single", type: "title", rarity: "gold", youtube: "https://youtu.be/2w2G3f2qXq8" },
    { id: 137, genre: "rapviet", title: "Quan Trọng Là Thần Thái", artist: "Only C, Karik", group: "RAP VIỆT", album: "Single", type: "title", rarity: "purple", youtube: "https://youtu.be/d4JbU5M2Q_4" },
    { id: 138, genre: "rapviet", title: "N-Sao", artist: "Suboi", group: "RAP VIỆT", album: "No-Ne", type: "title", rarity: "red", youtube: "https://youtu.be/0H9Y4oXQyGg" },
    { id: 139, genre: "rapviet", title: "Yêu 5", artist: "Rhymastic", group: "RAP VIỆT", album: "Single", type: "title", rarity: "gold", youtube: "https://youtu.be/6Cg-b7T1zE4" },
    { id: 140, genre: "rapviet", title: "Nến Và Hoa", artist: "Rhymastic", group: "RAP VIỆT", album: "Single", type: "title", rarity: "red", youtube: "https://youtu.be/7K9cQx1_uV8" },

    /* =====================================================
       US-UK (20 Bài)
    ===================================================== */
    { id: 141, genre: "usuk", title: "Cruel Summer", artist: "Taylor Swift", group: "US-UK", album: "Lover", type: "title", rarity: "gold", youtube: "https://youtu.be/ic8j13piAhQ" },
    { id: 142, genre: "usuk", title: "Anti-Hero", artist: "Taylor Swift", group: "US-UK", album: "Midnights", type: "title", rarity: "gold", youtube: "https://youtu.be/b1kbLwvqugk" },
    { id: 143, genre: "usuk", title: "Blank Space", artist: "Taylor Swift", group: "US-UK", album: "1989", type: "title", rarity: "red", youtube: "https://youtu.be/e-ORhEE9VVg" },
    { id: 144, genre: "usuk", title: "Blinding Lights", artist: "The Weeknd", group: "US-UK", album: "After Hours", type: "title", rarity: "gold", youtube: "https://youtu.be/4NRXx6U8ABQ" },
    { id: 145, genre: "usuk", title: "Starboy", artist: "The Weeknd", group: "US-UK", album: "Starboy", type: "title", rarity: "red", youtube: "https://youtu.be/34Na4j8HLjc" },
    { id: 146, genre: "usuk", title: "Levitating", artist: "Dua Lipa", group: "US-UK", album: "Future Nostalgia", type: "title", rarity: "gold", youtube: "https://youtu.be/TUVcZfQe-Kw" },
    { id: 147, genre: "usuk", title: "Don't Start Now", artist: "Dua Lipa", group: "US-UK", album: "Future Nostalgia", type: "title", rarity: "red", youtube: "https://youtu.be/oygrmJFKYZY" },
    { id: 148, genre: "usuk", title: "we can't be friends", artist: "Ariana Grande", group: "US-UK", album: "eternal sunshine", type: "title", rarity: "gold", youtube: "https://youtu.be/KNtJGQkC-WI" },
    { id: 149, genre: "usuk", title: "7 rings", artist: "Ariana Grande", group: "US-UK", album: "thank u, next", type: "title", rarity: "red", youtube: "https://youtu.be/QYh6mYIJG2Y" },
    { id: 150, genre: "usuk", title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", group: "US-UK", album: "Uptown Special", type: "title", rarity: "gold", youtube: "https://youtu.be/OPf0YbXqDm0" },
    { id: 151, genre: "usuk", title: "That's What I Like", artist: "Bruno Mars", group: "US-UK", album: "24K Magic", type: "title", rarity: "red", youtube: "https://youtu.be/PMivT7MJ41M" },
    { id: 152, genre: "usuk", title: "bad guy", artist: "Billie Eilish", group: "US-UK", album: "WHEN WE ALL FALL ASLEEP", type: "title", rarity: "gold", youtube: "https://youtu.be/DyDfgMOUjCI" },
    { id: 153, genre: "usuk", title: "BIRDS OF A FEATHER", artist: "Billie Eilish", group: "US-UK", album: "HIT ME HARD AND SOFT", type: "title", rarity: "red", youtube: "https://youtu.be/d5gfp_lNQzc" },
    { id: 154, genre: "usuk", title: "drivers license", artist: "Olivia Rodrigo", group: "US-UK", album: "SOUR", type: "title", rarity: "gold", youtube: "https://youtu.be/ZmDBbnmKpqQ" },
    { id: 155, genre: "usuk", title: "vampire", artist: "Olivia Rodrigo", group: "US-UK", album: "GUTS", type: "title", rarity: "red", youtube: "https://youtu.be/RlPNh_PBZb4" },
    { id: 156, genre: "usuk", title: "Shape of You", artist: "Ed Sheeran", group: "US-UK", album: "Divide", type: "title", rarity: "gold", youtube: "https://youtu.be/JGwWNGJdvx8" },
    { id: 157, genre: "usuk", title: "Bad Habits", artist: "Ed Sheeran", group: "US-UK", album: "Equals", type: "title", rarity: "pink", youtube: "https://youtu.be/orJSJGHjBLI" },
    { id: 158, genre: "usuk", title: "As It Was", artist: "Harry Styles", group: "US-UK", album: "Harry's House", type: "title", rarity: "gold", youtube: "https://youtu.be/H5v3kku4y6Q" },
    { id: 159, genre: "usuk", title: "Peaches", artist: "Justin Bieber", group: "US-UK", album: "Justice", type: "title", rarity: "red", youtube: "https://youtu.be/tQ0yjYUFKAE" },
    { id: 160, genre: "usuk", title: "Attention", artist: "Charlie Puth", group: "US-UK", album: "Voicenotes", type: "title", rarity: "pink", youtube: "https://youtu.be/nfs8NYg7yQM" }
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