import React from "react";
import IMCCalc from "./IMCCalc";

let peso = 52;
let altura = 1.62;

export default (props) => (
   <div>
      <h1>
         O IMC para o peso: {peso}Kg e altura {altura}m é:
      </h1>
      <IMCCalc peso={peso} altura={altura} />
   </div>
);
