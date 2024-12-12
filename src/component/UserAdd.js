import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

function UserAdd() {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Box display={"flex"} margin={"10px"}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom>
              Create new User
            </Typography>
          </Box>
          <Box>
            <Link href="add">
              <Button variant="contained">ADD</Button>
            </Link>
          </Box>
        </Box>
        <form>
          <Box sx={{ width: "50%" }}>
            <Grid container rowSpacing={1} columnSpacing={1}>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  First name
                </Typography>
                <TextField
                  id="fname"
                  label="First name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  Last name
                </Typography>
                <TextField
                  id="lname"
                  label="Last name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  Gender
                </Typography>
                <TextField
                  id="gender"
                  label="Gender"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  Birthday
                </Typography>
                <TextField
                  id="birthday"
                  label="Birthday"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        </form>
        <Container maxWidth="90%">
          <Box sx={{ bgcolor: "#FFFFFF", height: "100vh" }}></Box>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default UserAdd;
