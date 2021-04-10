import api from "./marvel-api"




export default {
    getCharacters(offset) {
        return api.get('/characters?offset=' + offset);

    },
    getComics() {
        return api.get('/comics');

    }
}