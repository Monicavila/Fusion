function button() {
    let goodPass = passSafety()
    send(goodPass)

}

function passSafety() {
    var lengthPass = document.getElementById('inputPassword').value
    const msg = document.getElementById('passwordHelp')
    if (lengthPass.length < 8) {
        msg.style.color = '#ff3389'
        alert('La contraseña debe tener almens 8 caracteres')
        lengthPass = ""
        console.log('Ya debio limpiar')
        return false
    }
    console.log('Ya es true')
    return true
}

function send(passSafety) {
    console.log('en func')
    if(passSafety){
        const email = document.getElementById('inputEmail').value
        const password = document.getElementById('inputPassword').value
        const data = {email : email, password : password}
        console.log('en if: ' + JSON.stringify(data))
        fetch('https://matter-app.herokuapp.com/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 'Accept': 'application/json'
            },
                body: JSON.stringify(data)
            })
           .then(response => console.log(response))
           .then(data => console.log('Success:', data))
    }
} 
