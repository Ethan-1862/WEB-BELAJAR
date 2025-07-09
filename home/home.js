document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("currentUser");

  // Tampilkan menu sesuai status login
  if (user) {
    document.getElementById("guest-menu").style.display = "none";
    document.getElementById("user-menu").style.display = "flex";
  } else {
    document.getElementById("guest-menu").style.display = "flex";
    document.getElementById("user-menu").style.display = "none";
  }
});

function logout() {
  // Tampilkan loading
  document.getElementById("loading").style.display = "flex";

  // Proses logout setelah 1 detik
  setTimeout(() => {
    localStorage.removeItem("currentUser");
    location.reload(); // reload halaman
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  // ...menu login/logout...

  // Tambahkan animasi ke semua .game-card
  const cards = document.querySelectorAll('.game-card');
  cards.forEach((card, index) => {
    card.style.animation = `slideUp 0.6s ease-out forwards`;
    card.style.animationDelay = `${index * 0.1}s`;
  });
});