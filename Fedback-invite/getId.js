export default class GetId {
    getId() {
        return JSON.parse(sessionStorage.getItem('id'))
    }
}