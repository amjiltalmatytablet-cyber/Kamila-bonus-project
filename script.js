// 1. Деректер массиві (30 нысан)
const projectData = [
    { id: 1, name: "Болат I-Арқалық", category: "Материалдар", price: 150000, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400", description: "Жоғары кернеуге төзімді болат. Көпірдің негізгі тіректеріне арналған." },
    { id: 2, name: "Бетон Бағана V2", category: "Құрылымдар", price: 85000, image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=400", description: "Тік жүктемені тамаша көтеретін арматураланған бетон бағана." },
    { id: 3, name: "Көміртекті талшық", category: "Материалдар", price: 450000, image: "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?auto=format&fit=crop&w=400", description: "Өте жеңіл әрі берік материал. Сәулетті көпірлер үшін таптырмас шешім." },
    { id: 4, name: "Ағаш арқалықтар", category: "Материалдар", price: 25000, image: "https://images.unsplash.com/photo-1585711727439-fd528578946b?auto=format&fit=crop&w=400", description: "Шағын және уақытша өткелдерге арналған экологиялық материал." },
    { id: 5, name: "Вантовый аспа", category: "Құрылымдар", price: 1200000, image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=400", description: "Аспалы көпірлерге арналған жоғары беріктікті кабельдер жүйесі." },
    { id: 6, name: "Гидравликалық нығыздағыш", category: "Құралдар", price: 55000, image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=400", description: "Топырақты нығыздауға және іргетас дайындауға арналған құрал." },
    // ... Қалған 24 нысанды толтыру (қысқаша нұсқасы)
];

// Массивті 30-ға жеткізу үшін циклмен қосамыз (үлгі ретінде)
for (let i = 7; i <= 30; i++) {
    projectData.push({
        id: i,
        name: `Инженерлік Шешім №${i}`,
        category: i % 2 === 0 ? "Құрылымдар" : "Құралдар",
        price: 10000 * i,
        image: `https://picsum.photos/seed/${i}/400/300`,
        description: `Бұл №${i} нысанының сипаттамасы. CivilBuild жобаларына арналған сапалы элемент.`
    });
}

// 2. Селекторлар
const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const filter = document.getElementById('categoryFilter');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const themeToggle = document.getElementById('themeToggle');

// 3. Рендеринг функциясы
function renderCards(data) {
    grid.innerHTML = data.map(item => `
        <div onclick="openModal(${item.id})" class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border dark:border-gray-700">
            <div class="relative overflow-hidden h-48">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                <span class="absolute top-3 left-3 bg-primary/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">
                    ${item.category}
                </span>
            </div>
            <div class="p-5">
                <h3 class="font-bold text-lg mb-2">${item.name}</h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">${item.description}</p>
                <div class="flex justify-between items-center border-t dark:border-gray-700 pt-4">
                    <span class="text-primary font-bold">${item.price.toLocaleString()} ₸</span>
                    <button class="text-sm bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition">Толығырақ</button>
                </div>
            </div>
        </div>
    `).join('');
}

// 4. Іздеу және Сүзу
function handleFilter() {
    const term = searchInput.value.toLowerCase();
    const cat = filter.value;

    const filtered = projectData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(term);
        const matchesCat = cat === 'all' || item.category === cat;
        return matchesSearch && matchesCat;
    });

    renderCards(filtered);
}

searchInput.addEventListener('input', handleFilter);
filter.addEventListener('change', handleFilter);

// 5. Модальді терезе функциялары
function openModal(id) {
    const item = projectData.find(p => p.id === id);
    modalContent.innerHTML = `
        <div class="flex flex-col md:flex-row gap-8">
            <img src="${item.image}" class="w-full md:w-1/2 rounded-xl object-cover h-64 shadow-lg">
            <div>
                <span class="text-primary font-semibold text-sm">${item.category}</span>
                <h2 class="text-3xl font-bold mt-2 mb-4">${item.name}</h2>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">${item.description}</p>
                <div class="text-2xl font-bold text-emerald-500 mb-6">${item.price.toLocaleString()} ₸</div>
                <button onclick="showToast('Таңдаулыға сақталды!')" class="w-full bg-primary text-white py-3 rounded-xl hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
                    Жобаға қосу
                </button>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

document.getElementById('closeModal').onclick = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
};

// 6. Toast Хабарламасы
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').innerText = message;
    toast.classList.replace('translate-y-20', 'translate-y-0');
    toast.classList.replace('opacity-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.replace('translate-y-0', 'translate-y-20');
        toast.classList.replace('opacity-100', 'opacity-0');
    }, 3000);
}

// 7. Dark Mode ауыстырғыш
themeToggle.onclick = () => {
    document.documentElement.classList.toggle('dark');
    showToast(document.documentElement.classList.contains('dark') ? 'Қараңғы режим қосылды' : 'Жарық режим қосылды');
};

// Бастапқы іске қосу
renderCards(projectData);
