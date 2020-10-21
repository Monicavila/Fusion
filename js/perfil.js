// import Datos from './Datos.js';
// import UI from './UI.js';


// document.getElementById('perfil').addEventListener('submit', (event) => {   
//     event.preventDefault();

//     const urlGetUSer = new Datos ('https://matter-app.herokuapp.com/api/v1/users');
//     const ui = new UI();
//     ui.getUser(urlGetUSer); 
       
// });
// function getUser(){
//     fetch('https://matter-app.herokuapp.com/api/v1/users')
//     .then(response => response.json())
//     .then(data => printUser(data))        
// }
// getUser();

// function userId(data){
//     let idUs = data.forEach(re => {
//         let row = re['id']; 
//         return row;                                   
//     });    

//     console.log(idUs);

//     // fetch(`https://matter-app.herokuapp.com/api/v1/users/${idUs}`)
//     //     .then(response => response.json())
//     //     .then(data => console.log(data)); 
// }
// userId;

// function putUser(){
//     fetch(`'https://matter-app.herokuapp.com/api/v1/users/${userId()}'`)
//     .then(response => response.json())
//     .then(data => console.log(data));
// }
// putUser();
function getUser(){
    fetch('https://matter-app.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(data => printUser(data))        
}
getUser();

function printUser(user){
    const tableBody = document.getElementById('users');
    // const mailLog =  document.getElementById('email-login').value;
    tableBody.innerHTML = '';
    user.forEach(re => {
        let row = `<p>${re.name}</p>
                <p>${re.email}</p>
                <p>
                    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Mostrar
                    </button>
                </p>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        <label for="email">mail</label>
                        <input type="email" id="email">
                        <label for="name">nombre</label>
                        <input type="text" id="name">
                        <button class="btn btn-primary" type="button" onclick="editUser(${re.id})">Editar</button>
                    </div>
                </div>`
        tableBody.innerHTML += row;                                
    }); 
}
// printUser();

// Guardar
function editUser(id) {
     alert(id);  
}
editUser;

// Para cargar la imagen
function openFile(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
};

openFile;

window.openFile = openFile;

window.editUser = editUser;


