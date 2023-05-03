# javascript 基礎

只講基礎中的基礎, 以快速上手為目標

<br/>
<hr>

### 以下簡稱javascript為 `js`

js是大量被使用在畫面的語言,一開始主要用在瀏覽器畫面, 後來擴展到桌面應用畫面, 甚至發展出後端應用及行動裝置應用, 可說是應用非常廣泛, 個人認為精通js很難失業

js是一個弱型別語言: 不用先決定變數型別, 執行到再判斷, 所以靈活性高但導致後續維護困難及正式環境易出錯

js是一個動態(直譯)語言: js擬機吃一段程式跑一段結果, 跟其他靜態語言需要經過編譯成可執行檔再執行不同. 動態語言還有python, ruby等等, 好處是上手快, 壞處是無法預先編譯成可執行檔.

<br/>
<hr >

## JS Hello World
這邊我們先直接做個基本程式, 以快速解釋常用到的js程式語法

建立一個index.html

index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello World</title>
  <!-- title內容顯示在網頁標籤上 -->
</head>
<body>    
  <div id="app"></div>
  <!-- 把全部的js程式碼用這個div顯示出來 -->
  
  <script src="app.js"></script>
  <!-- 讀入app.js   -->
</body>
</html>
```

app.js
```js
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

```

### 目前為止兩個檔案就能有效果了, 我們再進一步更完整一點點


<br/>

## JS Hello World 2

修改app.js為以下內容
```js
window.onload = ()=>{

  function render(target, content){
    target.innerHTML = content
  } 

  function append(child, parent){
    parent.appendChild(child)
  } // + 方便把dom綁到畫面上的函式

  const app = document.querySelector("#app") 
  const content = "String in hello.js"
  render(app, content ) 


  //+ 紅色字串
  const red = document.createElement("div") // 創建dom
  red.innerHTML = "red light"               // 設定內容
  red.setAttribute("style","color:red")     // 設定顏色
  append(red, app)                          // 綁到app上

  //+ 黃色字串
  const yellow = document.createElement("div")
  yellow.innerHTML = "yellow light"
  yellow.setAttribute("style","color:yellow")
  append(yellow, app)

  //+ 綠色字串
  const green = document.createElement("div")
  green.innerHTML = "green light"
  green.setAttribute("style", "color:green")
  append(green, app)

}
```

## JS Hello World 3
練習使用style.css來設定樣式

修改app.js內容如下
```js
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
    red.setAttribute("id","red")              //+ 這行有修改唷
    append(red, app)                          
  
    // 黃色字串
    const yellow = document.createElement("div")
    yellow.innerHTML = "yellow light"
    yellow.setAttribute("id","yellow")        //+ 這行有修改唷
    append(yellow, app)
  
    // 綠色字串
    const green = document.createElement("div")
    green.innerHTML = "green light"
    green.setAttribute("id","green")          //+ 這行有修改唷
    append(green, app)
}

```

建立一個style.css

```css
#red{
  color:red
}

#yellow{
  color:yellow
}

#green{
  color:green
}
```

把index.html的內容改成以下

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello World</title>
  <link rel="stylesheet" href="style.css">
  <!--+ link標籤把style.css引入-->
</head>
<body>
  <div id="app"></div>
  <script src="app.js"></script>
</body>
</html>
```

<br/>
<hr >

## 基本變數型態 (可先跳過再回頭看)

在記憶體中分兩類

(1) primitive type: `布林, 數字, 字串 等等 ...` 
- primitive type 在記憶體中存在stack裡, by value, 有immutable特性

(2) object type: `array, object, function 等等...`
- object type 在記憶體中存在heap裡, by reference, 有mutable特性

tip1: mutable特性的變數在做改值的時候就要小心影響到別的變數

tip2: 想看當前變數型態可用 console.log(typeof(var))來印出

更多詳細的data type參照 [mdn](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Data_structures)

<br/>
<hr >

## 常用語法關鍵字
- let 宣告變數, ex: `let myVar = "hellooo"`

- const 宣告常數(值不可改) ex: `const port = 5555`
- typeof 變數的型態 ex: `console.log(typeof(myVar))`
- if 條件判斷式
```js
if (port===5555){ 
  console.log("port is 5555") 
} else{
  console.oog("port is not 5555")
}
// port is 5555
```
- for 迴圈
```js
for(let i =0; i<100; i++){
  console.log(i)
}
// 1印到100
```
- function 函式定義
```js
function hello1(){
  console.log("native fn declare")
} //定義
hello() //呼叫

const hello2 = ()=>{
  console.log("es6 fn declare")
} // es6語法
hello2()

(()=>{
  console.log("anonymous fn and IIFE")
})() // 匿名函式及自己馬上呼叫自己

```

### 語法範例

```

```