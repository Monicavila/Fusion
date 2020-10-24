export default class Print{ 

    printRequests(r){
        //const invitations=r[0];
        const onlyValidate=r[0].filter((element)=>element.total_skills!=element.evaluated_skills)
        if(onlyValidate.length){
            let allPersons=document.getElementById('persons-to-give');
            allPersons.innerHTML='';
            
            onlyValidate.forEach(invitation=>{
                const info=r[1].find(element=>element.id == invitation.user_id)
                let name=info.name;
                if (name){

                }
                else{
                    name='NN'
                }
                
                allPersons.innerHTML+=`<div class="shadow card bg-light col-md-6 col-sm-12 col-xs-12 m-2" style="width: 18rem; display: inline;">
                                            <div class="card-body">
                                                <h6 class=" card-title">${info.email}</h6>
                                                <p class="card-text text-justify">Te ha enviado una petición de feedback, pulsa el botón para realizarla.</p>
                                                <a href="javascript:void(0)" onclick="callSkills('${invitation.id}','${info.email}')" class="btn btn-info">FEEDBACK</a>
                                                </div>
                                        </div>`
            })
        }
        else {
            document.getElementById('skills').innerHTML= '';
            document.getElementById('persons-to-give').innerHTML= '';
            document.getElementById('persons-to-give').innerHTML += `<div class="card shadow border-dark mb-4" style="max-width: 20rem;">
                                                                        <div class="card-header">Sin invitaciones</div>
                                                                        <div class="card-body">
                                                                        <p class="card-text">No tienes solicitudes de feedback que atender.</p>
                                                                        </div>
                                                                    </div>`;
        //    alert("No tiene ninguna invitacion para dar feedback")
        } 
    }
   
    printSkills(skills,invitationId,email){
        const allSkills=document.getElementById('skills');
        allSkills.innerHTML='';
        const starHtml=`<form onsubmit="event.preventDefault(),summit(${skills.length})" class="shadow bg-info card col-md-12 col-sm-12 m-2" style="width: 18rem;" id="form-skills">
                        <h5 class="card-title text-white">Invitación numero: ${invitationId}</h5>`;
        let middleHtml='';
        skills.forEach((skill,index) => {
            middleHtml+=`            <div class="shadow" style="padding: 10px;">
                                        <div class="card-body bg-light" style="padding: 10px;">
                                            <h5 class="card-title">${skill.name}</h5>
                                            <h6 class="card-subtitle">${email}</h6>
                                            <p class="card-text">Califica de 1 a 5 .</p>
                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                
                                                    <label id="loption1-${index}" for="option1-${index}"  class="btn btn-outline-info m-1">
                                                    <input onchange="change('1','${index}')" type="radio" name="option-${skill.id}-${invitationId}" id="option1-${index}" required >1 
                                                    </label>
                                                    <label id="loption2-${index}" for="option2-${index}" class="btn btn-outline-info m-1">
                                                    <input onchange="change('2','${index}')" type="radio" name="option-${skill.id}-${invitationId}" id="option2-${index}" required>2
                                                    </label>
                                                    <label id="loption3-${index}" class="btn btn-outline-info m-1">
                                                    <input onchange="change('3','${index}')" type="radio" name="option-${skill.id}-${invitationId}" id="option3-${index}" required>3
                                                    </label>
                                                    <label id="loption4-${index}" class="btn btn-outline-info m-1">
                                                    <input onchange="change('4','${index}')" type="radio" name="option-${skill.id}-${invitationId}" id="option4-${index}" required>4
                                                    </label>
                                                    <label id="loption5-${index}" class="btn btn-outline-info m-1">
                                                    <input onchange="change('5','${index}')" type="radio" name="option-${skill.id}-${invitationId}" id="option5-${index}"required>5
                                                    </label>
                                              
                                            </div>
                                        </div>
                                    </div>`
            
        });
        allSkills.innerHTML=starHtml+middleHtml+`<button type="submit" class="btn btn-dark m-2"> ENVIAR </button></form>`;
        
       
                                    
    }
}