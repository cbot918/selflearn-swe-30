const express = require('express')
const path = require('path')

const port = 3000
const htmlPath = path.resolve(__dirname,'proj','dist','index.html')
const folderPath = path.resolve(__dirname,'proj','dist')

// 建立server實體
const server = express()

// 讓server找的到資料夾(因為資料夾內會有很多檔案)
server.use(express.static(folderPath))

// 有請求進來, 就回傳index.html回去
server.get('/', (req, res) =>{
  res.sendFile(htmlPath)
})

// 監聽port 3000
server.listen(port, () => {
  console.log(`server listening:  ${port}`)
})