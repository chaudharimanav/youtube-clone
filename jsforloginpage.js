function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }

    alert('Login successful!'); 
    window.location.href = 'index1.html';

    function performSearch() {
        var searchTerm = document.getElementById('search').value.toLowerCase();
        console.log('Search Term:', searchTerm);
    }
}
