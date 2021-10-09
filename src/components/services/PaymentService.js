import axios from "axios";

const url = "http://localhost:8080/api";

class PaymentService {

    retrieveAllPaymentService(){
        return axios.get(`${url}/payment`);
    }
}

export default new PaymentService()