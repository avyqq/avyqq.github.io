// script.js – Portfolio Afiq Adrell (Final Version with Emoji Icons)

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("mode-toggle");
    const body = document.body;

    // ---------- DARK / LIGHT MODE TOGGLE ----------
    const setMode = (mode) => {
        if (mode === "night-mode") {
            body.classList.add("night-mode");
            body.classList.remove("light-mode");
            toggleButton.textContent = "☀️";     // Ikon matahari (dark mode aktif)
        } else {
            body.classList.add("light-mode");
            body.classList.remove("night-mode");
            toggleButton.textContent = "🌙";    // Ikon bulan (light mode aktif)
        }
        localStorage.setItem("portfolio-mode", mode);
    };

    // Cek pilihan yang tersimpan atau ikut sistem operasi
    const savedMode = localStorage.getItem("portfolio-mode");
    if (savedMode) {
        setMode(savedMode);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setMode("night-mode");
    } else {
        setMode("light-mode");
    }

    // Toggle mode saat tombol diklik
    toggleButton.addEventListener("click", () => {
        body.classList.contains("night-mode") ? setMode("light-mode") : setMode("night-mode");
    });

    // ---------- SMOOTH PAGE TRANSITION ----------
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            const currentPage = window.location.pathname.split("/").pop() || "index.html";

            if (href !== currentPage && href.endsWith(".html")) {
                e.preventDefault();
                document.body.classList.add("page-leaving");
                setTimeout(() => {
                    window.location.href = href;
                }, 420);
            }
        });
    });

    // ---------- ACTIVE NAVIGATION HIGHLIGHT ----------
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav a").forEach(navLink => {
        if (navLink.getAttribute("href") === currentPage) {
            navLink.classList.add("active");
        }
    });
});