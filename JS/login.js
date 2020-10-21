function login() {
    let statusCode;
    const URL = 'https://matter-app.herokuapp.com/api/v1/auth/login';
    const METHOD = 'POST'
    const inputEmail = document.getElementById('input-email').value;
    const inputPassword = document.getElementById('input-psw').value;
    
    const requestBody = { 
        email: inputEmail,
        password: inputPassword
    };

    fetch(URL, {
      method: METHOD,
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => {
        statusCode = response.status
        return  statusCode == 200 ? response.json() : undefined;
    })
    .catch(error => console.error('Error:', error))
    .then(data => checkCredentials(data, statusCode))
}

function checkCredentials(response, statusCode){

    if(statusCode != 200){
        alert('Credenciales inválidas o usuario no existe. Por favor verificar');
    } else {
        window.location.replace("./home.html");
        sessionStorage.setItem('id', response.id);   
    }
}


