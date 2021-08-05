import "./Button.css";

import React, { Component } from 'react'

class Button extends Component {

    render(){
        return(
            
           <div className = "button-wrapper">
               <button className = "button"  onClick = {() =>this.props.getNum(this.props.label)}>{this.props.label}</button>
           </div>
        );
    }
}

export default Button
