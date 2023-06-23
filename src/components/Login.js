import {Component} from "react";
import UserService from "../user-service";

export default class Login extends Component{
    constructor(props){
        super(props);
        this.service = new UserService();
        this.state={
            email : '',
            password : '',
            user : null
        }
    }

    handleInput = (e) =>{
        this.setState({
           [e.target.name]: e.target.value 
        });
    }

    onLogin(){
        this.setState({user: this.service.authenticate()});
        if(this.state.user){
            localStorage.setItem("USER", JSON.stringify(this.state.user));
        }
    }

    render(){
        return (
            <form>
                <label>Email: </label>
                <input name="email" onChange={this.handleInput} /> <br/>
                <label>Password: </label>
                <input type="password" name="password" onChange={this.handleInput} /> <br/>
                <button type="button" onClick={this.onLogin}>Login</button>
            </form>
        );
    }
}