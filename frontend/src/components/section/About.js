import React from 'react';
import '../css/About.css';
export class About extends React.Component{
    render(){
        return (
            <div className="about" id="about">
                <h3>Welcome customer!</h3>
                <p> This website is created by Nguyễn Nhĩ Thái</p>
                <p> I am a student of Cần Thơ university</p>
                <p> This is a ecommerce website project which I created when I was learning the basic academic subject</p>
            </div>        
        );
    }
}

export default About;