import "./Screen.css";

import React, { Component } from "react";

class Screen extends Component {
 

  render() {
    return (
      <div className="display">
          {this.props.children}
        <div className = "result">{this.props.result}</div>
        <div className="input">{this.props.input}</div>
      </div>
    );
  }
}

export default Screen;
