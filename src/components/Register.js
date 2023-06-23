import {Component} from "react";
import UserService from "../user-service";
import User from "../user";

export default class Register extends Component{
    constructor(props){
        super(props);
        this.service = new UserService();
        this.user = new User;
    }

    handleInput = (e) =>{
        this.setState({
           [e.target.name]: e.target.value 
        });
    }

    onRegister(){
        this.service.persist(this.state.user);
    }

    render(){
        return (
            <form>
                <label>Name: </label>
                <input name="name" onChange={this.handleInput} /> <br/>
                <label>Email: </label>
                <input name="email"  onChange={this.handleInput} /> <br/>
                <label>Password:</label>
                <input type="password" name="password" onChange={this.handleInput} /> <br/>
                <button type="button" onClick={this.onRegister}>Register</button>
            </form>
        );
    }

}