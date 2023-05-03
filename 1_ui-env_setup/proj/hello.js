
function Hello(){
  let hello = document.createElement('div')
  hello.innerHTML = "Hello from hello.js"
  hello.setAttribute("style","color:red")
  return hello
}

export { Hello }


