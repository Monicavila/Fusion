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
            const idsArray=[];
            data.forEach(element=>idsArray.push(element.user_id))
            _info.callInfo(data,idsArray)
            .then((r)=>_print.printRequests(r))
        })
      //  })
    }

}