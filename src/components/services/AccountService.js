import axios from "axios";

const url = "http://localhost:8080/api";

class AccountService {

    retrieveAllAccountService(){
        return axios.get(`${url}/account`);
    }
}

export default new AccountService()