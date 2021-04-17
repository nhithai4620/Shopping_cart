import React from 'react';

export class Colors extends React.Component{
    render(){
        const {colors} = this.props;
        return (
            <div className="colors">
                {colors.map((color,index) =>(
                                <button key={index} style={{background:color}}></button>
                            ))}
            </div>
        );
    }
}

export default Colors;