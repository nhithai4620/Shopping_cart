import React, { Component } from 'react';
import axios from 'axios';


export const DataContext = React.createContext();

export class DataProvider extends Component {
    state = {
        products: [],
        cart: [],
        total : 0,
        user : '',
        infor : []

    };

    changeInfor = (inf) =>{
        this.setState({infor: inf});
    }

    changeUser = (cus) => {
        this.setState({ user: cus});
    }

    addCart = (id) => {
        const {products,cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id;
        })

        if(check){
            console.log(check);
            const data = products.filter(product => {
                return product.pd_id === id;
            })
            this.setState({cart: [...cart,...data]});
        }else{
            alert("The product has been added to cart.");
        }       
    };

    reduction = id =>{
        const {cart} = this.state;
        cart.forEach(item =>{
            if (item.pd_id === id){
                item.pd_count ===1 ? item.pd_count = 1 : item.pd_count -=1;
            }
        })
        this.setState({cart : cart});
        this.getTotal();
    };

    increase = id =>{
        const {cart} = this.state;
        cart.forEach(item =>{
            if (item.pd_id === id){
                item.pd_count +=1;
            }
        })
        this.setState({cart : cart});
        this.getTotal();
    };

    remove = id => {
        if (window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index)=>{
            if(item.pd_id === id){
                cart.splice(index,1);
            }
            })
            this.setState({cart : cart});
            this.getTotal();
        }        
    };

    removeall =()=>{
        var {cart} = this.state;
        cart = [];
        this.setState({cart: cart});
    }

    getTotal =() =>{
        const {cart} = this.state;
        const res = cart.reduce((prev, item) =>{
            return prev + (item.pd_price * item.pd_count)
        },0)
        this.setState({total: res})
    };

    componentDidUpdate(){
        localStorage.setItem('dataCart',JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal',JSON.stringify(this.state.total))
    };

    async componentDidMount (){
        const {data} = await axios.get("/api/products");
        console.log(data);
        this.setState({products: data});
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }

        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
    


    render(){
        const {products,cart,total,ad_acount,ad_pass,user,infor} = this.state;
        const {addCart, reduction,increase,remove,getTotal,removeall,changeUser,changeInfor} = this;
        return(
            <DataContext.Provider value={{products,addCart,cart, reduction,increase,remove,total,getTotal,removeall,ad_acount,ad_pass,changeUser,user,infor,changeInfor}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

