import React from 'react';
import {DataContext} from '../Context';
import {Link} from 'react-router-dom';
import '../css/Details.css';

export class Details extends React.Component{
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            console.log(this.props.match.params.id);
            console.log(res);
            const data = res.filter(item => {
                return item.pd_id == this.props.match.params.id;
            })
            this.setState({product:data})
        }
    };

    componentDidMount() {
        this.getProduct();
    }


    render(){
        const {product} = this.state;
        const {addCart} = this.context;
        return(            
        <>
            {
                product.map(item =>(
                    <div className="details" key={item.pd_id}>
                        <img src={item.pd_src} alt="" style={{width:"100%",height:"100%"}}/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.pd_name}</h2>
                                <span>${item.pd_price}</span>
                            </div>
                            <p>{item.pd_description}</p>
                            <p>{item.pd_content}</p>
                            <Link to="/cart" className="cart" onClick={()=> addCart(item.pd_id)}>
                                Add to cart
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
        )
    }
}

export default Details;