import React from "react";

export default props => (
   <div>
      <h2> Curso: {props.curso} </h2>
      {props.children}
   </div>
);
