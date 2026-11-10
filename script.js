/* =========================================================
   KONFIGURASI LINK MEDIA PEMBELAJARAN (EDIT DI SINI)
   ========================================================= */
const mediaLinks = {
    // --- 1. INFOGRAFIS MATERI ---
    infografis1: {
        title: "Infografis: Tumpuan Sendi, Rol, dan Jepit",
        url: "https://drive.google.com/file/d/1OAIhulKAw7lsImfDKcrOWzbsT3waOm4X/preview" 
    },
    infografis2: {
        title: "Infografis: Reaksi Peletakan",
        url: "https://drive.google.com/file/d/1fgZ-5owkpqIFPUqhjWkR3YiWU_R5rVcO/preview"
    },
    infografis3: {
        title: "Infografis: Tegangan dan Regangan",
        url: "https://drive.google.com/file/d/1FxofnoqFqxP0C3kAIvXlJLCnGUz6wkUK/preview"
    },

    // --- 2. VIDEO PEMBELAJARAN (3 TOPIC) ---
    videoTumpuan: {
        title: "Video: Tumpuan Sendi, Rol, dan Jepit",
        url: "https://youtube.com/shorts/lLw6oOjB7JE?feature=share"
    },
    videoReaksi: {
        title: "Video: Reaksi Peletakan",
        url: "https://youtu.be/NoJ_ez5yuq4?si=-Ui_TWkT2V1025Ho"
    },
    videoTegangan: {
        title: "Video: Tegangan dan Regangan",
        url: "https://youtu.be/Ufr8k3uLZu8?si=8qahKWYzM8O6crzC"
    },

    // --- 3. KUIS EVALUASI / GFORM (3 TOPIC) ---
    kuisTumpuan: {
        title: "Kuis: Tumpuan Sendi, Rol, dan Jepit",
        url: "https://docs.google.com/forms/u/8/d/e/1FAIpQLSeMtjA4DX-oEgS6Iyo5kuZCSWRbRI5U9xKuA1Azo0mSf1qSIw/viewform?usp=send_form"
    },
    kuisReaksi: {
        title: "Kuis: Reaksi Peletakan",
        url: "https://docs.google.com/forms/u/8/d/e/1FAIpQLSeMtjA4DX-oEgS6Iyo5kuZCSWRbRI5U9xKuA1Azo0mSf1qSIw/viewform?usp=send_form"
    },
    kuisTegangan: {
        title: "Kuis: Tegangan dan Regangan",
        url: "https://docs.google.com/forms/u/8/d/e/1FAIpQLSeMtjA4DX-oEgS6Iyo5kuZCSWRbRI5U9xKuA1Azo0mSf1qSIw/viewform?usp=send_form"
    }
};

/* =========================================================
   FUNGSI SWITCH TAB & MODAL INTERAKSI
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('mediaModal');
    const iframe = document.getElementById('mediaIframe');
    const modalTitle = document.getElementById('modalTitle');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const mediaCards = document.querySelectorAll('.menu-card[data-media]');

    // Listener Hanya untuk Kartu yang Punya Attribute data-media (Membuka Modal)
    mediaCards.forEach(card => {
        card.addEventListener('click', () => {
            const mediaKey = card.getAttribute('data-media');
            openMedia(mediaKey);
        });
    });

    function openMedia(key) {
        const data = mediaLinks[key];
        if (data && data.url) {
            modalTitle.innerHTML = `<i class="fa-solid fa-book-open"></i> ${data.title}`;
            iframe.src = data.url;
            modal.classList.add('active');
        } else {
            alert("Link media belum disetting pada file script.js!");
        }
    }

    function closeMedia() {
        modal.classList.remove('active');
        iframe.src = ""; 
    }

    closeModalBtn.addEventListener('click', closeMedia);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeMedia();
    });
});

// Fungsi Perpindahan Tab (Beranda / Materi / Video / Kuis)
function switchTab(tabName) {
    document.querySelectorAll('.nav-links a').forEach(nav => nav.classList.remove('active'));
    document.querySelectorAll('.content-view').forEach(view => view.classList.remove('active'));

    const sectionTitle = document.getElementById('sectionTitle');
    const sectionSub = document.getElementById('sectionSub');

    if (tabName === 'beranda' || tabName === 'materi') {
        document.getElementById('nav-beranda').classList.add('active');
        document.getElementById('nav-materi').classList.add('active');
        document.getElementById('view-beranda').classList.add('active');
        sectionTitle.innerText = "Menu Utama";
        sectionSub.innerText = "Pilih materi infografis, video, atau kuis di bawah ini";
    } else if (tabName === 'video') {
        document.getElementById('nav-video').classList.add('active');
        document.getElementById('view-video').classList.add('active');
        sectionTitle.innerText = "Video Pembelajaran";
        sectionSub.innerText = "Pilih topik materi di bawah untuk menonton video pembelajaran";
    } else if (tabName === 'kuis') {
        document.getElementById('nav-kuis').classList.add('active');
        document.getElementById('view-kuis').classList.add('active');
        sectionTitle.innerText = "Kuis & Evaluasi";
        sectionSub.innerText = "Pilih topik kuis di bawah untuk mulai mengerjakan latihan soal";
    }

    // Scroll mulus ke bagian konten utama saat berpindah menu
    window.scrollTo({ top: 300, behavior: 'smooth' });
}
