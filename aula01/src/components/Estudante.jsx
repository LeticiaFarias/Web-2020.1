import React from 'react'

export default(props) =>
   <div>
      <h1>Atividade Props</h1>
      <ul>
         <li>{props.nome}</li>
         <li>{props.idade}</li>
         <li>{props.curso}</li>
         <li>{props.cidadeNatal}</li>
      </ul>
   </div>
