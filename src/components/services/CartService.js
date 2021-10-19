import axios from "axios";

const url = "http://localhost:8080/api";
class CartService {

    retrieveAllCartService(){
        return axios.get(`${url}/cart`);
    }

    retrieveCartService(id){
        return axios.get(`${url}/cart/detail/${id}`);
    }

    deleteCartService(id){
        return axios.delete(`${url}/cart/${id}`);
    }
}

export default new CartService()