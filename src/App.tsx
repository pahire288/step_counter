import "./styles.css";
import Show from "./components/Show";
import Button from "./components/Button";
import { useState } from "react";

export default function App() {
  let Inc = "Increment";
  let dec = "Dcrement";
  let res = "Rest";

  const [value, setValue] = useState(0);

  const [selval, setSelval] = useState(0);
  let val = selval;

  function getselval(e) {
    setSelval(e.target.value);
  }

  function Increment() {
    setValue(Number(selval) + Number(value));
  }

  function Decrement() {
    setValue(Number(value) - Number(selval));
  }

  function Rest() {
    setValue(0);
  }
  return (
    <>
      <h2>🚀 React Counter App with Dropdown Selection</h2>
      <div className="App">
        <Show value={value} />
      </div>

      <div className="btn_box">
        <Button Inc={Inc} onClick={Increment} />
        <Button Inc={dec} onClick={Decrement} />
        <Button Inc={res} onClick={Rest} />
      </div>

      <select name="" id="list" onChange={getselval}>
        <option value="">select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
}
