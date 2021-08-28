import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./assets/styles/index.scss";
import CompA from "./components/CompA";

export const userNameContext = React.createContext();
export const ageContext = React.createContext();

function App() {
  var username = "Aman";
  var age = 26;

  return (
    <div className="App">
      <userNameContext.Provider value={username}>
        <ageContext.Provider value={age}>
          <CompA />
        </ageContext.Provider>
      </userNameContext.Provider>
    </div>
  );
}

export default App;
