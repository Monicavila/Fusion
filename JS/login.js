import LoginUser from './LoginUser.js'
// función del login del usuario
document.getElementById('log-in').addEventListener('submit', (event)=> {
    event.preventDefault();
    const log = new LoginUser('https://matter-app.herokuapp.com/api/v1/auth/login', 'POST', 
    document.getElementById('input-email').value, document.getElementById('input-psw').value );
    log.login();
}) 



