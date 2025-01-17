const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here, you would typically validate the credentials against a server
    // For this example, let's just simulate a successful login
    if (username === 'testuser' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or perform other actions
    } else {
        alert('Invalid username or password.');
    }
});