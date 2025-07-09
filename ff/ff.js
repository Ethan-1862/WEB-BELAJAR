const diamondOptions = [
  { name: "70 Diamond", price: "Rp10.000" },
  { name: "140 Diamond", price: "Rp19.000" },
  { name: "355 Diamond", price: "Rp45.000" },
  { name: "720 Diamond", price: "Rp89.000" },
  { name: "1000 Diamond", price: "Rp125.000" },
  { name: "Membership Mingguan", price: "Rp29.000" },
  { name: "Membership Bulanan", price: "Rp149.000" },
  { name: "1440 Diamond", price: "Rp175.000" },
  { name: "2000 Diamond", price: "Rp225.000" },
  { name: "4000 Diamond", price: "Rp450.000" },
];

const paymentOptions = [
  "DANA", "OVO", "GoPay", "QRIS", "ShopeePay",
  "Bank BCA", "Bank BRI", "Bank Mandiri", "Alfamart", "Indomaret"
];

let selectedDiamond = null;
let selectedPayment = null;

const diamondGrid = document.getElementById("diamondGrid");
diamondOptions.forEach(item => {
  const div = document.createElement("div");
  div.className = "diamond-option";
  div.textContent = `${item.name}\n${item.price}`;
  div.addEventListener("click", () => {
    document.querySelectorAll(".diamond-option").forEach(el => el.classList.remove("selected"));
    div.classList.add("selected");
    selectedDiamond = item;
  });
  diamondGrid.appendChild(div);
});

const paymentGrid = document.getElementById("paymentGrid");
paymentOptions.forEach(option => {
  const div = document.createElement("div");
  div.className = "payment-option";
  div.textContent = option;
  div.addEventListener("click", () => {
    document.querySelectorAll(".payment-option").forEach(el => el.classList.remove("selected"));
    div.classList.add("selected");
    selectedPayment = option;
  });
  paymentGrid.appendChild(div);
});

document.getElementById("confirmBtn").addEventListener("click", () => {
  const id = document.getElementById("id").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const contact = document.getElementById("contact").value.trim();

  if (!id || !phone || !contact || !selectedDiamond || !selectedPayment) {
    alert("Harap isi semua data dan pilih paket serta metode pembayaran.");
    return;
  }

  document.getElementById("r-id").textContent = `🆔 ID: ${id}`;
  document.getElementById("r-phone").textContent = `📞 No HP: ${phone}`;
  document.getElementById("r-package").textContent = `💎 Paket: ${selectedDiamond.name} - ${selectedDiamond.price}`;
  document.getElementById("r-payment").textContent = `💳 Metode: ${selectedPayment}`;
  document.getElementById("r-contact").textContent = `📧 Kontak: ${contact}`;
  
  document.getElementById("receipt").classList.remove("hidden");
});

function sendToWhatsApp() {
  const id = document.getElementById("id").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const contact = document.getElementById("contact").value.trim();

  const message = `Halo kak, saya ingin top up:\n\n` +
    `🎮 Game: Free Fire\n` +
    `🆔 ID: ${id}\n` +
    `📞 No HP: ${phone}\n` +
    `💎 Paket: ${selectedDiamond.name} - ${selectedDiamond.price}\n` +
    `💳 Metode Pembayaran: ${selectedPayment}\n` +
    `📧 Kontak: ${contact}\n\n` +
    `Mohon segera diproses ya kak 🙏`;

  const url = `https://wa.me/6285718668652?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
