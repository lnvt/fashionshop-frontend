import axios from "axios";

const url = "http://localhost:8080/api";

class ProductService {

    retrieveAllProductService(){
        return axios.get(`${url}/product`);
    }

    retrieveProductService(id){
        return axios.get(`${url}/detail/product/${id}`);
    }

    retrieveProductDetailService(id){
        return axios.get(`${url}/detail/${id}`);
    }

    deleteProductService(id){
        return axios.delete(`${url}/product/${id}`);
    }

    updateProductService(id){
        return axios.put(`${url}/product/${id}`)
    }

    createProductService(product){
        return axios.post(`${url}/account`, product);
    }

}

export default new ProductService()