import axios from "axios";

const url = "http://localhost:8080/api";

class ProductService {

    retrieveAllProductService(){
        return axios.get(`${url}/product`);
    }

    retrieveProductService(id){
        return axios.get(`${url}/product/${id}`);
    }

    retrieveProductDetailService(id){
        return axios.get(`${url}/detail/${id}`);
    }
}

export default new ProductService()