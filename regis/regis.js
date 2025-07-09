document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const username = document.getElementById("user").value;
  const email = document.getElementById("email").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Konfirmasi password tidak cocok.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const isExist = users.some(
    user => user.email === email || user.username === username
  );

  if (isExist) {
    alert("Email atau Username sudah digunakan.");
    return;
  }

  const newUser = {
    fullname,
    username,
    email,
    whatsapp,
    password
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Pendaftaran berhasil! Silakan login.");
  window.location.href = "/login/login.html";
});

function togglePassword(fieldId) {
  const input = document.getElementById(fieldId);
  input.type = input.type === "password" ? "text" : "password";
}
