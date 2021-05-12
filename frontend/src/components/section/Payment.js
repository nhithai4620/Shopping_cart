import React from 'react';
import '../css/Payment.css';
import {Link} from 'react-router-dom';
import {DataContext} from '../Context';
import axios from 'axios';

export class Payment extends React.Component{
    static contextType = DataContext;
    state = {
        id: '',
        customerid: '',
        date: '',
        Cart: []
    };

    componentDidMount() {
        this.context.getTotal();
        var {infor,cart} = this.context;
        var uniq = 'PD' + (new Date()).getTime();
        var d = new Date();
        var date = d.getDate();
        var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
        var year = d.getFullYear();
        var dateStr =  year +"-"+ month + "-"+ date ;     
        this.setState({id : uniq});
        this.setState({customerid: infor.ctm_id});
        this.setState({date : dateStr});
        this.setState({Cart: cart});   
    }

    handleButton = () => {
        if (this.state.Cart != "" && this.state.infor != ""){
            axios
            .post(`http://localhost:5000/api/pay`, this.state)
            .then(res =>{
                if (res.data == "success"){
                    alert('Pay success');
                }
                else if (res.data=="error"){
                    alert('Error please try again');
                }
            })
            .catch(err => console.log(err));
        }
        else{
            alert("Error");
        }

        this.context.removeall();
    };

    render(){
        const {infor,cart,total,user} = this.context;
        console.log(this.state);
        if(user!= ''){
            if (cart.length ===0){
                return <h2 style={{textAlign: "center", paddingBottom:"155px"}}>Nothings Product</h2>
            }else{
            return (
                <div className="payment">
                    <h1>Invoice</h1>
                    <table className="table_bill">
                        <tbody>
                        <tr>
                            <td>Bill id : </td>
                            <td>{this.state.id}</td>
                        </tr>
                        
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Customer id : </td>
                            <td>{this.state.customerid}</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Date : </td>
                            <td>{this.state.date}</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Point : </td>
                            <td>{infor.ctm_point} <span style={{fontSize:"10px",color:"red",opacity:"0.6", marginLeft:"2%"}}>(100 points will be discount 5% in bill)</span></td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>Product : </td>
                        </tr>
                        </tbody>
                    </table>

                    <table className="table_product">
                        <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                        </tbody>
                    {cart.map(item =>(
                        <tbody key={item.pd_id}>
                        <tr >
                        <td>{item.pd_name}</td>
                        <td>{item.pd_count}</td>
                        <td>{item.pd_price}</td>
                        <td>{item.pd_count*item.pd_price}</td>
                        </tr>
                        </tbody>
                    ))}
                    </table>

                    <p style={{color:"red",fontSize:"26px",width:"100", textAlign:"right",marginRight:"15%"}}>Total : {total} $</p>

                    
                    <button className="pay" onClick={this.handleButton}>Pay</button>
                </div>
            );
            }
        }
        else {
            return <h1 style={{fontSize:"25px",textAlign:"center", padding:"100px"}}>Please Login</h1>
        }
    }
}

export default Payment;