// validación de credenciales 
function validateUserLoggedIn() {
    if(sessionStorage.getItem('id') == undefined) {
        window.location.replace("./index.html");
    }
}

function logOut(){
    window.location.replace("./index.html");
    sessionStorage.clear();
}

validateUserLoggedIn();