// Hitung dan tampilkan total harga otomatis
function updateTotalHarga() {
  const rankSelect = document.getElementById("rank");
  const bintangInput = document.getElementById("bintang");
  const totalHargaEl = document.getElementById("totalHarga");

  const hargaPerBintang = +rankSelect.options[rankSelect.selectedIndex]?.dataset?.harga || 0;
  const jumlah = parseInt(bintangInput.value) || 0;
  const total = hargaPerBintang * jumlah;

  totalHargaEl.innerText = `Rp ${total.toLocaleString()}`;
}

// Event listener untuk input rank dan jumlah bintang
document.getElementById("rank").addEventListener("change", updateTotalHarga);
document.getElementById("bintang").addEventListener("input", updateTotalHarga);

// Tangani submit form dan tampilkan struk
document.getElementById("eceranForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const rankSelect = document.getElementById("rank");
  const rank = rankSelect.value;
  const hargaPerBintang = +rankSelect.options[rankSelect.selectedIndex]?.dataset?.harga || 0;
  const bintang = parseInt(document.getElementById("bintang").value) || 0;
  const metode = document.getElementById("metode").value;
  const kontak = document.getElementById("kontak").value;

  if (!rank || !bintang || !metode || !kontak) {
    alert("Mohon lengkapi semua field.");
    return;
  }

  const total = hargaPerBintang * bintang;

  // Buat isi struk
const strukHTML = `
  <h3>🧾 Struk Pembayaran</h3>
  <p><strong>Rank:</strong> ${rank}</p>
  <p><strong>Harga per Bintang:</strong> Rp ${hargaPerBintang.toLocaleString()}</p>
  <p><strong>Jumlah Bintang:</strong> ${bintang}</p>
  <p><strong>Total Bayar:</strong> <span style="color:#FFD700;">Rp ${total.toLocaleString()}</span></p>
  <p><strong>Metode Pembayaran:</strong> ${metode}</p>
  <p><strong>Kontak:</strong> ${kontak}</p>

  <a class="wa-link" href="https://wa.me/6285718668652?text=Halo%2C+saya+mau+joki+eceran+rank+*${rank}*+sebanyak+*${bintang}*+bintang%0AMetode%3A+*${metode}*%0ATotal%3A+Rp+${total.toLocaleString()}%0AKontak%3A+${kontak}" target="_blank">
    📩 Kirim ke WhatsApp
  </a>
`;
  const strukEl = document.getElementById("strukOutput");
  strukEl.innerHTML = strukHTML;
  strukEl.style.display = "block";
});
