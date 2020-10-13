import React from "react";
import { Card } from "react-bootstrap";

import { connect } from "react-redux";

function Mult(props) {
  return (
    <Card>
      <Card.Header as="h2">Multiplicação</Card.Header>
      <Card.Body>
        <Card.Text>
          <h2>{this.props.result}</h2>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    result: state.numeroUm * state.numeroDois,
  };
}

export default connect(mapStateToProps)(Mult);
