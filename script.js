// 1. ДЕРЕКТЕР МАССИВІ (50 ТАНЫМАЛ БАТЫС АЛЬБОМДАРЫ)
const alemDatabase = [
    { id: 1, name: "Midnights", artist: "Taylor Swift", category: "Pop", image: "https://picsum.photos/400/400?random=1", description: "Modern American Pop masterpiece." },
    { id: 2, name: "Utopia", artist: "Travis Scott", category: "Hip-Hop", image: "https://picsum.photos/400/400?random=2", description: "High energy rap and trap beats." },
    { id: 3, name: "SOS", artist: "SZA", category: "R&B", image: "https://picsum.photos/400/400?random=3", description: "Deep soulful rhythms and blues." },
    { id: 4, name: "Renaissance", artist: "Beyoncé", category: "Dance", image: "https://picsum.photos/400/400?random=4", description: "House and disco influence." },
    { id: 5, name: "Starboy", artist: "The Weeknd", category: "Pop/R&B", image: "https://picsum.photos/400/400?random=5", description: "Moody synth-pop vibes." },
    { id: 6, name: "Harry's House", artist: "Harry Styles", category: "Pop", image: "https://picsum.photos/400/400?random=6", description: "Soft rock and pop fusion." },
    { id: 7, name: "Certified Lover Boy", artist: "Drake", category: "Hip-Hop", image: "https://picsum.photos/400/400?random=7", description: "Chart-topping rap hits." },
    { id: 8, name: "Future Nostalgia", artist: "Dua Lipa", category: "Disco-Pop", image: "https://picsum.photos/400/400?random=8", description: "Modern retro disco." },
    { id: 9, name: "SOUR", artist: "Olivia Rodrigo", category: "Pop", image: "https://picsum.photos/400/400?random=9", description: "Teen angst and emotional ballads." },
    { id: 10, name: "After Hours", artist: "The Weeknd", category: "Synth-Pop", image: "https://picsum.photos/400/400?random=10", description: "Cinematic pop experience." },
    { id: 11, name: "folklore", artist: "Taylor Swift", category: "Indie-Folk", image: "https://picsum.photos/400/400?random=11", description: "Storytelling and acoustic sounds." },
    { id: 12, name: "Planet Her", artist: "Doja Cat", category: "Pop/Rap", image: "https://picsum.photos/400/400?random=12", description: "Vibrant and futuristic pop." },
    { id: 13, name: "Mr. Morale & The Big Steppers", artist: "Kendrick Lamar", category: "Rap", image: "https://picsum.photos/400/400?random=13", description: "Introspective hip-hop poetry." },
    { id: 14, name: "Chromatica", artist: "Lady Gaga", category: "Dance", image: "https://picsum.photos/400/400?random=14", description: "Energetic club and dance tracks." },
    { id: 15, name: "Justice", artist: "Justin Bieber", category: "Pop", image: "https://picsum.photos/400/400?random=15", description: "Modern pop ballads and grooves." }
];

// Массивті 50-ге толтыру
for (let i = 16; i <= 50; i++) {
    alemDatabase.push({
        id: i,
        name: `Popular Hits Vol. ${i}`,
        artist: i % 2 === 0 ? "Post Malone" : "Ed Sheeran",
        category: "Global Pop",
        image: `https://picsum.photos/400/400?random=${i}`,
        description: `Popular American radio hits and chart toppers for diversity taste.`
    });
}

// 2. ТІЛДЕР ПАКЕТІ
const langData = {
    kk: { home: "Басты", search: "Іздеу", profile: "Профиль", settings: "Баптаулар", home_title: "Қайырлы күн", my_pl: "Менің плейлисттерім", rec: "Alem AI ұсыныстары", priv_public: "Аккаунт түрі: Жариялы", priv_private: "Аккаунт түрі: Жеке" },
    en: { home: "Home", search: "Search", profile: "Profile", settings: "Settings", home_title: "Good Day", my_pl: "My Playlists", rec: "Alem AI Recommendations", priv_public: "Account Type: Public", priv_private: "Account Type: Private" },
    ru: { home: "Главная", search: "Поиск", profile: "Профиль", settings: "Настройки", home_title: "Добрый день", my_pl: "Мои плейлисты", rec: "Рекомендации Alem AI", priv_public: "Тип аккаунта: Публичный", priv_private: "Тип аккаунта: Приватный" }
};

// 3. АЙНЫМАЛЫЛАР
let userPlaylists = [
    { id: 101, name: "Түнгі драйв", image: "https://picsum.photos/200/200?random=60" },
    { id: 102, name: "Жұмысқа фокус", image: "https://picsum.photos/200/200?random=61" }
];
let isPrivate = false;

// 4. ҚОЛДАНБА ІСКЕ ҚОСУ
window.onload = () => {
    setTimeout(() => {
        document.getElementById('welcomeScreen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('welcomeScreen').style.display = 'none';
            document.getElementById('mainContent').classList.remove('hidden');
            initApp();
        }, 1000);
    }, 2500);
};

function initApp() {
    renderAlbums();
    renderPlaylists();
}

// Рендеринг функциялары
function renderAlbums() {
    const grid = document.getElementById('recommendedGrid');
    grid.innerHTML = alemDatabase.map(album => `
        <div onclick="playAlbum(${album.id})" class="cursor-pointer group">
            <div class="relative aspect-square rounded-xl overflow-hidden mb-3 border border-white/5 transition group-hover:border-sky-soft">
                <img src="${album.image}" class="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
            <h4 class="font-bold text-sm truncate">${album.name}</h4>
            <p class="text-[10px] text-gray-500">${album.artist}</p>
        </div>
    `).join('');
}

function renderPlaylists() {
    const scroll = document.getElementById('playlistScroll');
    const profileGrid = document.getElementById('profilePlaylistGrid');
    
    const html = userPlaylists.map(pl => `
        <div class="min-w-[160px] bg-dark-spotify p-4 rounded-2xl border-2 border-black hover:border-sky-soft/30 transition cursor-pointer">
            <img src="${pl.image}" class="w-full aspect-square rounded-lg mb-3 object-cover">
            <p class="font-bold text-xs truncate text-sky-soft">${pl.name}</p>
        </div>
    `).join('');
    
    scroll.innerHTML = html;
    profileGrid.innerHTML = html;
}

// Беттерді ауыстыру
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
    document.getElementById(pageId).classList.add('active-page');
    
    // Навигация белсенділігі
    const navs = ['nav_home', 'nav_search', 'nav_profile', 'nav_settings'];
    navs.forEach(n => {
        const el = document.getElementById(n);
        el.classList.replace('text-sky-soft', 'text-gray-500');
        if (n.includes(pageId.replace('Page', '').toLowerCase())) {
            el.classList.replace('text-gray-500', 'text-sky-soft');
        }
    });
    window.scrollTo(0, 0);
}

// Іздеу логикасы
function handleSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('searchResults');
    
    if (query.length < 2) { results.innerHTML = ""; return; }
    
    const filtered = alemDatabase.filter(a => a.name.toLowerCase().includes(query) || a.artist.toLowerCase().includes(query));
    
    results.innerHTML = filtered.map(a => `
        <div class="flex items-center gap-4 bg-dark-spotify p-3 rounded-xl hover:bg-white/5 transition cursor-pointer" onclick="addToPlaylist('${a.name}')">
            <img src="${a.image}" class="w-12 h-12 rounded-lg">
            <div class="flex-grow">
                <p class="font-bold text-sm">${a.name}</p>
                <p class="text-[10px] text-gray-500">${a.artist} • Альбом</p>
            </div>
            <button class="text-sky-soft p-2"><i class="fas fa-plus"></i></button>
        </div>
    `).join('');
}

// Тілді өзгерту
function changeLang(lang) {
    const t = langData[lang] || langData.kk;
    document.getElementById('txt_home_title').innerText = t.home_title;
    document.getElementById('txt_my_playlists').innerText = t.my_pl;
    document.getElementById('txt_recommended').innerText = t.rec;
    document.getElementById('txt_search_title').innerText = t.search;
    document.getElementById('txt_profile_playlists').innerText = t.my_pl;
    document.getElementById('txt_settings_title').innerText = t.settings;
    
    document.querySelector('#nav_home span').innerText = t.home;
    document.querySelector('#nav_search span').innerText = t.search;
    document.querySelector('#nav_profile span').innerText = t.profile;
    document.querySelector('#nav_settings span').innerText = t.settings;
    
    showToast(`Тіл ауыстырылды: ${lang.toUpperCase()}`);
}

// Құпиялылық
function togglePrivacy() {
    isPrivate = !isPrivate;
    const txt = document.getElementById('txt_privacy_mode');
    txt.innerText = isPrivate ? "Аккаунт түрі: Жеке" : "Аккаунт түрі: Жариялы";
    showToast(isPrivate ? "Профиль жабылды" : "Профиль ашылды");
}

// Bluetooth / Көлік режимі
function startCarMode() {
    const ok = confirm("Bluetooth қосылсын ба?");
    if (ok) showToast("Көлікке қосылуда...");
}

// Ойнату
function playAlbum(id) {
    const album = alemDatabase.find(a => a.id === id);
    document.getElementById('playerBar').classList.remove('hidden');
    document.getElementById('playerTitle').innerText = album.name;
    document.getElementById('playerImg').src = album.image;
    showToast(`${album.name} ойнатылуда...`);
}

function addToPlaylist(name) {
    showToast(`"${name}" плейлистке қосылды!`);
}

function sendToAI() {
    const val = document.getElementById('aiInput').value;
    if (val) {
        document.getElementById('aiChat').innerText = `Alem AI: Мен "${val}" туралы ақпаратты YouTube және деректер қорынан іздеп жатырмын...`;
        document.getElementById('aiInput').value = "";
    }
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => t.classList.add('opacity-0', 'pointer-events-none'), 3000);
}