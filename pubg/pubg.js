// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form logic
document.getElementById("topupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("pubg-id").value;
  const ucText = document.getElementById("uc").selectedOptions[0].text;
  const metode = document.getElementById("metode").value.toUpperCase();

  if (!/^[0-9]+$/.test(id)) {
    alert("Player ID hanya boleh angka.");
    return;
  }

  // Konfirmasi
  const konfirmasi = confirm(`Konfirmasi Top Up:\n\nID: ${id}\nPaket: ${ucText}\nMetode: ${metode}`);
  if (!konfirmasi) return;

  // Tampilkan struk
  document.getElementById("s-id").textContent = id;
  document.getElementById("s-uc").textContent = ucText;
  document.getElementById("s-metode").textContent = metode;
  document.getElementById("s-tanggal").textContent = new Date().toLocaleString();
  document.getElementById("struk").style.display = "block";

  // Kirim ke WhatsApp (ubah nomor admin sesuai kebutuhan)
  const noAdmin = "6285718668652";
  const pesan = `Halo Admin, saya ingin Top Up PUBG:\n\nID: ${id}\nUC: ${ucText}\nMetode: ${metode}\nTanggal: ${new Date().toLocaleString()}`;
  const url = `https://wa.me/${noAdmin}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
});
