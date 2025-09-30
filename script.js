document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;

    // Fungsi untuk mengatur mode dan menyimpan ke Local Storage
    const setMode = (mode) => {
        if (mode === 'night-mode') {
            body.classList.add('night-mode');
            body.classList.remove('light-mode');
            toggleButton.textContent = '☀️'; // Ikon Matahari untuk Dark Mode
        } else {
            body.classList.add('light-mode');
            body.classList.remove('night-mode');
            toggleButton.textContent = '🌙'; // Ikon Bulan untuk Light Mode
        }
        localStorage.setItem('mode', mode);
    };

    // 1. Cek preferensi mode dari local storage (menyimpan pilihan pengguna)
    const savedMode = localStorage.getItem('mode');
    
    if (savedMode) {
        setMode(savedMode);
    } else {
        // Jika belum ada pilihan, cek preferensi sistem operasi
        // Ini adalah fitur yang baik untuk user experience (UX)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
             setMode('night-mode');
        } else {
             setMode('light-mode');
        }
    }

    // 2. Tambahkan event listener untuk tombol toggle
    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('night-mode')) {
            setMode('light-mode');
        } else {
            setMode('night-mode');
        }
    });
});