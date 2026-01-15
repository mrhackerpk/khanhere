const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        errorMsg.textContent = "Please fill in all fields.";
        return;
    }

    if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters.";
        return;
    }

    errorMsg.style.color = "green";
    errorMsg.textContent = "Login successful!";
    
    // Example redirect
    // window.location.href = "dashboard.html";
});

function goToSignup() {
    alert("Redirecting to Sign Up page...");
    // window.location.href = "signup.html";
}
