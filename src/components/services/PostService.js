import axios from "axios";

const url = "http://localhost:8080/api";

class PostService {

    retrieveAllPostService(){
        return axios.get(`${url}/post`);
    }
}

export default new PostService()