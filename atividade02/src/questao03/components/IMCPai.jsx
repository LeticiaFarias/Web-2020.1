import React from "react";
import IMCFilho from "./IMCFilho";

export default props => {
   const msgRecebida = msg => alert(`O IMC é: ${msg}`);
   return (
      <div>
         <IMCFilho altura={1.7} peso={62} notificarIMCPai={msgRecebida} />
      </div>
   );
};
