import Ui from './UI.js';

const idNewUser = sessionStorage.getItem('id'); //captura el id del usuario

//función para llamar al usuario e imprimirlo por pantalla
function perfilUser() {      
    const ui = new Ui(`https://matter-app.herokuapp.com/api/v1/users/${idNewUser}`);
    console.log(idNewUser);
    ui.getUser();        
}       
perfilUser();

//función para subir imagen
function openFile(e) {
    const iu = new Ui(`https://matter-app.herokuapp.com/api/v1/users/${idNewUser}`);
    iu.openFile(e);
}

//función para editar los usuarios
function editUser() {
    const newName = document.getElementById('name').value;
    const newPass = document.getElementById('passUs').value;
    var urlencoded = {name: newName, password: newPass};
    const ui = new Ui();
    console.log(urlencoded) 
    fetch(`https://matter-app.herokuapp.com/api/v1/users/${idNewUser}`,{
            
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json', 'Acept': 'application/json'
        },
        body: JSON.stringify(urlencoded),
        redirect: 'follow'    
    })
    .then(response => response.json())
    .then(data => ui.printUser(data));
}

window.openFile = openFile;
window.editUser = editUser;