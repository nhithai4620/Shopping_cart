import React from 'react';
import '../css/Signup.css';
import {Link} from 'react-router-dom';
import Login from './Login';
import axios from 'axios';
export class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = { name: '',
                    sex: '',
                    birth: '',
                    point: 0,
                    account: '',
                    password: '',
                    confirmPass: '',
                    signup: false    
        }; 
    }
    onchangeName = e => {
        this.setState({name: e.target.value});
    }

    onchangeSex = e => {
        this.setState({sex : e.target.value});
    }

    onchangeBirth = e => {
        this.setState({birth: e.target.value});
    }
    
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

    onchangeConfirmPassword = e =>{
        var pas = e.target.value;
        if (Number.isInteger(pas)){
            this.setState({
                confirmPass: pas.toString()
            });
        }
        this.setState({
            confirmPass: pas
        });       
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.password === this.state.confirmPass && this.state.name != "" && this.state.account != "Admin"){
            axios
            .post(`http://localhost:5000/api/signup`, this.state)
            .then(res =>{
                if (res.data == "success"){
                    alert('Signup Success, please go to login.');
                    this.setState({signup: true})
                }
                else {
                    alert('Please enter the correct syntax or account has been used');                   
                }
            })
            .catch(err => console.log(err));
        }
        else{
            alert("Confirm password incorrect");
        }
    };

    render(){
        if (this.state.signup == true){
            return (
                <Login/>
            )
        }
        else{
        return (
            <div className="signup">
                <h1>Sign up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="txt_field">
                        <input type="text" value={this.state.name} onChange={this.onchangeName} required />
                        <span></span>
                        <label>Full name</label>
                    </div>
                    <div className="txt_field">
                        <input type="text" value={this.state.sex} onChange={this.onchangeSex} required />
                        <span></span>
                        <label>Sex</label>
                    </div>
                    <div className="txt_field">
                        <input type="text" placeholder="            (yyyy-mm-dd)" value={this.state.birth} onChange={this.onchangeBirth} required />
                        <span></span>
                        <label>Birth</label>
                    </div>
                    <div className="txt_field">
                        <input type="text" value={this.state.account} onChange={this.onchangeAccount} required />
                        <span></span>
                        <label>User name</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" value={this.state.password} onChange={this.onchangePassword} minLength={5} required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" value={this.state.confirmPass} onChange={this.onchangeConfirmPassword} minLength={5} required />
                        <span></span>
                        <label>Confirm password</label>
                    </div>
                    <input type="submit" value="Submit" />
                    <div className="signup_link">
                        Have an account ? <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
        );
        }
    }
}

export default Signup;