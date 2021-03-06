import React, {useState} from "react";
import Button from "./components/Button";
import "./App.scss"
import CheckBox from "./components/CheckBox";

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  }
  return (
    <>
      <div className="App">
      <div className="buttons">
        <Button size="large">Button</Button>
        <Button>Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">Button</Button>
        <Button color="gray">Button</Button>
        <Button color="gray" size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">Button</Button>
        <Button color="pink">Button</Button>
        <Button color="pink" size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" outline>Button</Button>
        <Button color="gray"outline>Button</Button>
        <Button color="pink" size="small" outline>Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>Button</Button>
        <Button size="large" color="gray" fullWidth>Button</Button>
        <Button size="large" color="pink" size="small" fullWidth 
          onClick={() => console.log("클릭")}
          onMouseEnter={() => console.log("들어왔다.")}
          onMouseOut={() => console.log("나갔다.")}
        >Button</Button>
      </div>
    </div>

    <div>
      <CheckBox onChange={onChange} checked={check}>다음 약관에 모두 동의</CheckBox>
    </div>

  </>
  );
}

export default App;
