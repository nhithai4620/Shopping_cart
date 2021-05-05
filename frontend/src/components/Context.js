import React, { Component } from 'react';
import axios from 'axios';

export const DataContext = React.createContext();

export class DataProvider extends Component {
    state = {
        products: [],
        customers: [],
        bill: [],
        bill_details: [],
        cart: [],
        total : 0,
        user : localStorage.getItem('dataUser'),
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
        var data = [id];
        axios
        .post(`http://localhost:5000/api/delete_product`, data)
        .then(res =>{
            console.log(res.data);
            if (res.data = "true"){
                alert("Success");
            }
            else {
                alert("error");
            }
        })
        .catch(err => console.log(err));     
    };

    removecus = id => {
        var data = [id];
        axios
        .post(`http://localhost:5000/api/delete_customer`, data)
        .then(res =>{
            console.log(res.data);
            if (res.data = "true"){
                alert("Success");
            }
            else {
                alert("error");
            }
        })
        .catch(err => console.log(err));     
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
        localStorage.setItem('dataUser',this.state.user)
    };

    async componentDidMount (){
        const res1 = await axios.get("/api/products");
        const res2 = await axios.get("/api/customers");
        const res3 = await axios.get("/api/bill");
        const res4 = await axios.get("/api/bill_details")

        this.setState({products: res1.data});
        this.setState({customers: res2.data});
        this.setState({bill: res3.data});
        this.setState({bill_details : res4.data});


        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }

        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }

        const dataUser = localStorage.getItem('dataUser');
        console.log(dataUser);
        if(dataUser !== null){
            this.setState({user: dataUser});
        }

    }
    
    render(){
        const {products,customers,bill,bill_details,cart,total,ad_acount,ad_pass,user,infor} = this.state;
        const {addCart, reduction,increase,remove,removecus,getTotal,removeall,changeUser,changeInfor} = this;
        return(
            <DataContext.Provider value={{products,addCart,cart, reduction,increase,remove,removecus,total,getTotal,removeall,ad_acount,ad_pass,changeUser,user,infor,changeInfor, customers,bill,bill_details}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

