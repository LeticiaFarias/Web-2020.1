import React from "react";

import { Container, Line, Campo } from "./styles.js";
import { connect } from "react-redux";

import actions from "../../store/actions/actions.js";

function Layout(props) {
  return (
    <Container>
      <h1>Calculadora Redux </h1>
      <Line>
        <h2> Número 1: </h2>
        <Campo
          value={this.props.numeroUm}
          oneChange={(e) => {
            this.props.setNumeroUm(e.target.value);
          }}
        ></Campo>
        <h2> Número 2: </h2>
        <Campo
          value={this.props.numeroUm}
          oneChange={(e) => {
            this.props.setNumeroDois(e.target.value);
          }}
        ></Campo>
      </Line>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    numeroUm: state.numeroUm,
    numeroDois: state.numeroDois,
  };
}

function mapActionCreatorToProps(dispatch) {
  return {
    setNumeroUm(numeroUm) {
      const action = actions.novoNumeroUm(numeroUm);
      dispatch(action);
    },
    setNumeroDois(numeroDois) {
      const action = actions.novoNumeroDois(numeroDois);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapActionCreatorToProps)(Layout);
