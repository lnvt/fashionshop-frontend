import axios from "axios";

const url = "http://localhost:8080/api";

class PostService {

    retrieveAllPostService(){
        return axios.get(`${url}/post`);
    }

    retrievePostService(id){
        return axios.get(`${url}/post/${id}`);
    }

    updatePost(id, post){
        return axios.put(`${url}/post/${id}`, post);
    }

    createPost(post){        
        return axios.post(`${url}/post`, post);
    }
}

export default new PostService()