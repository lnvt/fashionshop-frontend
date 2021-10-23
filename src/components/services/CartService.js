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

    updateCart(id, cart){
        return axios.put(`${url}/cart/${id}`, cart);
    }
}

export default new CartService()