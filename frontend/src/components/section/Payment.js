import React from 'react';
import '../css/Payment.css';
import {Link} from 'react-router-dom';
import {DataContext} from '../Context';

export class Payment extends React.Component{
    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }

    render(){
        const {cart,total,removeall} = this.context;
        var date = Date();
        if (cart.length ===0){
            return <h2 style={{textAlign: "center", paddingBottom:"155px"}}>Nothings Product</h2>
        }else{
        return (
            <div className="payment">
                <h1>Invoice</h1>
                <table className="table_bill">
                    <tr>
                        <td>Bill id : </td><td>1234567</td>
                    </tr>
                    <tr>
                        <td>Customer id : </td><td>B1809720</td>
                    </tr>
                    <tr>
                        <td>Date : </td><td>{date}</td>
                    </tr>
                    <tr>
                        <td>Point : </td><td>0 <span style={{fontSize:"10px",color:"red",opacity:"0.6", marginLeft:"2%"}}>(100 points will be discount 5% in bill)</span></td>
                    </tr>
                    <tr>
                        <td>Product : </td>
                    </tr>
                </table>

                <table className="table_product">
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                {cart.map(item =>(
                    <tr>
                    <td>{item.pd_name}</td>
                    <td>{item.pd_count}</td>
                    <td>{item.pd_price}</td>
                    <td>{item.count*item.pd_price}</td>
                    </tr>
                ))}
                </table>

                <p style={{color:"red",fontSize:"26px",width:"100", textAlign:"right",marginRight:"15%"}}>Total : {total} $</p>

                
                <button className="pay" onClick={()=>removeall()}>Pay</button>
            </div>
        );
        }
    }
}

export default Payment;