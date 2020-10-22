import LoginUser from './LoginUser.js'
// función del login del usuario
document.getElementById('log-in').addEventListener('submit', (event)=> {
    event.preventDefault();

    const url = 'https://matter-app.herokuapp.com/api/v1/auth/login';
    const method = 'POST';
    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-psw').value;
    const log = new LoginUser(url, method, email, password);
    log.login();
}) 



