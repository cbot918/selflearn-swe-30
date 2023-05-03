window.onload = ()=>{
  // 程式碼等網頁loading完才執行, 避免沒畫面
    
    const app = document.querySelector("#app")
    // 目標 dom
  
    const content = "String in hello.js"
    // 想顯示的內容
  
    function render(target, content){
      target.innerHTML = content
    }
    // function定義
  
    render(app, content )
    // function呼叫
  
  }
  