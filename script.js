function handleSubmit(event) {
    event.preventDefault();  // Prevents the form from submitting

    // Retrieve the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check the username and password
    if (username === "admin" && password === "admin") {
        // Redirect to admin home page
        window.location.href = "admin-home.html";  // Replace with actual admin home page URL
    } else if (username === "student" && password === "student") {
        // Redirect to student home page
        window.location.href = "student-home.html";  // Replace with actual student home page URL
    } else if (username === "faculty" && password === "faculty") {
        // Redirect to faculty home page
        window.location.href = "faculty-home.html";  // Replace with actual faculty home page URL
    } else {
        // Show an alert if the credentials are incorrect
        alert("Invalid username or password!");
    }
}
