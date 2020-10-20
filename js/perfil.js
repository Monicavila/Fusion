import Datos from './Datos.js';
import UI from './UI.js';


document.getElementById('perfil').addEventListener('submit', (event) => {   
    event.preventDefault();

    // const urlGetUSer = new Datos ('https://matter-app.herokuapp.com/api/v1/users');
    // const ui = new UI();
    // ui.getUser(urlGetUSer);    
});

function getUser(){
    fetch('https://matter-app.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(data => printUser(data))
}

function printUser(user){
    const tableBody = document.getElementById('datos');
        tableBody.innerHTML = '';
        user.forEach((us) => {
            const row = `<p>${us['id']}</p>
                        <p>${us['name']}</p>
                        <p>${us['email']}</p>`
            tableBody.innerHTML += row;
        }) 
}
printUser()
getUser();
// function openFile(event) {
//   var input = event.target;

//   var reader = new FileReader();
//   reader.onload = function(){
//     var dataURL = reader.result;
//     var output = document.getElementById('output');
//     output.src = dataURL;
//   };
//   reader.readAsDataURL(input.files[0]);
// };

// var openFile = function(event) {
//   var input = event.target;

//   var reader = new FileReader();
//   reader.onload = function(){
//     var dataURL = reader.result;
//     var output = document.getElementById('output');
//     output.src = dataURL;
//   };
//   reader.readAsDataURL(input.files[0]);
// };

// openFile;

