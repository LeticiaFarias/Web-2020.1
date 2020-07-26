import React from "react";

export default (props) => {
   let imc = props.imc;
   let res = "";
   if (imc <= 19) {
      res = <h1>a baixo do peso</h1>;
   } else if (imc > 19 && imc <= 25) {
      res = <h1>peso normal</h1>;
   } else res = <h1>acima do peso</h1>;

   return res;
};
