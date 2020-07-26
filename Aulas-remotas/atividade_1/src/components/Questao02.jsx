import React from "react";
import {Card, ListGroup} from "react-bootstrap";

// class Questao02 extends React.Component {
//    render() {
//       return (
//          <div>
//             <h2> Nome: Letícia França Farias </h2>
//             <h2> Curso: Sistemas de Informação </h2>
//             <h2> Cidade de origem: Quixeramobim, CE </h2>
//          </div>
//       );
//    }
// }

// USANDO PROPS PRA QUESTÃO 04

 class Questao02 extends React.Component {
    render() {
       return (
          <div>
             <h2> Nome: {this.props.nome} </h2>
             <h2> Curso: {this.props.curso} </h2>
             <h2> Cidade de origem: {this.props.cidadeDeOrigem} </h2>
          </div>
      );
    }
}

export default Questao02;


