document.getElementById("muncratBtn").addEventListener("click", function() {
    let splash = document.getElementById("chocoSplash");

    // Tambahin kelas buat efek muncrat + lumer
    splash.classList.add("splash-active");

    // Setelah 2 detik, pindah ke halaman poster
    setTimeout(() => {
        window.location.href = "poster.html";
    }, 2000);
});