import axios from "axios";

const url = "http://localhost:8080/api";

class PostService {

    retrieveAllPostService(){
        return axios.get(`${url}/post`);
    }

    retrievePostService(id){
        return axios.get(`${url}/post/${id}`);
    }

    updatePostService(id, post){
        return axios.put(`${url}/post/${id}`, post);
    }

    createPostService(post){        
        return axios.post(`${url}/post`, post);
    }

    deletePostService(id){
        return axios.delete(`${url}/post/${id}`);
    }
}

export default new PostService()