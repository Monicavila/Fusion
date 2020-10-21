// import Datos from './Datos.js';
// import UI from './UI.js';


// document.getElementById('perfil').addEventListener('submit', (event) => {   
//     event.preventDefault();

//     const urlGetUSer = new Datos ('https://matter-app.herokuapp.com/api/v1/users');
//     const ui = new UI();
//     ui.getUser(urlGetUSer); 
       
// });



// let idEdit = false;

function getUser(){
    fetch('https://matter-app.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(data => userId(data))        
}
getUser();

function userId(data){
    let mailLog =  document.getElementById('email-login').value;
    
    data.forEach(re => {
        if(re.email === mailLog) {
            // let newID = re.id;
            // console.log(newID)
            alert("usuario encontrado");
        }                                 
    });    
}
userId;


// function oneUser(){
//     fetch(`'https://matter-app.herokuapp.com/api/v1/users/${userId()}'`)
//     .then(response => response.json())
//     .then(data => printUser(data));
// }
// oneUser();

// function printUser(user){
//     const tableBody = document.getElementById('users');
//     // let mailLog =  document.getElementById('email-login').value;
//     tableBody.innerHTML = '';

//     user.forEach(re => {
//         // if(mailLog === re.mail){
//             let row = `<p>${re.name}</p>
//                 <p>${re.email}</p>
//                 <p>
//                     <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
//                         Mostrar
//                     </button>
//                 </p>
//                 <div id="clearUser" onsubmit="event.preventDefault(), saveUser()">
//                     <div class="collapse" id="collapseExample">
//                         <div class="card card-body">
//                             <label for="name">nombre</label>
//                             <input type="text" id="name">
//                             <button class="btn btn-primary" type="button" onclick="editUser(${re.id})">Editar</button>
//                         </div>
//                     </div>
//                 </div>`
//             tableBody.innerHTML += row; 
//         // }                               
//     }); 
// }
//  printUser;

// //Editar
// function editUser(id) {
//     const edUser = re.filter(re => re.id === id)
//     const inputName = document.getElementById('name'); //en estos input se ponen los valores
//     inputName.value = edUser.name; //poner los imput los valores que se van a editar
//     idEdit = edUser.id;
//     console.log(edUser);
//     console.log(id);
// }
// editUser;

// // //guardar
// function saveUser() {
//     const newName = document.getElementById('name').value;//obtiene los nuevos valores para guardar
//     if(idEdit === false) {
//         alert('selecciona el nombre a editar');
//         return;
//     }
//     //actualiza el array de usuarios
//     const edUser = user.find(re => re.id === idEdit)
//     edUser.name = newName;

//     //para limpiar el input
//     document.getElementById('clearUser').reset();

//     //actualiza la vista
//     printUser();
//     console.log(user);
// }





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
// window.printUser = printUser;
// window.editUser = editUser;
window.userId = userId;


