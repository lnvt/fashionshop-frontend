import axios from "axios";

const url = "http://localhost:8080/api";

class MenuService {

    retrieveAllMenuService(){
        return axios.get(`${url}/menu`);
    }
}

export default new MenuService()