import React, { useState, useEffect } from "react";
import Greet from "./Greet";

const Counter = (props) => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Neutral");

  const IncClickHandler = () => {
    var num = number;
    num = num + 1;
    setNumber(num);
    alert("number changed");
  };

  const DecClickHandler = () => {
    var num = number;
    num = num - 1;
    setNumber(num);
  };

  const pageLoad = () => {
    var name = "Aman";
    var age = 26;
    console.log(`My name is ${name} and I am ${age} years old`);
  };

  useEffect(() => {
    pageLoad();
  }, [name]);

  return (
    <>
      <div>
        <button onClick={DecClickHandler}>-</button>
        {number}
        <button onClick={IncClickHandler}>+</button>
        <h1 onClick={() => setName("Name Changed")}>{name}</h1>
      </div>
    </>
  );
};

export default Counter;
