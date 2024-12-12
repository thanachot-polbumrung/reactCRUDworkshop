import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BodyTable from "./BodyTable";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';

function ContainerBody() {
  return (
    
    <React.Fragment>
      <CssBaseline />
      <Box display={"flex"} margin={"10px"}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            User List
          </Typography>
        </Box>
        <Box>
          <Link href="add">
            <Button variant="contained">ADD</Button>
          </Link>
        </Box>
      </Box>
      <Container maxWidth="90%">
        <Box sx={{ bgcolor: "#FFFFFF", height: "100vh" }}>
          <BodyTable />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default ContainerBody;
