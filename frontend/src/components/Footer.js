import React from 'react';
import './css/Footer.css';
import FacebookIcon from './svg/facebook-square-brands.svg';
import GithubIcon from './svg/github-square-brands.svg';
import IgIcon from './svg/instagram-square-brands.svg';
import LinkedinIcon from './svg/linkedin-brands.svg';

export class Footer extends React.Component{
  render() {
    return (
        <div id="footer">
        <footer className="footer-distributed">       
                    <div className="footer-left">    
                    <img src="https://mir-s3-cdn-cf.behance.net/user/276/bd566661043453.597b8b4c68b4b.jpg" style={{width:"130px", border:"2px solid black"}}/>   
                        <h3>Thai zoom<span>Cop</span></h3>  
                        <p className="footer-links">
                            <a href="#" className="link-1">Home</a>                            
                            <a href="#">Blog</a>                      
                            <a href="#">Pricing</a>                       
                            <a href="#">About</a>                           
                            <a href="#">Faq</a>                           
                            <a href="#">Contact</a>
                        </p>        
                        <p className="footer-company-name">Design By Zoom Company © 2015</p>
                    </div>
        
                    <div className="footer-center">       
                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p><span>123 3/2 street</span> Ninh Kiều, Cần Thơ</p>
                        </div>        
                        <div>
                            <i className="fa fa-phone"></i>
                            <p>+84 0395996992</p>
                        </div>        
                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="mailto:support@company.com">nguyennhithai4620@gmail.com</a></p>
                        </div>       
                    </div>
        
                    <div className="footer-right">        
                        <p className="footer-company-about">
                            <span>About the company</span>
                            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                        </p>        
                        <div className="footer-icons">      
                            <a href="https://www.facebook.com/profile.php?id=100012416316231" target="_blank"><img src={FacebookIcon}></img></a>
                            <a href="https://github.com/nhithai4620" target="_blank"><img src={GithubIcon}></img></a>
                            <a href="https://www.instagram.com/nhithai46200/?fbclid=IwAR16w1ZijZZnIhMe7xTJQZnGbHsVgWSetx59cahfMvdkIJxMFmFiFSAdmB8" target="_blank"><img src={IgIcon}></img></a>
                            <a href="https://www.linkedin.com/in/nh%C4%A9-th%C3%A1i-nguy%E1%BB%85n-3997191b8/" target="_blank"><img src={LinkedinIcon}></img></a>      
                        </div>
                    </div>
        
                </footer>
                </div>
    );
  }
}

export default Footer;