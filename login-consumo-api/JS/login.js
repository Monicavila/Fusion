function login() {
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
    }).then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(data => checkCredentials(data))
}

function checkCredentials(response){

    if(response == undefined){
        alert('No user found for this email/password');
    } else {
        window.location.replace("./home.html");
        sessionStorage.setItem('id', response.id);   
    }
}


