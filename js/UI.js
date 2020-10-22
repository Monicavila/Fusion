export default class Ui {
    constructor(url) {
        this.url = url;
    }  
    // esta función inicia sesión
    log() {
        const emailUser = document.getElementById('input-email').value;
        const passUser = document.getElementById('input-psw').value;

        const user = {email:  emailUser, password: passUser}
        console.log(user)
        // const user = {email:  'julirg58@gmail.com', password: '12345678'}
        fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 'Acept': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((response) => response.json())
        .then((data) => {this.setIdUser(data)
            this.printUser(data)})   
    }

    // recibe el usuario que inició sesión y guardamos el usuario completo en el sessionStorage y retornamos el id del usuario

    setIdUser(data) {
        sessionStorage.setItem('id', data.id)
    }

    getIdUser() {
        return JSON.parse(sessionStorage.getItem('id'))
    }

    getUser(){
        
        const idNewUser = getIdUser();
        
        var urlencoded = {name: document.getElementById('name').value};
        console.log(urlencoded)   

        fetch(`https://matter-app.herokuapp.com/api/v1/users/${idNewUser}`,{
                
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', 'Acept': 'application/json'
            },
            body: JSON.stringify(urlencoded),
            // redirect: 'follow'    
        })
        .then(response => response.json())
        .then(data => this.printUser(data));
    }

    printUser(user){
        const tableBody = document.getElementById('users');
        tableBody.innerHTML = '';
        let row = `<p>Nombre: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>Password: ${user.password}</p>
            <p>
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Mostrar
                </button>
            </p>
            <div id="clearUser" onsubmit="event.preventDefault(), saveUser()">
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        <label for="name">nombre</label>
                        <input type="text" id="name">
                        <label for="passUs">contraseña</label>
                        <input type="text" id="passUs">
                        <button class="btn btn-primary" type="button" onclick="editUser(${user.id})">Editar</button>
                    </div>
                </div>
            </div>`
        tableBody.innerHTML += row; 
    }

    // Guardar
    addUser() {
        let idEdit = false;
        //se captura el dato del input
        const name = document.getElementById('name').value;  
        if(name !== '') {
            // Creo un nuevo usuario que es un objeto
            const newUser = {
                name: name
            }  
            // Agrego el usuario creado al array que tiene todos los usuarios
            user.push(newUser);
            // imprimo nuevamente a todos los usuarios
            printUsers();
            document.getElementById('name').value='';
        }else {
            alert("no se puede dejar campos vacios");
        }    
    }

    editingUser() {
        let idEdit = false;
        const name = document.getElementById('name').value;
        idEdit.name = name
        printUsers();
        idEdit = false;
        document.getElementById('name').value = '';
    }

    editUser(id) {
        let idEdit = false;
        const us = id;  
        document.getElementById('name').value = us.name;
        idEdit = us;
    }

    submitUser() {
        let idEdit = false;
        console.log(idEdit)
        if(idEdit) {
            editUser();
        } else {
            addUser();
        }
    }

    // Para cargar la imagen
    openFile(event) {
        var input = event.target;

        var reader = new FileReader();
        reader.onload = function(){
        var dataURL = reader.result;
        var output = document.getElementById('output');
        output.src = dataURL;
        };
        reader.readAsDataURL(input.files[0]);
    }
}
