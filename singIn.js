function passSafety() {
    const element = document.getElementById('inputPassword')
    let lengthPass = element.value
    const msg = document.getElementById('passwordHelp')
    if (lengthPass.length < 8) {
        msg.style.color = '#ff3389'
        alert('La contraseña debe tener almens 8 caracteres')
        element.value = ""
        return false
    }
    return true
}

function send(passSafety) {
    let sendStatus
    if(passSafety){
        const email = document.getElementById('inputEmail').value
        const password = document.getElementById('inputPassword').value
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
        .then(data => saveName(data.id, sendStatus))
    }
}


function saveName(id, status) {
    if (status == 201) {
        const name = document.getElementById('inputName').value
        objectName = {name: name}
        fetch(`https://matter-app.herokuapp.com/api/v1/users/${id}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(objectName)
        })
        .then(response => {
            successfulForm(response.status, name)
            return response.json()
        })
    }else if(status == 422) {alert('El correo ya esta registrado, prueba con otro')}
    
}

function successfulForm(status, name) {
    if(status == 200){
        const element = document.getElementById('form').reset()
        alert(name + ', su registro fue exitoso')
    }
}
function button() {
    let goodPass = passSafety()
    send(goodPass)
} 