
const fs = require('fs');
const readLastLines = require('read-last-lines');

const express = require("express")
const app = express()


const http = require("http")

const socketIo = require("socket.io")
const PORT = 5000
const server = http.createServer(app)

const fileToRead = "C:\\Program Files (x86)\\Grinding Gear Games\\Path of Exile\\logs\\Client.txt"
app.use(express.urlencoded({extended: true}));

const messageReg = /(?<=:\s).*/gm
const itemReg = /(?<=your\s)(.*?)([a-z])(.*?)(?=\slisted)/gm
const priceReg = /(?<=for\s)(.*?)([a-z])(.*?)(?=\sin)/gm
const stashTabReg = /(?<=")(.*?)([a-z])(.*?)(?=")/gm
const leftPosReg = /(?<=left\s)(.*?)()(.*?)(?=,\s)/gm
const topPosReg = /(?<=top\s)(.*?)([0-9])*/gm



const createDm = (message) => {
  console.log(message[0]);
  const price = message[0].match(priceReg)[0]
  const tab = message[0].match(stashTabReg)[0]
  const left = message[0].match(leftPosReg)[0]
  const top = message[0].match(topPosReg)[0]
  const item = message[0].match(itemReg)[0]
  const sale = {
    price,
    item,
    tab,
    left,
    top,
  }
  return sale;
}

const io = socketIo(server,{ 
    cors: {
      origin: 'http://localhost:5173'
    }
}) //in case server and client run on different urls

io.on("connection",(socket)=>{

  fs.watchFile(fileToRead, { interval: 100 }, (curr, prev) => {
    readLastLines.read('C:\\Program Files (x86)\\Grinding Gear Games\\Path of Exile\\logs\\Client.txt', 1)
    .then((line) => {
      const message = line.match(messageReg)
  
      if (line.includes("@From" && "to buy your")) {
        const saleObject = createDm(message)
        socket.emit("private_message", saleObject)
      }
  
    })
    .catch(err =>{
      console.log(err);
    })
  });
})


server.listen(PORT, err=> {
  if(err) console.log(err)
  console.log("Server running on Port ", PORT)
})











