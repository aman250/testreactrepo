import React from "react";
import CompG from "./CompG";
import { userNameContext, ageContext } from "../App";

const CompC = () => {
  return (
    <div>
      <CompG />
      <userNameContext.Consumer>
        {(username) => {
          return (
            <ageContext.Consumer>
              {(age) => {
                return (
                  <div>
                    Component C uses username - {username} and age - {age}
                  </div>
                );
              }}
            </ageContext.Consumer>
          );
        }}
      </userNameContext.Consumer>
    </div>
  );
};

export default CompC;
