function ready(){
    const urlFeedback = `https://matter-app.herokuapp.com/api/v1/users/${sessionStorage.getItem('id')}/invitations`;
    fetch(urlFeedback)
        .then((response) => response.json())
        .then((data) => {printItemName(data)}) // --------
}
function printItemName(data){
    e = 1;
    let containerName = document.getElementsByClassName('content-Name')[0];   
    containerName.innerHTML = " ";
    if(data.length > 0){ // ----
        data.forEach(d => {     
            let b = d.skills;
            if( b.length > 1 ){
                let cardName = ` <div onclick="ready(), printItem(${e})" class="item-list">
                            <span> ${e} - ${d.user_invited.name} </span> 
                        </div>`;
                containerName.innerHTML += cardName;
            }else{
                let cardName = ` <div onclick="" class="item-list inactive">
                            <span> ${e} - ${d.user_invited.name} </span> 
                        </div>`;
                containerName.innerHTML += cardName;
            }
            e++;        
        });
    }else { // Z--------
        let cardName = ` <div onclick="" class="item-list inactive"> 
                            <span> :( - ¡Aún no envías tus invitaciónes de Feedback! </span> 
                        </div>`;
                containerName.innerHTML += cardName;
    } // --------Z   
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
    if(data.length > 0 ){ // ----
        setTimeout(( ) =>{
            if(data[i].skills.length > 0){
                data[i].skills.forEach( e => {
                    let item = itemFeedback(e); 
                    containerItem.innerHTML += item;                       
                });
            }else{
                notAnswer(containerItem);
            }
        },500);    
    }else{ // z---
        notAnswer(containerItem);
    } // ----Z
}

function notAnswer(d){
    let item = '';
    let active = ["active"];
    for (let i = 0; i < 3; i++){
        item += `<div class="carousel-item ${active[i]}">
        <img src="photo_${i+1}.jpg" class="d-block w-100" alt="photo_${i}" title="test">
        <div class="carousel-caption d-none d-md-block line">
            <h3> En espera de un Feedback </h3>
            <span class="material-icons iconDisabled"> military_tech </span>
            <span class="material-icons iconDisabled"> military_tech </span>
            <span class="material-icons iconDisabled"> military_tech </span>
            <span class="material-icons iconDisabled"> military_tech </span>
            <span class="material-icons iconDisabled"> military_tech </span>
        </div>
    </div>`;    
    }
    d.innerHTML += item;                       
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