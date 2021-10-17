import axios from "axios";

const url = "http://localhost:8080/api";

class ListProductService {

    retrieveAllListProductService(){
        return axios.get(`${url}/listproduct`);
    }

    retrieveListProductService(id){
        return axios.get(`${url}/listproduct/${id}`);
    }
}

export default new ListProductService()