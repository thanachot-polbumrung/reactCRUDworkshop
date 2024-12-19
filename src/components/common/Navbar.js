import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';





export default function Navbar() {

    


  return (
   
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              User Management
            </Typography>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Toolbar>
        </AppBar>
      </Box>
      
     
     

     
   
  );
}
