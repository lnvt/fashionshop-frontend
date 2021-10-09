import axios from "axios";

const url = "http://localhost:8080/api";

class SlideShowService {

    retrieveAllSlideShowService(){
        return axios.get(`${url}/slideshow`);
    }
}

export default new SlideShowService()