import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import UsersTable from "../components/UserList/UsersTable";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Route,Routes,Link } from 'react-router';


function UserList() {
  return (
    
    <React.Fragment>
      
      <Box display={"flex"} margin={"10px"}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            User List
          </Typography>
        </Box>
        <Box>
          <Link to={"add"} >
            <Button variant="contained">ADD</Button>
          </Link>
        </Box>
      </Box>
      <Container maxWidth="90%">
        <Box sx={{ bgcolor: "#FFFFFF", height: "100vh" }}>
          <UsersTable />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default UserList;
