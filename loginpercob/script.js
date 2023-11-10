// // // Simulated JSON database for user storage
// // const users = [
// //     { username: 'user1', password: 'password1' },
// //     { username: 'user2', password: 'password2' }
// // ];

// // let currentUser = null;

// // function register() {
// //     const username = document.getElementById('registerUsername').value;
// //     const password = document.getElementById('registerPassword').value;

// //     if (username && password) {
// //         users.push({ username, password });
// //         alert('Registration successful!');
// //     } else {
// //         alert('Please fill in both username and password fields.');
// //     }
// // }

// // function login() {
// //     const username = document.getElementById('loginUsername').value;
// //     const password = document.getElementById('loginPassword').value;

// //     const user = users.find(u => u.username === username && u.password === password);

// //     if (user) {
// //         currentUser = user;
// //         alert('Login successful!');
// //     } else {
// //         alert('Login failed. Please check your credentials.');
// //     }
// // }

// // function logout() {
// //     currentUser = null;
// //     alert('Logged out successfully.');
// // }

// // let users = []; // Initialize an empty array to store user data.

// // // Load user data from JSON file when the page loads.
// // fetch('users.json')
// //     .then(response => response.json())
// //     .then(data => {
// //         users = data;
// //     })
// //     .catch(error => console.error('Error loading user data:', error));

// // let currentUser = null;

// // function register() {
// //     const username = document.getElementById('registerUsername').value;
// //     const password = document.getElementById('registerPassword').value;

// //     if (username && password) {
// //         users.push({ username, password });
// //         alert('Registration successful!');
// //     } else {
// //         alert('Please fill in both username and password fields.');
// //     }
// // }

// // function login() {
// //     const username = document.getElementById('loginUsername').value;
// //     const password = document.getElementById('loginPassword').value;

// //     const user = users.find(u => u.username === username && u.password === password);

// //     if (user) {
// //         currentUser = user;
// //         alert('Login successful!');
// //     } else {
// //         alert('Login failed. Please check your credentials.');
// //     }
// // }

// // function logout() {
// //     currentUser = null;
// //     alert('Logged out successfully.');
// // }


// let users = []; // Initialize an empty array to store user data.

// // Load user data from JSON file when the page loads.
// fetch('users.json')
//     .then(response => response.json())
//     .then(data => {
//         users = data;
//     })
//     .catch(error => console.error('Error loading user data:', error));

// let currentUser = null;

// // Load registered users from localStorage (if any)
// // let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

// // function register() {
// //     const username = document.getElementById('registerUsername').value;
// //     const password = document.getElementById('registerPassword').value;

// //     if (username && password) {
// //         // Check if the username is already taken
// //         if (registeredUsers.some(user => user.username === username)) {
// //             alert('Username is already taken. Please choose a different one.');
// //         } else {
// //             registeredUsers.push({ username, password });
// //             localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
// //             alert('Registration successful!');
// //         }
// //     } else {
// //         alert('Please fill in both username and password fields.');
// //     }
// // }

// // The rest of your code (login and logout functions) remains the same

// // function register() {
// //     const username = document.getElementById('registerUsername').value;
// //     const password = document.getElementById('registerPassword').value;

// //     if (username && password) {
// //         users.push({ username, password });
// //         alert('Registration successful!');
// //     } else {
// //         alert('Please fill in both username and password fields.');
// //     }
// // }

// // function login() {
// //     const username = document.getElementById('loginUsername').value;
// //     const password = document.getElementById('loginPassword').value;

// //     const user = users.find(u => u.username === username && u.password === password);

// //     if (user) {
// //         currentUser = user;
// //         alert('Login successful!');

// //         // Store login event in localStorage
// //         const loginHistory = JSON.parse(localStorage.getItem('loginHistory')) || [];
// //         loginHistory.push({ username, timestamp: new Date().toLocaleString() });
// //         localStorage.setItem('loginHistory', JSON.stringify(loginHistory));
// //     } else {
// //         alert('Login failed. Please check your credentials.');
// //     }
// // }

// function logout() {
//     currentUser = null;
//     alert('Logged out successfully.');
// }

// // Function to display login history
// function displayLoginHistory() {
//     const loginHistory = JSON.parse(localStorage.getItem('loginHistory')) || [];

//     let historyText = 'Login History:\n';

//     for (const event of loginHistory) {
//         historyText += `${event.username} logged in at ${event.timestamp}\n`;
//     }

//     alert(historyText);
// }
// // Load registered users from localStorage (if any)
// let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

// function register() {
//     const username = document.getElementById('registerUsername').value;
//     const password = document.getElementById('registerPassword').value;

//     if (username && password) {
//         // Check if the username is already taken
//         if (registeredUsers.some(user => user.username === username)) {
//             alert('Username is already taken. Please choose a different one.');
//         } else {
//             registeredUsers.push({ username, password });
//             localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
//             alert('Registration successful!');

//             // You can optionally auto-login the user after successful registration.
//             // Here's how you can do it:
//             login(username, password);
//         }
//     } else {
//         alert('Please fill in both username and password fields.');
//     }
// }

// function login(username, password) {
//     if (!username || !password) {
//         alert('Please provide both username and password.');
//         return;
//     }

//     const user = registeredUsers.find(u => u.username === username && u.password === password);

//     if (user) {
//         currentUser = user;
//         alert('Login successful!');
//     } else {
//         alert('Login failed. Please check your credentials.');
//     }
// }



// Load registered users from localStorage (if any)
let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
// Load user data from JSON file when the page loads.
fetch('users.json')
    .then(response => response.json())
    .then(data => {
        users = data;
    })
    .catch(error => console.error('Error loading user data:', error));
let currentUser = null;

// Load login history from localStorage (if any)
let loginHistory = JSON.parse(localStorage.getItem('loginHistory')) || [];

// Function to register a new user
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        if (registeredUsers.some(user => user.username === username)) {
            alert('Username is already taken. Please choose a different one.');
        } else {
            registeredUsers.push({ username, password });
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
            alert('Registration successful!');
        }
    } else {
        alert('Please fill in both username and password fields.');
    }
}

// Function to log in a user
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        alert('Please provide both username and password.');
        return;
    }

    const user = registeredUsers.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = user;
        alert('Login successful!');
        // Record the login event in history
        loginHistory.push({ username, timestamp: new Date().toLocaleString() });
        localStorage.setItem('loginHistory', JSON.stringify(loginHistory));
    } else {
        alert('Login failed. Please check your credentials.');
    }
}

// Function to log out the current user
function logout() {
    currentUser = null;
    alert('Logged out successfully.');
}

// Function to display login history
function displayLoginHistory() {
    const historyText = loginHistory.map(event => `${event.username} logged in at ${event.timestamp}`).join('\n');
    alert('Login History:\n' + historyText);
}

// Function to clear login history
function clearLoginHistory() {
    localStorage.removeItem('loginHistory');
    loginHistory = [];
    alert('Login history cleared.');
}
