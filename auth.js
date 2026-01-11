function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const found = users.find(u => u.username === user && u.password === pass);

  if (found) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", found.name);
    window.location.href = "project1.html";
  } else {
    document.getElementById("msg").innerText = "Invalid Login!";
  }
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
