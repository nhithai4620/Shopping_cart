import React from 'react';
import '../css/Contact.css';
export class Contact extends React.Component{
    render(){
        const {colors} = this.props;
        return (
            <div className="contact">
                <div className="contact-text" id="contact">
                <h1>Contact</h1>
                Want to work together?  Get in touch!
                </div>
                <div className="contact-form" id="contact-form">
                    <form>
                        <input type="text" placeholder="Your Name" /><br />
                        <input type="text" placeholder="Your Email" /><br />
                        <textarea placeholder="Questions?"></textarea><br />
                        <input type="submit" value="Submit" className="button"/>
                    </form>
                </div>
                </div>        
        );
    }
}

export default Contact;