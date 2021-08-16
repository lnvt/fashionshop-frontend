import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationSessionService from '../../homepage/test/AuthenticationSessionService.js';
import HelloWorldServices from '../../../../api/test/HelloWorldServices.js';



class TodosComponent extends Component {
    
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            todos: 
            [
                { id: 1, name:"Mercedes", status: true, targerDate: new Date()},
                { id: 2, name:"Toyota", status: true, targerDate: new Date() },
                { id: 3, name:"Mazda", status: true, targerDate: new Date() }
            ],

            messageServiceAPI: "",
        }
    }

    checkServices = () => {
        // HelloWorldServices.executeHelloWorldService()
        // .then( response =>  {
        //     console.log(response)    
        //     this.getDataFromCheckServices(response)})
        //.cacth();

        // HelloWorldServices.executeOtherStringService()
        // .then( response =>  {
        //     this.getDataFromCheckServices(response)})

         HelloWorldServices.executeHelloVariableService(this.props.match.params.name)
            .then( response =>  {this.getDataFromCheckServices(response)})    
            .catch( error => this.handleAPIError(error))
    }
 
    getDataFromCheckServices(response){
        console.log(response);
        this.setState  ({
            messageServiceAPI : response.data.message
        })
    }

    handleAPIError = (error) => {
        console.log(error.response);
        let errorMessage = "";
        if(error.message) errorMessage += error.message
        if(error.response && error.response.data)
        {
            errorMessage += error.response.data.message
        }
        this.setState({
            messageServiceAPI: error.response.data.message
        })
    }

    render() {
        const isUserLoggedIn = AuthenticationSessionService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return (
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>status</th>
                            <th>tagerDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo => 
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.name}</td>
                                        <td>{todo.status.toString()}</td>
                                        <td>{todo.targerDate.toString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <div>
                    <Link to="log-out" onClick= {AuthenticationSessionService.logout()}> Log out </Link>
                </div>
                <div>
                    <button onClick=  {this.checkServices}> Check service </button>
                </div>
                <div>
                    <h1>{this.state.messageServiceAPI}</h1>
                </div>
            </div>
        );
    }
}

export default TodosComponent;