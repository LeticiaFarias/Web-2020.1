import React from "react";

export default props => (
   <div>
      <h2> Turma: {props.turma} </h2>
      {props.children}
   </div>
);
