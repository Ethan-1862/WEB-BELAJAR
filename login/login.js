function login() {
  const emailOrUser = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Cek apakah ada user yang cocok
  const matchedUser = users.find(
    user =>
      (user.email === emailOrUser || user.username === emailOrUser) &&
      user.password === password
  );

  if (matchedUser) {
    alert("Login berhasil!");
    localStorage.setItem("currentUser", JSON.stringify(matchedUser)); // Simpan user yang login
    window.location.href = "/home/home.html";
  } else {
    alert("Email/Username atau password salah.");
  }
}
