export default class Ui {
    constructor(url) {
        this.url = url;
    } 
    //llama al usuario
    getUser(){          
        fetch(this.url,{                
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 'Acept': 'application/json'
            },   
        })
        .then(response => response.json())
        .then(data => this.printUser(data));
    }

    //imprime por pantalla al usuario
    printUser(user){
        const tableBody = document.getElementById('users');
        tableBody.innerHTML = '';
        let row = `<br><p>Nombre: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>Password: ${user.password}</p><br>
            <p>Para editar presione aquí:</p>
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Ver
                </button>
            </p>
            <div id="clearUser" onsubmit="event.preventDefault(), saveUser()">
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        <label for="name">Nombre y apellido</label>
                        <input type="text" id="name">
                        <label for="passUs">Contraseña</label>
                        <input type="text" id="passUs">
                        <button class="btn btn-primary" type="button" onclick="editUser()">Editar</button>
                    </div>
                </div>
            </div>`
        tableBody.innerHTML += row; 
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
