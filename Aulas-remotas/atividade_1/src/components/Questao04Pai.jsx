import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

// import Questao05 from "./Questao05"

// export default (props) => {
//    return (
//       <div>
//          <Questao02
//             nome="Letícia França Farias"
//             curso="Sistemas de Informação"
//             cidadeDeOrigem="Quixeramobim, CE"
//          />
//       </div>
//    );
// };

export default class Questao04Pai extends Component {
   render() {
      return (
         <div>
            <Card style={{ width: "20rem" }}>
               <ListGroup variant="flush">
                  <ListGroup.Item>Nome: {this.props.nome} </ListGroup.Item>
                  <ListGroup.Item>Curso: {this.props.curso}</ListGroup.Item>
                  <ListGroup.Item>
                     Cidade de origem: {this.props.cidadeDeOrigem}
                  </ListGroup.Item>
               </ListGroup>
            </Card>
         </div>
      );
   }
}
