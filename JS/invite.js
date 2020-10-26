export default class Invite {
    constructor (id) {
        this.id=id;
    }
    invite() {
        const userToInvite = { email: document.getElementById('email').value }
        fetch(`https://matter-app.herokuapp.com/api/v1/users/${this.id}/invite`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 'Acept': 'application/json'
            },
            body: JSON.stringify(userToInvite)
        })
        .then((response)=>response.json())
        this.resetForm();
    }
    resetForm() {
        document.getElementById('form-invite').reset();
    }
}
