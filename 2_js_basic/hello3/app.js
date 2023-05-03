window.onload = ()=>{
  
    function render(target, content){
      target.innerHTML = content
    } 
  
    function append(child, parent){
      parent.appendChild(child)
    } 
  
    const app = document.querySelector("#app") 
  
    const content = "String in hello.js" 
  
    render(app, content ) 
  
  
  
    // 紅色字串
    const red = document.createElement("div") 
    red.innerHTML = "red light"               
    red.setAttribute("id","red")              // + 這行有修改唷
    append(red, app)                          
  
    // 黃色字串
    const yellow = document.createElement("div")
    yellow.innerHTML = "yellow light"
    yellow.setAttribute("id","yellow")        // + 這行有修改唷
    append(yellow, app)
  
    // 綠色字串
    const green = document.createElement("div")
    green.innerHTML = "green light"
    green.setAttribute("id","green")          // + 這行有修改唷
    append(green, app)
  }