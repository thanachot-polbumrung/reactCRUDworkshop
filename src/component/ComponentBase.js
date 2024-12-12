import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";


function ComponentBase() {
  return (
    <React.Fragment>
    <CssBaseline /> 
    <Container maxWidth="90%">
      <Box sx={{ bgcolor: "#FFFFFF", height: "100vh" }}>  
      </Box>
    </Container>
  </React.Fragment>
   
  )
}

export default ComponentBase