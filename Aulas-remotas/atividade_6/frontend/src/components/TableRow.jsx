import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class TableRow extends Component {
  constructor(props) {
    super(props);
    this.apagar = this.apagar.bind(this);
  }
  apagar() {
    axios
      .delete(
        "http://localhost:3333/disciplinas/delete/" +
          this.props.disciplina.idDisciplina
      )
      .then((response) => {
        this.props.deleteElementById(this.props.disciplina.idDisciplina);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <tr>
        <td>{this.props.disciplina.idDisciplina}</td>
        <td>{this.props.disciplina.nome}</td>
        <td>{this.props.disciplina.curso}</td>
        <td>{this.props.disciplina.capacidade}</td>
        <td style={{ textAlign: "center" }}>
          <Link
            to={"/edit/" + this.props.disciplina.idDisciplina}
            className="btn btn-primary"
          >
            Editar
          </Link>
        </td>
        <td style={{ textAlign: "center" }}>
          <button onClick={this.apagar} className="btn btn-danger">
            Apagar
          </button>
        </td>
      </tr>
    );
  }
}
