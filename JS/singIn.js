class User {
    constructor(name, email, password) {
        this.name = name,
        this.email = email,
        this.password = password
    }

    passSafety() {
        let password = this.password 
        if (password.length < 8) {
            swal({
                text: "La contraseña debe tener al menos 8 caracteres",
                button: "Aceptar",
              });
            //alert('La contraseña debe tener al menos 8 caracteres')
            document.getElementById('inputPassword').value = ""
            return false
        }
        return true
    }

    send() {
        let sendStatus 
        let passSafety = this.passSafety()
        if(passSafety){
            const email = this.email
            const password = this.password
            const data = {email : email, password : password}
            fetch('https://matter-app.herokuapp.com/api/v1/users', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(response => {
                sendStatus = response.status
                return response.json()
            })
            .then(data => this.saveName(data.id, sendStatus))
        }
    }

    saveName(id, status) {
        if (status == 201) {
            const name = this.name
            const objectName = {name: name}
            fetch(`https://matter-app.herokuapp.com/api/v1/users/${id}`,{
                method: 'PUT',
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                body: JSON.stringify(objectName)
            })
            .then(response => {
                this.successfulForm(response.status, name)
                return response.json()
            })
        }else if(status == 422) {
            swal({
                title: "¡Intenta otra vez!",
                text: "El correo ya esta registrado.",
                icon: "warning",
                button: "Aceptar",
            })
        }
        //alert('El correo ya esta registrado, prueba con otro')}
    }
    successfulForm(status, name) {
        if(status == 200){
            const element = document.getElementById('form').reset()
            swal({
                title: "¡Éxito!",
                text: name + ", su registro fue exitoso",
                icon: "success",
                button: "Aceptar",
            }).then(function() {
                window.location.href = "./index.html";
            });
            //alert(name + ', su registro fue exitoso')s
        }
        //setTimeout(window.location.replace("./index.html"),10000)
    }
}

function button() {

    const   name = document.getElementById('inputName').value
    const   email = document.getElementById('inputEmail').value
    const   password = document.getElementById('inputPassword').value
    let newUser = new User(name, email, password)
    newUser.send()
} 
