import React from "react";

export default props => {
   function calculaIMC(peso, altura) {
      const result = peso / Math.pow(altura, 2);
      return result.toFixed(2);
   }

   return (
      <div>
         <button
            onClick={() =>
               props.notificarIMCPai(calculaIMC(props.peso, props.altura))
            }
         >
            Clique aqui para ver o IMC
         </button>
      </div>
   );
};
