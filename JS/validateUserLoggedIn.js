// validación de credenciales 
function validateUserLoggedIn() {
    if(sessionStorage.getItem('id') == undefined) {
        window.location.replace("./index.html");
    }
}

validateUserLoggedIn();