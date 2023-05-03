import { Hello } from './hello.js' 


console.log("hihi")

document.querySelector('#app').innerHTML = `
  <div> Welcome to main.js</div>
`

document.querySelector('#app').appendChild( Hello() )
