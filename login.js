// your code goes here
// Simple login logic using JavaScript
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    // Check if the fields are empty
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
    } else {
        errorMessage.textContent = ""; // clear any previous error messages
        simulateLogin(username, password); // Simulate login attempt
    }
});

// Simulating the login process (without a backend)
function simulateLogin(username, password) {
    // Predefined user credentials
    const validUsername = "fitx";
    const validPassword = "0000";
    
    if (username === validUsername && password === validPassword) {
        // Simulate successful login
        window.location.href = "front.html"; // Redirect to dashboard or homepage
    } else {
        // Invalid credentials
        document.getElementById("error-message").textContent = "Invalid username or password!";
    }
}
