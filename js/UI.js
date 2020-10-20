export default class UI {
    getUser(){
        fetch(this.url,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', 'Accept': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => printUsers(data))
    }

    putUser(){
        fetch(this.url)
        .then(response => response.json())
        .then(data => this.addUsers(data.users));
    }

    printUsers(user) {
        const tableBody = document.getElementById('datos');
        tableBody.innerHTML = '';
        user.forEach((us) => {
            const row = `<p>${us.id}</p>
                        <p>${us.name}</p>
                        <p>${us.email}</p>`
            tableBody.innerHTML += row;
        })        
    }

    // // Guardar
    // addCars() {
    //     //se captura el dato del input
    //     const marca = document.getElementById('marca').value;  

    //     if(marca && modelo && color && año && precio !== '') {
    //         // Creo un nuevo usuario que es un objeto
    //         const newCars = {
    //             id: cars.length + 1,
    //             marca: marca
    //         }  
    //         // Agrego el usuario creado al array que tiene todos los usuarios
    //         cars.push(newCars);
    //         // imprimo nuevamente a todos los usuarios
    //         printUsers();
    //         document.getElementById('marca').value='';
    //     }else {
    //         alert("no se puede dejar campos vacios");
    //     }        
    // }

    // // Editar
    // submitCar() {
    //     let editingCar = false;
    //     console.log(editingCar)
    //     if(editingCar) {
    //         editCar();
    //     } else {
    //         addCars();
    //     }
    // }
    // editCar() {
    //     let editingCar = false;
    //     const marca = document.getElementById('marca').value;
    //     editingCar.marca = marca
    //     printUsers();
    //     editingCar = false;
    //     document.getElementById('marca').value = '';
    // }

    // editCarButton(id) {
    //     const carr = cars.find((car) => car.id === id);  
    //     document.getElementById('marca').value = carr.marca;
    //     editingCar = carr;
    // }    
    getUser;
}