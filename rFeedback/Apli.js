
    const urlfeedback = 'https://matter-app.herokuapp.com/api/v1/invitations/1/feedback';
    fetch(urlfeedback)
        .then((response) => response.json())
        .then((data) => printFeedback(data[0]))

function printFeedback(data){
    let containerItem = document.getElementsByClassName('carousel-inner')[0];
    let item = itemFeedback(data.name, data.pivot.score); 
    containerItem.innerHTML += item;               
}

function itemFeedback (d1, d2){
    let valueItem = '';
    let img = 0;
    let active = '';
    if(d1 == "Comunicación"){
        for(let i=0; i < d2; i++){
            valueItem += '<span class="material-icons"> record_voice_over </span>';
        }
        let Residue = 5 - d2;
        for(let i=0; i < Residue; i++){
            valueItem += '<span class="material-icons iconDisabled"> record_voice_over </span>';
        }
        img = 1;
        active = "active";
    }else if(d1 == "empatía"){
        for(let i=0; i < d2; i++){
            valueItem += '<span class="material-icons"> self_improvement </span>';
        }
        let Residue = 5 - d2;
        for(let i=0; i < Residue; i++){
            valueItem += '<span class="material-icons iconDisabled"> self_improvement </span>';
        }
        img = 2;
        active = " ";
    }else{
        for(let i=0; i < d2; i++){
            valueItem += '<span class="material-icons"> military_tech </span>';
        }
        let Residue = 5 - d2;
        for(let i=0; i < Residue; i++){
            valueItem += '<span class="material-icons iconDisabled"> military_tech </span>';
        }
        img = 3;
        active = " ";
    }
    let item = `<div class="carousel-item ${active}">
                <img src="photo_${img}.jpg" class="d-block w-100" alt="photo_${img}" title="${d1}">
                <div class="carousel-caption d-none d-md-block line">
                    <h5> ${d1} </h5>
                    ${valueItem}
                </div>
            </div>`;
    return item;
}
