import React from 'react';
import '../css/Admin.css';
import Dashboard from '../svg/clock-regular.svg';
import User from '../svg/users-solid.svg';
import Invoice from '../svg/file-invoice-solid.svg';
import Product from '../svg/shopping-cart-solid.svg';
import Trash from '../svg/trash.svg';
import Save from '../svg/check-solid.svg';
import Add from '../svg/plus-solid.svg';
import {DataContext} from '../Context';
import axios from 'axios';
export class Admin extends React.Component{
    static contextType = DataContext;
    state = {
        dash: true,
        pro: false,
        cus: false,
        invoice: false,
        product_sold: 0,
        revenue: 0,
        customer_total: 0,
        invoice_total: 0,
        best_customer: '',
        best_sale: '',
        delete_id: 0,
        products : this.context.products, 
        customers : this.context.customers,
    };


    onChangeDas =() =>{
        this.setState({dash:true, pro: false, cus: false,invoice:false});
    }

    onChangePro =() =>{
        this.setState({dash:false, pro: true, cus: false,invoice:false});
    }

    onChangeCus =() =>{
        this.setState({dash:false, pro: false, cus: true,invoice:false});
    }

    onChangeInvo =()=>{
        this.setState({dash: false, pro: false, cus: false, invoice: true})
    }

    async componentDidMount (){
        const res = await axios.get("/api/product_sold");
        const res1 = await axios.get("/api/revenue");
        this.setState({customer_total: this.context.customers.length});
        this.setState({invoice_total: this.context.bill.length});
        this.setState({product_sold: res.data.count});
        this.setState({revenue: res1.data.totals});
    }

    onDeleteProducts = id =>{
        this.context.remove(id);
        window.location.reload();
    }

    onDeleteCustomers = id =>{
        this.context.removecus(id);
        window.location.reload();
    }


    changePanel = () => {
        if (this.state.dash){
            return  (
            <div className="dashboard">
                <div className="dashboard-item">
                    <p>Products sold</p>
                    <p>{this.state.product_sold}</p>
                </div>
                <div className="dashboard-item">
                    <p>Revenue</p>
                    <p>{this.state.revenue} $</p>
                </div>
                <div className="dashboard-item">
                    <p>Customers</p>
                    <p>{this.state.customer_total}</p>
                </div>
                <div className="dashboard-item">
                    <p>Invoices</p>
                    <p>{this.state.invoice_total}</p>
                </div>
            </div>
            )      
        } else if(this.state.pro){
            return (
                <table className="product_admin_table">
                    <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Content</th>
                        <th>Price</th>
                    </tr>
                    </tbody>
                    {this.state.products.map(item =>(
                    <tbody key={item.pd_id}>
                    <tr >
                    <td><input type="text" value={item.pd_id} /></td>
                    <td><input type="text" value={item.pd_name} /></td>
                    <td><input type="text" value={item.pd_src} /></td>
                    <td><input type="text" value={item.pd_description} /></td>
                    <td><input type="text" value={item.pd_content}/></td>
                    <td><input type="text" value={item.pd_price} /></td>
                    <td><img src={Trash} style={{width:"20px" , paddingLeft:"8px"}} onClick={() =>this.onDeleteProducts(item.pd_id)}/></td>
                    </tr>
                    </tbody>
                    
                ))}
                </table>
            )
        }else if(this.state.cus){
            return(
                <div>
                    <table className="product_admin_table">
                    <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Sex</th>
                        <th>Birth</th>
                        <th>Point</th>
                        <th>Account</th>
                        <th>Password</th>
                    </tr>
                    </tbody>
                    {this.state.customers.map(item =>(
                    <tbody key={item.ctm_id}>
                    <tr >
                    <td><input type="text" value={item.ctm_id} style={{width:"20px"}}/></td>
                    <td><input type="text" value={item.ctm_name}/></td>
                    <td><input type="text" value={item.ctm_sex}/></td>
                    <td><input type="text" value={item.ctm_birth}/></td>
                    <td><input type="text" value={item.ctm_point}/></td>
                    <td><input type="text" value={item.ctm_account}/></td>
                    <td><input type="text" value={item.ctm_password}/></td>
                    <td><img src={Trash} style={{width:"20px" , paddingLeft:"8px"}} onClick={() =>this.onDeleteCustomers(item.ctm_id)}/></td>
                    </tr>
                    </tbody>
                    
                ))}
                </table>
                </div>
            )
        }else if(this.state.invoice){
            const {bill} = this.context;
            const {bill_details} = this.context;
            return(
                <div>
                    <div><h1>Bill</h1></div>
                    <table className="product_admin_table">
                        <tbody>
                        <tr>
                            <th>Bill id</th>
                            <th>Customer id</th>
                            <th>Date</th>
                        </tr>
                        </tbody>
                        {bill.map(item =>(
                        <tbody key={item.b_id}>
                        <tr >
                        <td><input type="text" value={item.b_id} style={{width:"150px"}}/></td>
                        <td><input type="text" value={item.b_customerid} style={{width:"200px"}}/></td>
                        <td><input type="text" value={item.b_date} style={{width:"200px"}}/></td>
                        </tr>
                        </tbody>
                        
                        ))}
                    </table>
                    <div><h1>Bill details</h1></div>
                    <table className="product_admin_table">
                        <tbody>
                        <tr>
                            <th>Bill id</th>
                            <th>Product id</th>
                            <th>Count</th>
                            <th>Total</th>
                        </tr>
                        </tbody>
                        {bill_details.map(item =>(
                        <tbody key={item.b_id}>
                        <tr >
                        <td><input type="text" value={item.bd_billid} style={{width:"150px"}}/></td>
                        <td><input type="text" value={item.bd_productid}/></td>
                        <td><input type="text" value={item.bd_count}/></td>
                        <td><input type="text" value={item.bd_total}/></td>
                        </tr>
                        </tbody>                       
                        ))}
                    </table>
                </div>
            )
        }
        
    }
    render(){
        if (this.context.user ==="Admin"){
        
        return (
            
            <div className="Admin" id="admin">
                <div className="Admin-panel">
                    <h3>Admin panel</h3>
                    <div className="Admin-list-panel">
                       <ul>
                           <li onClick={this.onChangeDas}><img src={Dashboard} style={{width:"20px" , paddingRight:"8px"}} />Dashboard</li>
                           <li onClick={this.onChangePro}><img src={Product} style={{width:"20px" , paddingRight:"8px"}} />Products</li>
                           <li onClick={this.onChangeCus}><img src={User} style={{width:"20px" , paddingRight:"8px"}}/>Customer</li>
                           <li onClick={this.onChangeInvo}><img src={Invoice} style={{width:"20px" , paddingRight:"8px"}}/>Invoice</li>
                       </ul>
                    </div>
                </div>
                <div className="Admin-content">
                    {
                        this.changePanel()
                    }
                </div>
            </div>
             

        );
        }
}
}

export default Admin;