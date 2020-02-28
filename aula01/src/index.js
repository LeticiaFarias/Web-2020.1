import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')
//ReactDOM.render('Olá mundo do React!', root)
//ReactDOM.render(<h1>Olá mundo do React!</h1>, root)
/*
let h2 = document.createElement('h2');
let texto = document.createTextNode('Olá mundo!');
h2.appendChild(texto);
root.appendChild(h2);
*/

/*let ul = document.createElement('ul')
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

ReactDOM.render(<ul>
 <li>1-) Superman </li>
 <li>2-) Batman</li>
 <li>3-) Wonder Woman</li>
</ul>, root)
