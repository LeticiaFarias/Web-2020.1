import React from "react";

export default (props) => {
   return (
      <div>
         <h2> Nome: {props.nome}</h2>
         <h2> Curso: {props.curso} </h2>
         <h2> Cidade de origem: {props.cidadeDeOrigem} </h2>
      </div>
   );
};
