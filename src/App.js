import "./App.css";
import { create, all } from "mathjs";
import React, { Component } from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";
const config = {};
const math = create(all, config);
class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
      input: "",
    };
    this.setter = this.setter.bind(this);
    this.value = this.value.bind(this);
    this.valuate = this.valuate.bind(this);
    this.clearIt = this.clearIt.bind(this);
  }

  setter(el) {
    this.setState({
      input: this.state.input + el,
    });
  }

  valuate() {
    try {
      const ans = math.evaluate(this.state.input);
      this.setState({
        result: ans,
      });
    } catch (err) {
      alert(err)
     this.clearIt()
    }
  }

  value(e) {
    this.setter(e);
  }

  clearIt() {
    this.setState({
      result: "",
      input: "",
    });
  }

  render() {
   const  styleIt = {
      backgroundColor:"orange",
      color:"green"
       };
      return (
        <div className="calculator">
          <Screen result={this.state.result} input={this.state.input}></Screen>
          <div className="row">
            <Button label="." getNum={this.value}></Button>
            <Button label="0" getNum={this.value}></Button>
            <Button label="-" getNum={this.value}></Button>
            <Button label="=" getNum={this.valuate}></Button>
          </div>
          <div className="row">
            <Button label="9" getNum={this.value}></Button>
            <Button label="8" getNum={this.value}></Button>
            <Button label="7" getNum={this.value}></Button>
            <Button label="/" getNum={this.value}></Button>
          </div>
          <div className="row">
            <Button label="6" getNum={this.value}></Button>
            <Button label="5" getNum={this.value}></Button>
            <Button label="4" getNum={this.value}></Button>
            <Button label="*" getNum={this.value}></Button>
          </div>
          <div className="row">
            <Button label="3" getNum={this.value}></Button>
            <Button label="2" getNum={this.value}></Button>
            <Button label="1" getNum={this.value}></Button>
            <Button label="+" getNum={this.value}></Button>
          </div>

          <div className="row">
            <Button label="CLEAR" getNum={this.clearIt}></Button>
          </div>
        </div>
      );
    
  }
}

export default App;
