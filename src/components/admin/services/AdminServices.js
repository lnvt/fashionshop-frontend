import axios from "axios";

const API_URL = 'http://localhost:8080/api/admin';

class AdminServices {
    retrieveAllAccount(){
        return axios.get(`${API_URL}/account`);
    }

    deleteAccountById(id){
        return axios.delete(`${API_URL}/account/delete/${id}`);
    }
}

export default new AdminServices();