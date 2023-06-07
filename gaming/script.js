function login() {
    var username = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    event.preventDefault();
    if (username == "login" && password =="password"){ 
    window.location.href="/loginSuccess.html"
} else {
    window.location.href="/loginFailed.html"
}

}