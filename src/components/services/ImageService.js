import axios from "axios";

const url = "http://localhost:8080/api";

class ImageService {

    retrieveAllImageService(){
        return axios.get(`${url}/image`);
    }
}

export default new ImageService()