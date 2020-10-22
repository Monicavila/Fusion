export default class Information{ 
    
    callInfo(invitations,ids){
        return new Promise((resolve,reject)=>{  
          const values=[]
          const arrayReturn=[]
          ids.forEach(element=>{
              fetch(`https://matter-app.herokuapp.com/api/v1/users/${element}`, {
                  method: 'GET',
                  headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  },
                 
              })
              .then(response => response.json())
              .then(data => {
                 values.push({id:data.id,name:data.name,email:data.email})
                  if(ids.length==values.length){
                      arrayReturn.push(invitations);
                      arrayReturn.push(values);
                     resolve(arrayReturn);
                 }
              })
          })
        })
          // printRequests(invitations,names,emails);
      }
}