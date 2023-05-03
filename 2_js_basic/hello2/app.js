window.onload = ()=>{
  // 程式碼等網頁loading完才執行, 避免沒畫面
  
    function render(target, content){
      target.innerHTML = content
    } // 方便把內容畫出來的函式
  
    function append(child, parent){
      parent.appendChild(child)
    } // 方便把dom綁到畫面上的函式
  
    const app = document.querySelector("#app") // 目標 dom
  
    const content = "String in hello.js" // 想顯示的內容
  
    render(app, content ) // 把content加到app上
  
  
  
    // 紅色字串
    const red = document.createElement("div") // 創建dom
    red.innerHTML = "red light"               // 設定內容
    red.setAttribute("style","color:red")     // 設定顏色
    append(red, app)                          // 綁到app上
  
    // 黃色字串
    const yellow = document.createElement("div")
    yellow.innerHTML = "yellow light"
    yellow.setAttribute("style","color:yellow")
    append(yellow, app)
  
    // 綠色字串
    const green = document.createElement("div")
    green.innerHTML = "green light"
    green.setAttribute("style", "color:green")
    append(green, app)
  }