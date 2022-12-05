import { useState, useEffect } from 'react'
import axios from "axios";
import {io} from 'socket.io-client'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const socket = io.connect("http://localhost:5000")

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  lineHeight: '80px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
function App() {
  const [sales, setSales] = useState([])

  useEffect(()=>{
    socket.on("private_message", (data) =>{
      console.log(sales);
      setSales((prev) => [...prev,data])
    })
 
 },[socket])
  
  return (
    <>
     {sales.map((sale) => (   
      <ThemeProvider theme={darkTheme}>
      <Box
      sx={{
        p: 2,
        bgcolor: 'background.default',
        
        display:"flex",
        flexDirection: 'column',
        width: '60%',
        margin: 'auto'
      }}
    >
              <Item >
                <div>
                  <ul style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", listStyleType:"none"}}>
                    <li>{sale.item}</li>
                    <li>{sale.tab}</li>
                    <li>{sale.price}</li>
                    <li>{sale.left}</li>
                    <li>{sale.top}</li>
                  </ul>
                </div>
              </Item>
    </Box>
    </ThemeProvider>   
     ))} 
    </>
  )
}

export default App
