import invitations from './invitations.js' 
import Print from './Print.js'
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
    //printSkills(data,idInvitation,email);
    const _printSkills=new Print();
    _printSkills.printSkills(data,idInvitation,email)
    })
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
function callInvitations(id){
const _invitations=new invitations();
_invitations.callInvitations(id);
}
callInvitations(id_user)

window.callSkills=callSkills;
window.change=change;
window.summit=summit;
window.callInvitations=callInvitations;
