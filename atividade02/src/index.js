import React from "react";
import ReactDOM from "react-dom";

//import Curso from "./questao01/components/Curso";
//import Estudante from "./questao01/components/Estudante";
//import Turma from "./questao01/components/Turma";

//import Curso2 from "./questao02/components/Curso2";

// -------------- Questão 03 ----------------------
import IMCPai from "./questao03/components/IMCPai";

const root = document.getElementById("root");
ReactDOM.render(<IMCPai />, root);

// ------------ Questão 02 ----------------

// ReactDOM.render(<Curso2 curso="Sistemas de Informação"/>, root);

// ------------ Questão 01 ----------------

/*
ReactDOM.render(
   <Curso curso="Sistemas de Informação">
      <Turma turma="Fundamento de Programação">
         <Estudante nome="Fulano de Tal" curso="Sistemas de Informação" />
         <Estudante nome="Beltrano de Tal" curso="Desing Digital" />
      </Turma>
      <Turma turma="Introdução a Banco de Dados">
         <Estudante nome="Fulano de Tal" curso="Sistemas de Informação" />
         <Estudante nome="Beltrano de Tal" curso="Desing Digital" />
         <Estudante nome="Sicrano de Tal" curso="Ciência da Computação" />
      </Turma>
   </Curso>,
   root
);
*/
