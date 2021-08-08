import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationSessionService from '../../homepage/test/AuthenticationSessionService.js';




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
            ]
        }
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
            </div>
        );
    }
}

export default TodosComponent;