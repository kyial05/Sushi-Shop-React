import React from "react";
import "./App.css";
import { Sushi } from "./Components/Main";
import { Dat } from "./Components/Main/data";

export const App = () => {
  return (
    <div className="App">
      {Dat.map((el, id) => {
        return <Sushi el={el} id={id} />;
      })}
    </div>
  );
};
