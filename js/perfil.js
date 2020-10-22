import Ui from './UI.js';


document.getElementById('mostrar').addEventListener('click', (event) => {   
    event.preventDefault();

    document.getElementById('imgMostrar').addEventListener('click', (event) => event.openFile());
    
    const ui = new Ui('https://matter-app.herokuapp.com/api/v1/auth/login');
    ui.log(); 
    // ui.log(pass); 
          
});

