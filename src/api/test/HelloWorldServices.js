import axios from "axios";

class HelloWorldServices {
    executeHelloWorldService(){
        //console.log('execute service');
        return axios.get('http://localhost:8080/helloworld');
    }

    executeOtherStringService(){
        //console.log('execute service');
        return axios.get('http://localhost:8080/otherstring');
    }

    executeHelloVariableService(id){
        //console.log('execute service');
        return axios.get(`http://localhost:8080/hello/${id}`);
    }
}

export default new HelloWorldServices()