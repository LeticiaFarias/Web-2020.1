import React, { Component } from "react";

import FirebaseContext from "../utils/FirebaseContext";

const EditPage = (props) => (
  <FirebaseContext.Consumer>
    {(contexto) => <Edit firebase={contexto} id={props.match.params.id} />}
  </FirebaseContext.Consumer>
);

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = { nome: "", curso: "", capacidade: "" };
    this.setNome = this.setNome.bind(this);
    this.setCurso = this.setCurso.bind(this);
    this.setCapacidade = this.setCapacidade.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.firebase
      .getFirestore()
      .collection("disicplinas")
      .doc(this.props.id)
      .get()
      .then((doc) => {
        this.setState({
          nome: doc.data().nome,
          curso: doc.data().curso,
          capacidade: doc.data().capacidade,
        });
      })
      .catch((error) => console.log(error));
  }
  setNome(e) {
    this.setState({ nome: e.target.value });
  }
  setCurso(e) {
    this.setState({ curso: e.target.value });
  }
  setCapacidade(e) {
    this.setState({ capacidade: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.firebase
      .getFirestore()
      .collection("disicplinas")
      .doc(this.props.id)
      .set({
        nome: this.setState.nome,
        curso: this.setState.curso,
        capacidade: this.setState.capacidade,
      })
      .then(() => {
        console.log("Disciplina atualizada com sucesso!");
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Criar Disciplina</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nome: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.nome}
              onChange={this.setNome}
            />
          </div>
          <div className="form-group">
            <label>Curso: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.curso}
              onChange={this.setCurso}
            />
          </div>
          <div className="form-group">
            <label>Capacidade: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.capacidade}
              onChange={this.setCapacidade}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Criar" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditPage;
