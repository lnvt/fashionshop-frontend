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

    updateAccount(id, account){
        return axios.put(`${url}/account/${id}`, account);
    }

    createAccount(account){
        return axios.post(`${url}/account`, account);
    }
}

export default new AccountService()