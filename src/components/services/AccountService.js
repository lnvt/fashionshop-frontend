import axios from "axios";

const url = "http://localhost:8080/api";

class AccountService {

    retrieveAllAccountService(){
        return axios.get(`${url}/account`);
    }

    deleteAccountService(id){
        return axios.delete(`${url}/account/${id}`);
    }

    retrieveAccountService(id){
        return axios.get(`${url}/account/${id}`);
    }
}

export default new AccountService()