import React from 'react'

import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import TimerSharpIcon from '@mui/icons-material/TimerSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp'


function Buttons() {

  const buttons = [
    <IconButton>
      <ClearSharpIcon />
    </IconButton>,

    <IconButton>
      <TimerSharpIcon />
    </IconButton>,

    <IconButton>
      <EmailSharpIcon />
    </IconButton>,
  ];


  return (
    <>
    <Tooltip title="Delete" placement="right">
    <Box
      sx={{
        display: 'flex',
        flexDirection: "column",
        backgroundColor: "#a03737",
        borderRadiusTop: '4px',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        marginRight:'10px'
      }}
    >

      <IconButton>
        <ClearSharpIcon />
      </IconButton>
      
    </Box>
    </Tooltip>
    <Tooltip title="Copy Busy" placement="right">
    <Box
      sx={{
        display: 'flex',
        flexDirection: "column",
        backgroundColor: "#2e3241",
        marginRight:'10px'
        
      }}
    >

      <IconButton>
        <TimerSharpIcon />
      </IconButton>
      <hr style={{width: '80%', opacity: "10%",marginBottom: '0px',marginTop: '0px'}}/>
    </Box>
    </Tooltip>
    <Tooltip title="Copy Invite" placement="right">
    <Box
      sx={{
        display: 'flex',
        flexDirection: "column",
        backgroundColor: "#2e3241",
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        marginRight:'10px'
      }}
      
    >

      <IconButton>
        <EmailSharpIcon />
      </IconButton>
      
    </Box>
    </Tooltip>
    </>
  )
}

export default Buttons