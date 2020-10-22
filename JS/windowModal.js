
// Evento para que Cuando el usuario haga clic en cualquier lugar fuera del modal, cierra el login.
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target == modal) {
        modal.style.display = "none";
    }
}

