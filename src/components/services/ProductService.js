import axios from "axios";

const url = "http://localhost:8080/api";

class ProductService {

    retrieveAllProductService(){
        return axios.get(`${url}/product`);
    }
}

export default new ProductService()