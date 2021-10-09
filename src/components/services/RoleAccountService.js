import axios from "axios";

const url = "http://localhost:8080/api";

class RoleAccountService {

    retrieveAllRoleAccountService(){
        return axios.get(`${url}/role-account`);
    }
}

export default new RoleAccountService()