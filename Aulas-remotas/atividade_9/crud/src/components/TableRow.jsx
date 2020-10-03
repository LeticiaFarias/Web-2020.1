import React, { Component } from "react";
import { Link } from "react-router-dom";

import FirebaseService from "../services/FirebaseService";

export default class TableRow extends Component {
  constructor(props) {
    super(props);
    this.apagar = this.apagar.bind(this);
  }

  apagar(id, nome) {
    let resp = window.confirm(`Deseja apagar ${nome}?`);
    if (resp) {
      FirebaseService.delete(
        this.props.firebase.getFirestore(),
        (mensagem) => {
          if (mensagem === "OK") console.log(`${nome} apagada!`);
        },
        id
      );
    }
  }

  render() {
    return (
      <tr>
        <td>{this.props.disciplina.id}</td>
        <td>{this.props.disciplina.nome}</td>
        <td>{this.props.disciplina.curso}</td>
        <td>{this.props.disciplina.capacidade}</td>
        <td style={{ textAlign: "center" }}>
          <Link
            to={"/edit/" + this.props.disciplina.id}
            className="btn btn-primary"
          >
            Editar
          </Link>
        </td>
        <td style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              this.apagar(this.props.disciplina.id, this.props.disciplina.nome);
            }}
            className="btn btn-danger"
          >
            Apagar
          </button>
        </td>
      </tr>
    );
  }
}
