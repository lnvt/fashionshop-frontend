import axios from "axios";

const url = "http://localhost:8080/api";

class CodeSaleService {

    retrieveAllCodeSaleService(){
        return axios.get(`${url}/codesale`);
    }
}

export default new CodeSaleService()