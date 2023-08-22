document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (checkCredentials(username, password)) {
        window.location.href = "home.html";
    } else {
        document.getElementById("message").textContent = "Credenciais inválidas. Por favor, tente novamente.";
    }
});

function checkCredentials(username, password) {
    var users = {
        "felipe": "123",
        "maria eduarda": "123",
        "charlie": "letmein"
    };

    return users.hasOwnProperty(username) && users[username] === password;
}