import React from "react";

export default props => {
   function situacao(imc) {
      if (imc <= 19) {
         return <h1>a baixo do peso</h1>;
      } else if (imc > 19 && imc <= 25) {
         return <h1>peso normal</h1>;
      } else return <h1>acima do peso</h1>;
   }

   function calcularIMC(peso, altura) {
      return peso / altura ** 2;
   }

   const imc = calcularIMC(props.peso, props.altura);

   return (
      <div>
         <h3>
            Sua altura é {props.altura}m e seu peso é {props.peso}kg
         </h3>
         <h3>Seu IMC é: {imc.toFixed(2)}</h3>
         {situacao(imc)}
      </div>
   );
};
