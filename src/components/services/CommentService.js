import axios from "axios";

const url = "http://localhost:8080/api";

class CommentService {

    retrieveAllCommentService(){
        return axios.get(`${url}/comment`);
    }

    deleteCommentService(id){
        return axios.delete(`${url}/comment/${id}`);
    }

    createCommentService(comment){        
        return axios.post(`${url}/comment`, comment);
    }

}

export default new CommentService()