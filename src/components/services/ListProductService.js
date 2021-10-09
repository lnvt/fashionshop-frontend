import axios from "axios";

const url = "http://localhost:8080/api";

class ListProductService {

    retrieveAllListProductService(){
        return axios.get(`${url}/listproduct`);
    }
}

export default new ListProductService()