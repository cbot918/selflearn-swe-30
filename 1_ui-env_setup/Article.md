# 前端web的環境設定

<br/>

## 新手前端開發四步驟

- Step1: 建立專案
- Step2: 程式碼撰寫
- Step3: build程式碼, 俗稱打包
- Step4: 部屬: 把build過的程式碼放到雲上, 讓使用者可以訪問

<br/>


## Step1: 建立專案
Vite是一個建立/熱更新/打包專案的工具, 俗稱Build Tool或Scafollder

先用npm安裝vite
```
npm install vite
```
使用vite建立專案
```
yarn create vite
# Project name: proj
# Select a framework: Vanilla
# Select a variant: JavaScript
```
移動到資料夾內並且啟動開發伺服器(dev-server)
```
cd proj      // cd: change directory
yarn         // 會安裝設定檔package.json裡面紀錄專案用到的套件
yarn run dev // 啟動 dev-server, 開發時用瀏覽器輸入localhost:5173看輸出結果
```
<br/>

## Step2: 程式碼撰寫
基本觀念:

使用者透過網路, 輸入網址瀏覽網頁, 例如使用者輸入 https://google.com後, 在google機房內會有一台網頁伺服器會監聽網路, 當正確的http request進來後, 回應相對應的請求, 這個例子中是index.html的資料, 所以前端在專案開發的源頭是index.html

index.html會透過 `src="/main.js"` 的指令引入main.js的程式碼, main.js再透過 `import { setupCounter } from './counter.js'` 的指令引入 counter.js的程式碼, 模組化的方式把程式碼拆成小塊, 以利維護( 單個程式碼太大不易讀, 容易變成義大利麵 )

我們準備來改專案內的 main.js, 引入一個新增的hello的物件

1. 引入hello物件 `import { Hello } from './hello.js' `
2. 將 `document.querySelector('#app').innerHTML = ` 的內容修改
3. 把沒用到的counter及其他程式碼刪掉

修改後如下

main.js

```js
import { Hello } from './hello.js' 


console.log("hihi")

document.querySelector('#app').innerHTML = `
  <div> Welcome to main.js</div>
`

document.querySelector('#app').appendChild( Hello() )


```

創一個新檔案叫 hello.js

做一個function, 期待回傳一個 dom, 這個dom會包含Hello from hello.js以及紅色的style, 並將他export出來

hello.js
```js
function Hello(){
  let hello = document.createElement('div')
  hello.innerHTML = "Hello from hello.js"
  hello.setAttribute("style","color:red")
  return hello
}

export { Hello }
```

記得剛剛講的熱更新開發環境, yarn run dev, 之後就去顯示的網址看(通常是localhost:5173)

預期結果: 

1. Welcome to main.js
2. Hello from hello.js
3. 滑鼠右鍵inspect模式(或按F11), 去console那邊看, 會有hihi

<br/>

## Step3: build專案
```
yarn run build
```
預期結果：

會多一個dist的資料夾, 這個資料夾就是production code, 可以放到雲上

<br/>

## Step4: 部屬專案

這邊為了學到核心概念, 先用一台nodejs server, 當作是雲端機器, 後面講過git後再來部屬到gitpage

開個新檔案(我們回到上一層做server.js, 因為js有個require/esm的坑後面再提)：
```
1. cd ..
2. touch server.js
3. yarn init -y
3. yarn add express
```

在server.js新增以下程式碼
server.js
```js
const express = require('express')
const path = require('path')

const port = 3000
const htmlPath = path.resolve(__dirname,'proj','dist','index.html')
const folderPath = path.resolve(__dirname,'proj','dist')

// 建立server實體
const server = express()

// 讓server找的到資料夾(因為資料夾內會有很多檔案)
server.use(express.static(htmlPath))

// 有請求進來, 就回傳index.html回去
server.get('/', (res, res) =>{
  res.sendFile(htmlPath)
})

// 監聽port 3000
server.listen(port, () => {
  console.log(`server listening:  ${port}`)
})

```

最後啟動server
```
node server.js
```

預期結果：
- 瀏覽器開 localhost:3000, 應該要看到畫面

### 以上就是第一次前端開發Hello World