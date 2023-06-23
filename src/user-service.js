import User from "./user";
export default class UserService{
    constructor(){
        this.users=new Array(User);
    }

    persist(user){
        this.users.push(user);
    }

    authenticate(email,password){
        return this.users.find(u=> u.email === email && u.password=== password);
    }


}