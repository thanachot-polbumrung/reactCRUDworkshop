import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";





export default function Navbar() {

    


  return (
   
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              User Management
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="ToDoList">
              <Button
                
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                TO DO LIST
              </Button>
              </Link>
              <Link to="State">
              <Button
                
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               State
              </Button>
              </Link>
              <Link to="Profile">
              <Button
                
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Profile
              </Button>
              </Link>
            
          </Box>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Toolbar>
        </AppBar>
      </Box>
      
     
     

     
   
  );
}
