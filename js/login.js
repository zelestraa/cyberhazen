document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fetch the user data from a JSON file (replace with your own data)
    fetch('../js/userdata.json')
        .then(response => response.json())
        .then(data => {
            const user = data.find(user => user.username === username);

            if (user && user.password === password) {
                alert('Login successful');
                localStorage.setItem('username',username);
            } else {
                alert('Login failed. Please check your credentials.');
                localStorage.removeItem('username',username);
                username = "you are not logged in"
            }
        })
        .catch(error => {
            console.error('An error occurred: ' + error);
        });
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `Logged in as: ${localStorage.getItem('username')}`;


        const logoutButton = document.getElementById('logout-button');
        logoutButton.addEventListener('click', ()=> {
            // Clear the stored user information in localStorage
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            // Redirect to the login page
            window.location.href = 'index.html';
        });


});