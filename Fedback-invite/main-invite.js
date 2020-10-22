import GetId from './getId.js'
import Invite from './invite.js'
document.getElementById('form-invite').addEventListener('submit', (event)=>{
    event.preventDefault();
    const getIdUser=new GetId()
    const idStorage=getIdUser.getId()
    const inviteUser=new Invite(idStorage)
    inviteUser.invite();
})