import React from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/shopping-cart-solid.svg';
import {DataContext} from './Context';
import {Link} from 'react-router-dom';

export class Header extends React.Component{
    static contextType = DataContext;

    state ={
        toggle: false
    }
    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }
    logout = () =>{
        this.context.changeUser("");
    }

  render() {
    const {toggle} = this.state;
    const {cart,user} = this.context;
    if (user === "Admin"){
      return(
        <header>
          <div className="menu" onClick={this.menuToggle}> 
            <img src={Menu} alt="" width="20"/>
          </div>
          <div className="logo">
            <Link to="/"><img src="https://mir-s3-cdn-cf.behance.net/user/276/bd566661043453.597b8b4c68b4b.jpg" style={{display:"inline-block",width:"130px"}}/></Link>
            <p style={{display:"inline-block", paddingBottom:"20px"}}><Link to="/">Zoom's shoes</Link></p>
          </div>
          <nav>
            <ul className={toggle ? "toggle" : ""}>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/contact">Contact</Link></li>              
              <li><Link to="/about">About</Link></li>
              <li><Link to="/admin">Admin</Link></li>
              <li><Link to="./home" onClick={this.logout} >LOG OUT</Link></li>
              <li className="close" onClick={this.menuToggle}>
                  <img src={Close} alt="" width="20"/>
              </li>
            </ul>
          </nav>
        </header>
      );
    } else
    if (user!=''){
      return(
        <header>
          <div className="menu" onClick={this.menuToggle}> 
            <img src={Menu} alt="" width="20"/>
          </div>
          <div className="logo">
            <Link to="/"><img src="https://mir-s3-cdn-cf.behance.net/user/276/bd566661043453.597b8b4c68b4b.jpg" style={{display:"inline-block",width:"130px"}}/></Link>
            <p style={{display:"inline-block", paddingBottom:"20px"}}><Link to="/">Zoom's shoes</Link></p>
          </div>
          <nav>
            <ul className={toggle ? "toggle" : ""}>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/contact">Contact</Link></li>              
              <li><Link to="/about">About</Link></li>
              <li className="dropdown"><Link to="/customer">{user}</Link>
                    <Link to="./home" onClick={this.logout} >LOG OUT</Link> 
              </li>
              <li className="close" onClick={this.menuToggle}>
                  <img src={Close} alt="" width="20"/>
              </li>
            </ul>
            <div className="nav-cart">
                <span>{cart.length}</span>
                <Link to="/cart">
                <img src={CartIcon} alt="" width="20"></img>
                </Link>           
            </div>
          </nav>
        </header>
      );
    }
    else {
    return (
    <header>
      <div className="menu" onClick={this.menuToggle}> 
        <img src={Menu} alt="" width="20"/>
      </div>
      <div className="logo">
        <Link to="/"><img src="https://mir-s3-cdn-cf.behance.net/user/276/bd566661043453.597b8b4c68b4b.jpg" style={{display:"inline-block",width:"130px"}}/></Link>
        <p style={{display:"inline-block", paddingBottom:"20px"}}><Link to="/">Zoom's shoes</Link></p>
      </div>
      <nav>
          <ul className={toggle ? "toggle" : ""}>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/contact">Contact</Link></li>              
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login">Login / Register</Link></li>
              <li className="close" onClick={this.menuToggle}>
                  <img src={Close} alt="" width="20"/>
              </li>
          </ul>
          <div className="nav-cart">
                <span>{cart.length}</span>
                <Link to="/cart">
                <img src={CartIcon} alt="" width="20"></img>
                </Link>           
          </div>
 
      </nav>
    </header>
    );
    }
  }
}

export default Header;