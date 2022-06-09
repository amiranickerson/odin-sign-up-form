
let button = document.getElementById("submit");

let password1 = document.getElementById("password");
let password2 = document.getElementById("confirmPassword");

button.addEventListener("click", function (event) {
    if (password1.value !== password2.value) {
        alert("Passwords do not match");
    }
    else {
        return;
    }
});
