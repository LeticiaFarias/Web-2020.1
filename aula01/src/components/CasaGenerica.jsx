import React from 'react'

export default props =>
   <div>
      <h3>Casa {props.casa}</h3>
      {/* {props.children}*/} 

      {
         React.Children.map(props.children, personagem => {
            //corpo da função - função que irá alterar os meus children
            return React.cloneElement(personagem,{...props})
            }//funcao
         )//map
      }
   </div>