import "./App.css";
import Button from "./comps/button";
import Display from "./comps/display";
import { useState } from "react";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

function App() {
  const [Label, setLabel] = useState("");
  const [ans, setAns] = useState("");

  const getLabel = (e) => {
    let innerValue = e.target.attributes.label.value;
    console.log(innerValue);
    setLabel(Label + innerValue);
  };

  const cancelLabel = () =>{
    setLabel('');
    setAns('');
  };

  const evalLabel = () => {
    try {
    let answ = math.evaluate(Label);

      setAns(answ);
    } catch (err) {
      console.log(err.message);
      setAns("ERROR");
      setLabel('');
    }
  };

  const delLabel = () =>{
    console.log(Label)
    console.log(typeof(Label))
    let newTrunc = Label.slice(0, -1);
    console.log(newTrunc);
    setLabel(newTrunc);
  };

 

  return (
    <div className="App">
      <div className="calculator">
        <Display Label={Label} ans={ans}></Display>

        <div className="row">
          <Button label="9" getLabel={(el) => getLabel(el)}></Button>
          <Button label="8" getLabel={(el) => getLabel(el)}></Button>
          <Button label="7" getLabel={(el) => getLabel(el)}></Button>
          <Button label="/" getLabel={(el) => getLabel(el)}></Button>
        </div>
        <div className="row">
          <Button label="6" getLabel={(el) => getLabel(el)}></Button>
          <Button label="5" getLabel={(el) => getLabel(el)}></Button>
          <Button label="4" getLabel={(el) => getLabel(el)}></Button>
          <Button label="+" getLabel={(el) => getLabel(el)}></Button>
        </div>
        <div className="row">
          <Button label="3" getLabel={(el) => getLabel(el)}></Button>
          <Button label="2" getLabel={(el) => getLabel(el)}></Button>
          <Button label="1" getLabel={(el) => getLabel(el)}></Button>
          <Button label="-" getLabel={(el) => getLabel(el)}></Button>
        </div>
        <div className="row">
          <Button label="0" getLabel={(el) => getLabel(el)}></Button>
          <Button label="C"  getLabel={(el) => cancelLabel(el)}></Button>
          <Button label="=" getLabel={(el) => evalLabel(el)}></Button>
          <Button label="<-" getLabel={(el) => delLabel(el)}></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
