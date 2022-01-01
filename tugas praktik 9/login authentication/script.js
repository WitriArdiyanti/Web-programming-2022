function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    if (username == "Witri" && password == "1308") {
      window.open("secpage.html")
    } else {
      alert(`Account Not Found`);
    }
  }