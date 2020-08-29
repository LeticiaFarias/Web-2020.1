import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class List extends Component {
   constructor(props) {
      super(props);
      this.state = { estudantes: [] };
      this.deleteElementById = this.deleteElementById.bind(this);
   }
   componentDidMount() {
      axios
         .get("http://localhost:3333/disciplinas/list")
         .then((response) => {
            this.setState({ disciplinas: response.data });
         })
         .catch((error) => {
            console.log(error);
         });
   }

   montarTabela() {
      if (!this.state.disciplinas) return;
      return this.state.disciplinas.map((disciplina, i) => {
         return (
            <TableRow
               disciplina={disciplina}
               key={i}
               deleteElementById={this.deleteElementById}
            />
         );
      });
   }

   deleteElementById(id) {
      let Disciplinas = this.state.disciplinas;
      for (let i = 0; i < Disciplinas.length; i++) {
         if (Disciplinas[i].idDiciplina === id) {
            Disciplinas.splice(i, 1);
         }
      }
      this.setState({ disciplinas: Disciplinas });
   }

   render() {
      return (
         <div>
            <p>List Disciplina</p>
            <table className="table table-striped" style={{ marginTop: 15 }}>
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Nome</th>
                     <th>Curso</th>
                     <th>Capacidade</th>
                     <th colSpan="2" style={{ textAlign: "center" }}>
                        Ação
                     </th>
                  </tr>
               </thead>
               <tbody>{this.montarTabela()}</tbody>
            </table>
         </div>
      );
   }
}
