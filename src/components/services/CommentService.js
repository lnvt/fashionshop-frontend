import axios from "axios";

const url = "http://localhost:8080/api";

class CommentService {

    retrieveAllCommentService(){
        return axios.get(`${url}/comment`);
    }
}

export default new CommentService()