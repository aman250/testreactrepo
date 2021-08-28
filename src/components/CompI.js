import React, { useContext } from "react";
import { userNameContext, ageContext } from "../App";

const CompI = () => {
  const username = useContext(userNameContext);
  const age = useContext(ageContext);
  return (
    <>
      <div>
        Hello my name is {username} and my age is {age}
      </div>
    </>
  );
};

export default CompI;
