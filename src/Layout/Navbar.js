import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div>
      <AppBar sx={{backgroundColor:"#9511db",position:"fixed"}}>
        <Toolbar>
          <Typography variant="p"><Link to="/"><img src={require("../assets/img/agile.png")} height={40} alt="logo" /></Link> </Typography>
          <Box display="flex" marginLeft="auto">
          <Stack spacing={2} direction="row">
            <Link to="/" style={{textDecoration:"none"}}><Button variant="contained" color="warning">Home</Button> </Link>
            <Link to="/profile" style={{textDecoration:"none"}}><Button variant="contained" color="warning">Profile</Button> </Link>
          </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Navbar

