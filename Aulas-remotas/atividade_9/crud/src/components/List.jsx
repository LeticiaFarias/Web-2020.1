import React, { Component } from "react";
import TableRow from "./TableRow";

import FirebaseContext from "../utils/FirebaseContext";

const ListPage = () => (
  <FirebaseContext.Consumer>
    {(contexto) => <List firebase={contexto} />}
  </FirebaseContext.Consumer>
);

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { disciplinas: [] };
    
  }
  componentDidMount() {
    this.ref = this.props.firebase.getFirestore().collection("disciplinas");
    this.ref.onSnapshot(this.insertDisciplinas.bind(this));
  }

  insertDisciplinas(query) {
    let disciplinas = [];
    query.forEach((doc) => {
      const { nome, curso, capacidade } = doc.data();
      disciplinas.push({
        id: doc.id,
        nome,
        curso,
        capacidade,
      });
    });
    this.setState({ disciplinas: disciplinas });
  }

  montarTabela() {
    if (!this.state.disciplinas) return;
    return this.state.disciplinas.map((disciplina, i) => {
      return (
        <TableRow
          disciplina={disciplina}
          key={i}
          firebase={this.props.firebase}
        />
      );
    });
  }

  // deleteElementById(id) {
  //   let Disciplinas = this.state.disciplinas;
  //   for (let i = 0; i < Disciplinas.length; i++) {
  //     if (Disciplinas[i].id === id) {
  //       Disciplinas.splice(i, 1);
  //     }
  //   }
  //   this.setState({ disciplinas: Disciplinas });
  // }

  render() {
    return (
      <div>
        <p>Listar Disciplinas</p>
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

export default ListPage;
