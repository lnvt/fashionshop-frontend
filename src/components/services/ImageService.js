import axios from "axios";

const url = "http://localhost:8080/api";

class ImageService {

    retrieveAllImageService(){
        return axios.get(`${url}/image`);
    }

    retrieveImageService(id){
        return axios.get(`${url}/image/${id}`);
    }
}

export default new ImageService()