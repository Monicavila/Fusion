import Information from './Information.js';
import Print from './Print.js';
export default class Invitations{

    callInvitations(id){
        const _info=new Information(); 
        const _print=new Print();
       // return new Promise((resolve,reject)=>{
            fetch(`https://matter-app.herokuapp.com/api/v1/users/${id}/feedback-invitations`, {
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
           
        })
        .then(response => response.json())
        .then(data => {
            if(data.length){
            const idsArray=[];
            data.forEach(element=>idsArray.push(element.user_id))
            _info.callInfo(data,idsArray)
            .then((r)=>_print.printRequests(r))
            }else{
                document.getElementById('skills').innerHTML= '';
                document.getElementById('persons-to-give').innerHTML= '';
                document.getElementById('persons-to-give').innerHTML +=    `<div class="card shadow border-dark mb-3" style="max-width: 20rem;">
                                                                                <div class="card-header">Sin invitaciones</div>
                                                                                <div class="card-body">
                                                                                <p class="card-text">No tienes solicitudes de feedback que atender.</p>
                                                                                </div>
                                                                            </div>`;
            }
            
        })
      //  })
    }

}