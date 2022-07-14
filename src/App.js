
import React from "react";
import { useState } from "react";

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>+{props.increment}</button>;
}

function Display(props) {
  return <div>{props.message}</div>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementButton = (incrementValue) =>
    setCounter(counter + incrementValue);

  return (
    <div>
      <Button onClickFunction={incrementButton} increment={1} />
      <Button onClickFunction={incrementButton} increment={5} />
      <Button onClickFunction={incrementButton} increment={10} />
      <Button onClickFunction={incrementButton} increment={100} />
      <Display message={counter} />
    </div>
  );
}



export default App;
