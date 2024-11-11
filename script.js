window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Tambahkan kelas 'scrolled' saat discroll
    } else {
        navbar.classList.remove('scrolled'); // Hapus kelas 'scrolled' jika kembali ke atas
    }
});

if (window.location.pathname.includes("kontak.html")) {
    document.getElementById("navbar").classList.add("bg-primary");
    document.getElementById("navbar").classList.remove("navbar-scroll");
}