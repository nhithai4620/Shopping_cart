import React from 'react';
import '../css/Login.css';
import {Link} from 'react-router-dom';
import {DataContext} from '../Context';
import Home from './Home';
import axios from 'axios';


export class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = { account: '',
                    password: ''
        }; 
    }   

    static contextType = DataContext;

    onchangeAccount = e =>{
        this.setState({
            account: e.target.value
        });
    }

    onchangePassword = e =>{
        var pas = e.target.value;
        if (Number.isInteger(pas)){
            this.setState({
                password: pas.toString()
            });
        }
        this.setState({
            password: pas
        });   
    }

    handleSubmit = e => {
        e.preventDefault();
        axios
          .post(`http://localhost:5000/api/login`, this.state)
          .then(res =>{
              if (res.data === 'Admin'){
                  this.context.changeUser("Admin");
              }
              else if (res.data === "False") {
                  alert("Wrong account or password");
              }
              else{
                this.context.changeInfor(res.data);
                this.context.changeUser(res.data.ctm_account);
              }
          })
          .catch(err => console.log(err));
    };


    render(){
        var {user} = this.context;
        if (user ==="Admin"){
            return(<Home/>);
        } else if (user != "") {
            return (<Home/>);
        }
        else{
        return (
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="txt_field">
                        <input className="account" type="text" value={this.state.account} onChange={this.onchangeAccount} required />
                        <span></span>
                        <label>User name</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" value={this.state.password} onChange={this.onchangePassword} required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="pass">Forgot password?</div>
                    <input type="submit" key="submit"/>
                    <div className="signup_link">
                        Not a member ? <Link to="/signup">Sign up</Link>
                    </div>
                </form>
            </div>
        );
        }
    }
}

export default Login;