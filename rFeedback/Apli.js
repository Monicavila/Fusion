
function ready(){
    const urlFeedback = 'https://matter-app.herokuapp.com/api/v1/users/83/invitations';
    fetch(urlFeedback)
        .then((response) => response.json())
        .then((data) => printItemName(data))
}
// function nameUser(id){
//     console.log(id);
//     const urlNameUser = 'https://matter-app.herokuapp.com/api/v1/users/'+ id + '';
//     fetch(urlNameUser)
//         .then((response) => response.json())
//         .then((data) => takeName(data.name))
// }
// let nameItem = '';
// function takeName (n){
//     nameItem = n;
//     return nameItem;
// }
function printItemName(data){
    e = 0;
    let containerName = document.getElementsByClassName('content-Name')[0];   
    containerName.innerHTML = " ";
    data.forEach(d => {
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
