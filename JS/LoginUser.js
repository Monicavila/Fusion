// clase del login del usuario
export default class LoginUser {
    constructor(URL, METHOD, email, password) {
        this.URL = URL;
        this.METHOD = METHOD;
        this.email = email;
        this.password = password;
    }
    login() {
        let statusCode;
        
        const requestBody = { 
            email: this.email,
            password: this.password
        };
    
        fetch(this.URL, {
          method: this.METHOD,
          body: JSON.stringify(requestBody),
          headers: {
            'Content-Type': 'application/json'
          },
        }).then(response => {
            statusCode = response.status
            return  statusCode == 200 ? response.json() : undefined;
        })
        .catch(error => console.error('Error:', error))
        .then(data => this.checkCredentials(data, statusCode))
    }
    checkCredentials(response, statusCode){

        if(statusCode != 200){
            swal({
                title: "¡Por favor verifica!",
                text: "Credenciales inválidas o el usuario no existe",
                icon: "warning",
                button: "Aceptar",
              });
            //alert('Credenciales inválidas o usuario no existe. Por favor verificar');
        } else {
            window.location.replace("./home.html");
            sessionStorage.setItem('id', response.id);   
        }
    }
}