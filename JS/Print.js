export default class Print{ 

    printRequests(r){
        //const invitations=r[0];
        const onlyValidate=r[0].filter((element)=>element.total_skills==element.evaluated_skills)
        if(onlyValidate.length){
            let allPersons=document.getElementById('persons-to-give');
            allPersons.innerHTML='';
            
            onlyValidate.forEach(invitation=>{
                const info=r[1].find(element=>element.id==invitation.user_id)
                
                allPersons.innerHTML+=`<div class="card col-md-4 col-sm-12 m-2" style="width: 18rem;">
                                            <div class="card-body">
                                                <h5 class="card-title">${info.email}</h5>
                                                <p class="card-text">Te ha enviado una petición de feedback, pulsa el botón para realizarla.</p>
                                                <a href="#" onclick="callSkills('${invitation.id}','${info.email}')" class="btn btn-primary">FEEDBACK</a>
                                            </div>
                                        </div>`
                
            })
        }
        else
        alert("No tiene ninguna invitacion para dar feedback")
       }
}