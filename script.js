// Fake login system
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Fake validation
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate invalid login
    if (username !== "admin" || password !== "1234") {
        const errorMessage = document.getElementById('error-message');
        errorMessage.classList.remove('hidden');
        errorMessage.textContent = "Invalid username or password.";
    } else {
        alert("Welcome! (Fake access granted)");
        // Redirect to a fake "dashboard"
        window.location.href = "dashboard.html";
    }
});
