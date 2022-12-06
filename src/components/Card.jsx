import React from 'react'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Buttons from './Buttons';

function Card({sale}) {



  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    lineHeight: '80px',
  }));
  
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  return (
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
                <ul style={{display:"flex", justifyContent:"space-between", alignItems:"center", listStyleType:"none"}}>
                  <li>{sale.item}</li>
                  <li>{sale.tab}</li>
                  <li>{sale.price}</li>
                  <li>{sale.left}</li>
                  <li>{sale.top}</li>
                  <li><Buttons/></li>
                </ul>
              </div>
            </Item>
            
  </Box>
  
  </ThemeProvider>   
  )
}

export default Card