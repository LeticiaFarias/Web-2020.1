import React, { Component } from "react";

import { Card } from "react-bootstrap";

import { connect } from "react-redux";

function Soma(props) {
  return (
    <div>
      <Card>
        <Card.Header as="h2">Soma</Card.Header>
        <Card.Body>
          <Card.Text>
            <h2>{props.result}</h2>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    result: Number(state.numeroUm) + Number(state.numeroDOis),
  };
}

export default connect(mapStateToProps)(Soma);
