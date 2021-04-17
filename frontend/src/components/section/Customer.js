import React from 'react';
import '../css/Customer.css';
import {DataContext} from '../Context';
import axios from 'axios';



export class Customer extends React.Component{
    static contextType = DataContext;
    constructor(props) {
        super(props);
        this.state = {
            id : 0, 
            name : "",
            sex : "",
            birth : "",
            point : 0,
            account : "",
            password : "",
            confirmpass: ""
        };
    }

    setStateAll (infor){
        this.setState({id: infor.ctm_id});
        this.setState({name: infor.ctm_name});
        this.setState({sex : infor.ctm_sex});
        this.setState({birth: infor.ctm_birth});
        this.setState({point: infor.ctm_point});
        this.setState({account: infor.ctm_account});
        this.setState({password: infor.ctm_password});
    }

    componentDidMount (){
        this.setStateAll(this.context.infor);
    }
    onchangeName = e => {
        this.setState({name: e.target.value});
    }

    onchangeSex = e => {
        this.setState({sex: e.target.value});
    }

    onchangeBirth = e => {
        this.setState({birth: e.target.value});
    }
    
    onchangeAccount = e =>{
        this.setState({account: e.target.value});
    }

    onchangePassword = e =>{
        var pas = e.target.value;
        if (Number.isInteger(pas)){
            this.setState({password: pas.toString()});
        }
        else{
            this.setState({password: pas});
        }
        
    }

    onchangeConfirmPassword = e =>{
        var pas = e.target.value;
        if (Number.isInteger(pas)){
            this.setState({confirmpass: pas.toString()});
        }
        else{
            this.setState({confirmpass: pas});
        }
        
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.password === this.state.confirmpass && this.state.name != "" && this.state.account != "Admin"){
            axios
            .post(`http://localhost:5000/api/changeinfor`, this.state)
            .then(res =>{
                if (res.data == "success"){
                    alert('Change your information success');
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
        return (
            <div className="customer" id="customer">
                <div className="testbox">
                    <form onSubmit={this.handleSubmit}>
                        <div className="banner">
                        <h1>Information form</h1>
                        </div>
                        <h2>Infor Details</h2>
                        <div className="item">
                        <p>Name</p>
                        <div className="item">
                            <input type="text" value={this.state.name} onChange={this.onchangeName} />
                        </div>
                        </div>
                        <div className="item" >
                        <p>Sex</p>
                        <input type="text"  value={this.state.sex} onChange={this.onchangeSex}/>
                        </div>
                        <div className="item">
                        <p>Birthday</p>
                        <input type="date"  value={this.state.birth} onChange={this.onchangeBirth}/>
                        </div>
                        <div className="item">
                        <p>Point : {this.state.points}</p>
                        </div>
                        <div className="item">
                        <p>Account</p>
                        <input type="text"  value={this.state.account} onChange={this.onchangeAccount} />
                        </div>
                        <div className="item">
                        <p>Password</p>
                        <input type="password" value={this.state.password} onChange={this.onchangePassword}/>
                        </div>
                        <div className="item">
                        <p>ConfirmPassword</p>
                        <input type="password" value={this.state.confirmpass} onChange={this.onchangeConfirmPassword} />
                        </div>
                        <div className="btn-block">
                        <button type="submit" href="/">Change</button>
                        </div>
                    </form>
                </div>
            </div>        
        );
    }
}

export default Customer;