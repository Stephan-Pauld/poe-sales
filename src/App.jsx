import { useState, useEffect } from 'react'
import {io} from 'socket.io-client'
import Card from './components/Card'


const socket = io.connect("http://localhost:5000")


function App() {
  const [sales, setSales] = useState([
    {
      price: "10 chaos",
      item: "some big kill stick",
      tab: "junk",
      left: "5",
      top: "1",
    },
    {
      price: "10 chaos",
      item: "some big kill stick",
      tab: "junk",
      left: "5",
      top: "1",
    },
    {
      price: "10 chaos",
      item: "some big kill stick",
      tab: "junk",
      left: "5",
      top: "1",
    },
    {
      price: "10 chaos",
      item: "some big kill stick",
      tab: "junk",
      left: "5",
      top: "1",
    },
])

  useEffect(()=>{
    socket.on("private_message", (data) =>{
      console.log(sales);
      setSales((prev) => [...prev,data])
    })
 
 },[socket])
  
  return (
    <>
     {sales.map((sale) => (  
      <Card
        sale={sale}
      />
     ))} 
    </>
  )
}

export default App
