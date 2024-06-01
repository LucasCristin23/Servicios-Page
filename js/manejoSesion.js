function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");

    if (email === "" || password === "") {
        error.style.display = "block";
        return false;
    } else {
        error.style.display = "none";
        return true;
    }
}
