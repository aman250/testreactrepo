import React from "react";

const Greet = (props) => {
  const GreetClickHandler = () => {
    alert("Welcome " + props.name);
  };
  return (
    <>
      <div>
        <h1>
          Hi {props.name} your age is {props.age}
        </h1>
        <button type="submit" onClick={GreetClickHandler}>
          Greet
        </button>
      </div>
    </>
  );
};

export default Greet;
