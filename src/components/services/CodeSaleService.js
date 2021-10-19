import axios from "axios";

const url = "http://localhost:8080/api";

class CodeSaleService {

    retrieveAllCodeSaleService(){
        return axios.get(`${url}/codesale`);
    }

    deleteCodeSaleService(id){
        return axios.delete(`${url}/codesale/${id}`);
    }

    createCodeSale(codesale){
        return axios.post(`${url}/codesale`, codesale);
    }

    

}

export default new CodeSaleService()