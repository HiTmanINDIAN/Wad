// Check if there's existing data in local storage
if (localStorage.getItem('userData') === null) {
    localStorage.setItem('userData', JSON.stringify([]));
}

// Handle form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Prepare the user data object
    const userData = {
        username: username,
        email: email,
        password: password
    };

    // Store the data in local storage
    const currentData = JSON.parse(localStorage.getItem('userData'));
    currentData.push(userData);
    localStorage.setItem('userData', JSON.stringify(currentData));

    // Optional: Send data to a server using AJAX POST
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true); // Use a mock URL here
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 201) {
            alert('Registration successful');
            // Redirect to the data list page
            window.location.href = 'data-list.html';
        } else {
            alert('Error during registration');
        }
    };
    xhr.send(JSON.stringify(userData));
});
