// feedback
// -> getALl()
// ui
// -> printFeedback(feedback)
// user
// ->loggeIn

// const ui = new UI();
// const user = new user();
// user.loggedInd();
// const feedBackObject = new feedBack()
// const feedback = feedBackObject.getAll(user.loggedIn);
// ui.printFeedback(feedback)


function ready(){
    const urlFeedback = 'https://matter-app.herokuapp.com/api/v1/users/83/invitations';
    fetch(urlFeedback)
        .then((response) => response.json())
        .then((data) => {printItemName(data); /*nameUser(data)*/})
}
// function nameUser(data){
//     const test = data;
//     let nameUser = [ ];
//     return new Promise((resolve, reject) => {
//         data.forEach(d => {
//             const urlNameUser = 'https://matter-app.herokuapp.com/api/v1/users/'+ d.user_invited_id + '';
//             fetch(urlNameUser)
//                 .then((response) => response.json())
//                 .then((data) => nameUser.push(data))    
//         });
//         resolve(joint(data, nameUser))
//     }) // nameUser.forEach( n => { console.log(test[n]) });
// }
// function joint(data, user){
//     let jointName = [ ];
//     let element;
//     let newName = 0;
//     console.log(data);
//     console.log(user);
    


//     setTimeout(( ) =>{
//         for (let i = 0; i < data.length; i++) {
//             do{
//                 if( user[newName]["id"] == data[i].user_invited_id){
//                     jointName.push(user[newName].name);
//                     user.splice(newName, 1);
//                     break;
//                 }
//                 newName++;
//             }while(newName == data.length)
//         }
//     },500);
//     console.log(jointName);
    

// }





function printItemName(data){
    e = 0;
    let containerName = document.getElementsByClassName('content-Name')[0];   
    containerName.innerHTML = " ";
        data.forEach(d => {     
            // let name = nameUser(d.user_invited_id)
            //.then((response) => {
              //  console.log(response, d.user_invited_id)
                let b = d.skills;
                if( b.length > 1 ){
                    let cardName = ` <div onclick="ready(), printItem(${e})" class="item-list">
                                <span> ${e} - ${d.user_invited_id} </span> 
                            </div>`;
                    containerName.innerHTML += cardName;
                }else{
                    let cardName = ` <div onclick="" class="item-list inactive">
                                <span> ${e} - ${d.user_invited_id} </span> 
                            </div>`;
                    containerName.innerHTML += cardName;
                }
                e++;
            // });       
                
                
        });
    
    printFeedback(data)
}

let validItem = 0;
function printItem(value){
    validItem = value;
    return validItem;
}

function printFeedback(data){
    let i = validItem;
    let containerItem = document.getElementsByClassName('carousel-inner')[0];
    containerItem.innerHTML = " ";
    setTimeout(( ) =>{
        data[i].skills.forEach( e => {
            let item = itemFeedback(e); 
            containerItem.innerHTML += item;                       
        });
    },500);
}

function itemFeedback (skill){
    let name = skill.name;
    let score = skill.pivot.score;
    let valueItem = '';
    let img = 0;
    let active = '';
    if(name == "Comunicación"){
        for(let i=0; i < score; i++){
            valueItem += '<span class="material-icons"> record_voice_over </span>';
        }
        let Residue = 5 - score;
        for(let i=0; i < Residue; i++){
            valueItem += '<span class="material-icons iconDisabled"> record_voice_over </span>';
        }
        img = 1;
        active = "active";
    }   else if(name == "Empatía"){
            for(let i=0; i < score; i++){
                valueItem += '<span class="material-icons"> self_improvement </span>';
            }
            let Residue = 5 - score;
            for(let i=0; i < Residue; i++){
                valueItem += '<span class="material-icons iconDisabled"> self_improvement </span>';
            }
            img = 2;
            active = " ";
        }else{
                for(let i=0; i < score; i++){
                    valueItem += '<span class="material-icons"> military_tech </span>';
                }
                let Residue = 5 - score;
                for(let i=0; i < Residue; i++){
                    valueItem += '<span class="material-icons iconDisabled"> military_tech </span>';
                }
                img = 3;
                active = " ";
            }
let item = `<div class="carousel-item ${active}">
            <img src="photo_${img}.jpg" class="d-block w-100" alt="photo_${img}" title="${name}">
            <div class="carousel-caption d-none d-md-block line">
                <h5> ${name} </h5>
                ${valueItem}
            </div>
        </div>`;
return item;
}

ready();
