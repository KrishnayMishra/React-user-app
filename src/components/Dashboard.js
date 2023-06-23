import {Component} from "react";

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            user : new User()
        }
    }

    componentDidMount(){
        var data=JSON.parse(localStorage.getItem("USER"));
        this.setState({user : data});
    }

    render(){
        return(
            <table border="2">
                <tr><td>Name</td><td>{this.state.user.name}</td></tr>
                <tr><td>Email</td><td>{this.state.user.email}</td></tr>
                <tr><td>Password</td><td>{this.state.user.password}</td></tr>
            </table>
        );
    }
}

