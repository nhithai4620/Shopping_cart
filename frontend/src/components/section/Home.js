import React from 'react';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick"; 
import '../css/Home.css';
import {Link} from "react-router-dom";
import {DataContext} from '../Context';


export class Home extends React.Component{
    static contextType = DataContext;
    render(){
        const {products} = this.context;
        var settings = {  
            dots: true, 
            infinite: true,  
            speed: 500,  
            // centerMode: true,  
            slidesToShow: 1,  
            slidesToScroll: 1 ,
            autoplay:true , 
            arrows:true , 
            autoplaySpeed:2700
            };  
            return (  
                <div id="home">
                  <div className="logan"><p><i>Free Shipping · Easy Returns · Best Price Guaranteed</i></p>
                </div> 
                <div className="slider">
                <Link to="/product">
                <Slider {...settings} >  
                <div className="wdt">  
                <img  className="img" src= {"https://cdn.shopify.com/s/files/1/0043/6840/0430/files/TWCHP20210119_GD_MightyWalk2_8a07b4c0-3ec9-4e56-a3e4-cfb6e15ee20e_1400x.jpg?v=1611255872"} className="img"/> 
                </div>  
                <div className="wdt">  
                <img className="img"   src= {"https://www.asics.com/dw/image/v2/BBTN_PRD/on/demandware.static/-/Sites-asics-us-Library/default/dw3c2a6575/asics_homepage_hero_desktop_widths2_022121.gif"} className="img"/>  
                </div>  
                <div className="wdt">  
                <img  className="img" src= {"https://cdn.wallpapersafari.com/14/56/dRaMmf.jpg"} className="img"/>  
                </div>  
                <div className="wdt"> 
                <img  className="img" src= {"https://conversevn.vn/wp-content/uploads/2020/09/Sieu-Meo-con-MiMi-1.png"} className="img"/>  
                </div >                  
                </Slider>
                </Link>
                </div>
                <div className="logan1">
                  <h3>Announcement</h3>
                  <p>Zoom company is pleased to announce that it has acquired the assets of The Zoom Company and is relaunching the ecommerce business under the brand name Zoom.  The website will continue to provide our valued customers the same great service and quality products you have come to expect; at this time all of the retail locations operated by the prior company are closed.</p>
                  <p>As a customer, your existing rewards points, certificates, user accounts, and gift cards will be eligible for use online.  The Zoom will continue to honor the return and warranty policy on all prior purchases online or at any retail location</p>
                  <p>We look forward to providing you with the best comfort shoes from around the world.</p>
                </div> 
                <div className="custom-content">
                  <div className="container">
                    <div className="flex-box-square"><img className="img-content"  src= {"https://www.asics.com/dw/image/v2/BBTN_PRD/on/demandware.static/-/Sites-asics-us-Library/default/dw59eeb211/asics_hp_large_tile_reviews_22121_A.jpg"}/></div>
                    <div className="container2">
                      <p className="text1">Top-Rated-Runners</p>
                      <p className="text2">Shop with confidence in styles raved about by runner just like you</p>
                    </div>
                  </div>
                </div>
                <div className="logan"><p><i>Wear your shoes, wear your confidence</i></p>
                </div>
                <div className="slider1">
                <Link to="/product">
                <Slider {...settings} >  
                <div className="wdt1">  
                <img  className="img1" src= {"https://sneakerbardetroit.com/wp-content/uploads/2020/03/Nike-Air-Force-1-Low-Triple-White-315115-112-Release-Date-4.jpg"}/>  
                </div>  
                <div className="wdt1">  
                <img className="img1"   src= {"https://shopgiayreplica.com/wp-content/uploads/2018/11/converse-1970s-black-high-replica.jpg"}/>  
                </div>  
                <div className="wdt1">  
                <img  className="img1" src= {"https://sneakernews.com/wp-content/uploads/2018/02/adidas-prophere-triple-white-release-info-3.jpg?w=1140"}/>  
                </div>  
                <div className="wdt1">  
                <img  className="img1" src= {"http://product.hstatic.net/1000265066/product/58_322bb4f7d1224ffea8c53085789627da_grande.jpg"}/>  
                </div >
                <div className="wdt1">  
                <img  className="img1" src= {"https://sneakerstudio.com/eng_pl_Womens-shoes-sneakers-adidas-Originals-Superstar-W-DB3346-18014_4.jpg"}/>  
                </div > 
                <div className="wdt1">  
                <img  className="img1" src= {"https://sneakernews.com/wp-content/uploads/2019/02/air-jordan-1-low-black-toe-553558-116-6.jpg"}/>  
                </div >                                                     
                </Slider>
                </Link>
                </div>
              </div>  
            );  
          } 
    }

export default Home;