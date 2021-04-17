import React from 'react';
import {DataContext} from '../Context';
import {Link} from 'react-router-dom';
import '../css/Details.css';
import '../css/Cart.css';

export class Cart extends React.Component{
    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }

    render(){
        const {cart, increase, reduction,remove,total} = this.context;
        if (cart.length ===0){
            return <h2 style={{textAlign: "center", paddingBottom:"155px"}}>Nothings Product</h2>
        }else{
        return (
            <>
            {
                cart.map(item =>(
                    <div className="details cart" key={item._id}>
                        <img src={item.pd_src} alt=""/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.pd_name}</h2>
                                <span>${item.pd_price * item.pd_count}</span>
                            </div>
                            <p>{item.pd_description}</p>
                            <div className="amount">
                                <button className="count" onClick={() =>reduction(item.pd_id)} > - </button>
                                <span>{item.pd_count}</span>
                                <button className="count" onClick={() =>increase(item.pd_id)}> + </button>
                            </div>  
                        </div>
                        <div className="delete" onClick={()=>remove(item.pd_id)}>X</div>
                    </div>
                ))
            }
            <div className="total">
                <Link to="/payment">Payment</Link>
                <h3>Total : ${total}</h3>
            </div>
        </>
            );
        }
    }
}

export default Cart;