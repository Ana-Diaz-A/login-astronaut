let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from refreshing
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    console.log('Email:', email.value); // Display email
    console.log('Password:', password.value); // Display password
    // Process and send to API
});