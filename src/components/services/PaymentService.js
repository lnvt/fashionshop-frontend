import axios from "axios";

const url = "http://localhost:8080/api";

class PaymentService {

    retrieveAllPaymentService(){
        return axios.get(`${url}/payment`);
    }

    retrievePaymentService(id){
        return axios.get(`${url}/payment/${id}`);
    }

}

export default new PaymentService()