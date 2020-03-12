import React from 'react'
import ReactDOM from 'react-dom'

//import CasaGenerica from './components/CasaGenerica'
//import Personagem from './components/Personagem'

// import OlaMundo from './components/OlaMundo'
// import Estudante from './components/Estudante'
// import Professor from './components/Professor'
//import  {CapitaoAmerica as Ca, ViuvaNegra as Vn} from './components/Vingadores'
//import Casa from './components/Casa'
//import Personagem from './components/Personagem'

import IMCFuncao from './components/imc_funcao/IMCFuncao'

const root = document.getElementById('root')
ReactDOM.render(
   <div>
      <IMCFuncao peso={51} altura={1.69}/>
   </div>, root
)



/*ReactDOM.render(
   <div>
      <h3>
      <CasaGenerica>
         <Personagem nome='Arya' casa='Stark'/>
         <Personagem nome='John Snow' casa='Stark'/>
         <Personagem nome='Sansa' casa='Stark'/>
      </CasaGenerica> 
      <CasaGenerica>
         <Personagem nome='Robert' casa='Baratheon'/>
      </CasaGenerica>
      </h3>
   </div>
   , root
)*/


//ReactDOM.render(<div>
  // <Casa/>
  // <Personagem/>
  // </div>, root)


// ReactDOM.render(<div>
//    <Ca nome='Jefferson' />
//    <Vn nome='Thomas' />
//    </div>, root);
   
// ReactDOM.render(<Estudante nome='Letícia' idade='20' curso='Sistemas de Informação'
//    cidadeNatal='Quixeramobim' />, root)

// ReactDOM.render(<div>
//    <Professor nome='Jefferson' area='TI' nivel='D' curso='Si'/>
//    <Estudante nome='Letícia' idade='20' curso='Sistemas de Informação'
//    cidadeNatal='Quixeramobim'/>
// </div>, root)

// ReactDOM.render(<div>
//    <CapitaoAmerica nome='Jefferson' />
//    <ViuvaNegra nome='Thomas' />
//    </div>, root);

// ReactDOM.render(<OlaMundo nome='Letícia'/>, root)

// ReactDOM.render('Olá mundo do React!', root)

// ReactDOM.render(<h1>Olá mundo do React!</h1>, root)
/*

let h2 = document.createElement('h2');
let texto = document.createTextNode('Olá mundo!');
h2.appendChild(texto);
root.appendChild(h2);
*/

/*
let ul = document.createElement('ul')
let li = document.createElement('li')
let texto1 = document.createTextNode('01-) Superman')
li.appendChild(texto1)
ul.appendChild(li)

let texto2 = document.createTextNode('02-) Batman')
let li2 = document.createElement('li')
li2.appendChild(texto2)
ul.appendChild(li2)

let texto3 = document.createTextNode('02-) Wonder Woman')
let li3 = document.createElement('li')
li3.appendChild(texto3)
ul.appendChild(li3)

root.appendChild(ul)
*/


//  Atividade de casa

// ReactDOM.render(
//   <ul>
//     <li>1-) Superman </li>
//     <li>2-) Batman</li>
//     <li>3-) Wonder Woman</li>
//   </ul>, root)
