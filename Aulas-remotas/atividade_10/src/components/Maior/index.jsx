import React, { Component } from "react";
import { Card } from "react-bootstrap";

import { connect } from "react-redux";

function Maior(props) {
  return (
    <Card>
      <Card.Header as="h2">Maior</Card.Header>
      <Card.Body>
        <Card.Text>
          <h2>{props.result}</h2>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    result:
      Number(state.numeroUm) > Number(state.numeroDois)
        ? Number(state.numeroUm)
        : Number(state.numeroDois),
  };
}

export default connect(mapStateToProps)(Maior);
