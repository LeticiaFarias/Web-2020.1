import React from "react";
import Turma2 from "./Turma2"
export default props => (
   <div>
      <h2> Curso: {props.curso} </h2>
      <Turma2 turma="Fundamentos de Programação" /> 
          
      <Turma2 turma="Introdução a Banco de Dados"/>
   </div>
);
