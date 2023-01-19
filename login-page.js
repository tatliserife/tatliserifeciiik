const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;

    if (username.toLocaleLowerCase() === "serife" || username.toLocaleLowerCase() == "şerife") {
        location.replace("bar.html");
    } else {
        alert("Ne yazık ki her ismin tatlığını ölçemiyoruz :D");
    }
})