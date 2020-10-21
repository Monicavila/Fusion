import invitations from './invitations.js' 
const id_user=64;

function callSkills(idInvitation,email){
    fetch('https://matter-app.herokuapp.com/api/v1/skills', {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        
    })
    .then(response => response.json())
    .then(data => {
    printSkills(data,idInvitation,email);
    })
}

function printSkills(skills,invitationId,email){
    const allSkills=document.getElementById('skills');
    allSkills.innerHTML='';
    const starHtml=`<form onsubmit="event.preventDefault(),summit(${skills.length})" class="card col-md-12 col-sm-12 m-2" style="width: 18rem;" id="form-skills">
                    <h5 class="card-title">Invitación numero: ${invitationId}</h5>`;
    let middleHtml='';
    skills.forEach((skill,index) => {
        middleHtml+=`            <div >
                                    <div class="card-body">
                                        <h5 class="card-title">${skill.name}</h5>
                                        <h6 class="card-subtitle">${email}</h6>
                                        <p class="card-text">Califica de 1 a 5 .</p>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            
                                                <label id="loption1-${index}" for="option1-${index}"  class="btn btn-outline-primary m-1">
                                                <input onchange="change('1','${index}')" type="radio" name="option-${skill.id}-${invitationId}" id="option1-${index}" required >1 
                                                </label>
                                                <label id="loption2-${index}" for="option2-${index}" class="btn btn-outline-primary m-1">
                                                <input onchange="change('2','${index}')" type="radio" name="option-${skill.id}-${invitationId}" id="option2-${index}" required>2
                                                </label>
                                                <label id="loption3-${index}" class="btn btn-outline-primary m-1">
                                                <input onchange="change('3','${index}')" type="radio" name="option-${skill.id}-${invitationId}" id="option3-${index}" required>3
                                                </label>
                                                <label id="loption4-${index}" class="btn btn-outline-primary m-1">
                                                <input onchange="change('4','${index}')" type="radio" name="option-${skill.id}-${invitationId}" id="option4-${index}" required>4
                                                </label>
                                                <label id="loption5-${index}" class="btn btn-outline-primary m-1">
                                                <input onchange="change('5','${index}')" type="radio" name="option-${skill.id}-${invitationId}" id="option5-${index}"required>5
                                                </label>
                                          
                                        </div>
                                    </div>
                                </div>`
        
    });
    allSkills.innerHTML=starHtml+middleHtml+`<button type="submit" class="btn btn-primary m-2"> ENVIAR </button></form>`;
    
   
                                
}

function change(a,b){
   // console.log('a='+a+'b='+b)
        // document.getElementById('selection2').disabled=true;
        const dinamicClass="btn-primary";
        switch(a){
            case '1':
                
                document.getElementById(`loption1-${b}`).classList.add(dinamicClass)
                document.getElementById(`loption2-${b}`).classList.remove(dinamicClass)
                document.getElementById(`loption3-${b}`).classList.remove(dinamicClass)
                document.getElementById(`loption4-${b}`).classList.remove(dinamicClass)
                document.getElementById(`loption5-${b}`).classList.remove(dinamicClass)
                break;
            case '2':
                
                document.getElementById(`loption1-${b}`).classList.add(dinamicClass)
                document.getElementById(`loption2-${b}`).classList.add(dinamicClass)
                document.getElementById(`loption3-${b}`).classList.remove(dinamicClass)
                document.getElementById(`loption4-${b}`).classList.remove(dinamicClass)
                document.getElementById(`loption5-${b}`).classList.remove(dinamicClass)
                break;
            case '3':
                
                document.getElementById(`loption1-${b}`).classList.add(dinamicClass)
                document.getElementById(`loption2-${b}`).classList.add(dinamicClass)
                document.getElementById(`loption3-${b}`).classList.add(dinamicClass)
                document.getElementById(`loption4-${b}`).classList.remove(dinamicClass)
                document.getElementById(`loption5-${b}`).classList.remove(dinamicClass)
                break;
            case '4':
                
                document.getElementById(`loption1-${b}`).classList.add(dinamicClass)
                document.getElementById(`loption2-${b}`).classList.add(dinamicClass)
                document.getElementById(`loption3-${b}`).classList.add(dinamicClass)
                document.getElementById(`loption4-${b}`).classList.add(dinamicClass)
                document.getElementById(`loption5-${b}`).classList.remove(dinamicClass)
                break;
            case '5':
                
                document.getElementById(`loption1-${b}`).classList.add(dinamicClass)
                document.getElementById(`loption2-${b}`).classList.add(dinamicClass)
                document.getElementById(`loption3-${b}`).classList.add(dinamicClass)
                document.getElementById(`loption4-${b}`).classList.add(dinamicClass)
                document.getElementById(`loption5-${b}`).classList.add(dinamicClass)
                break;
        }
        
}
function summit(length){
    const values={invitationId:'',
                    skillsIds:[],
                    scores:[]}
    
    for(let i =0;i<length;i++){
        for(let j=1;j<6;j++){
            if(document.getElementById(`option${j}-${i}`).checked){
                values.scores.push(j);
                const param=document.getElementById(`option${j}-${i}`).name;
                values.skillsIds.push(param.slice(7,8))
                values.invitationId=(param.slice(9,11))
            }
        }
        
    }
      
    values.skillsIds.forEach((element,index) => {
        //console.log(values.scores[index]);
        
        data={score:String(values.scores[index])}
        fetch(`https://matter-app.herokuapp.com/api/v1/invitations/${values.invitationId}/skills/${element}`, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }) 
        .then(response =>{
            // response.json()})
            if(response.status==200){
                alert("los datos se guardaron correctamente")
                callInvitations(id_user);
            }
            else{
                alert("no se pudo guardar")
            }
        })
           
    });
    
    
}
const _invitations=new invitations();
_invitations.callInvitations(id_user);
window.callSkills=callSkills;