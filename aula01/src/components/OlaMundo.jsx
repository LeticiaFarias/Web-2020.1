import React from 'react'

// function olaMundo(){
//   return <h1>Olá Mundo dos Componentes React</h1>
// }

// export default olaMundo

// export default () =>{
//    return <h1>Olá Mundo dos Componentes React</h1>
// }

export default(props) => 
<div>
   <h1>Olá Mundo dos Componentes React</h1>
   <h1>{props.nome}</h1>
</div>