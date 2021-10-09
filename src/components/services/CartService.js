import axios from "axios";

const url = "http://localhost:8080/api";

class CartService {

    retrieveAllCartService(){
        return axios.get(`${url}/cart`);
    }
}

export default new CartService()