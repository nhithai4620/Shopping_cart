import React from 'react';
import {Link} from "react-router-dom";
import {DataContext} from '../Context';
import '../css/Products.css';


export class Products extends React.Component{

    static contextType = DataContext;
    render(){
        const {products} = this.context;
        return(
        <div id="product">
            {
                products.map(product =>(
                    <div className="card" key={product.pd_id}>
                        <Link to={`/product/${product.pd_id}`}>
                            <img src={product.pd_src} alt="thai" className="img-product"/>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/product/${product.pd_id}`}>{product.pd_name}</Link>
                            </h3>
                            <span>${product.pd_price}</span>
                            <p>{product.pd_description}</p>
                            <button onClick={()=>this.context.addCart(product.pd_id)}>
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
        )
    }
}

export default Products;