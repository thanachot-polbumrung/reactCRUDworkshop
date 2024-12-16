import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import UpImg from "./UpImg";
import Axios from "axios";

function UserAdd() {
  const Gender = ["Male", "Female"];
  const [user, setUser] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [imagePath,setImagePath] = useState("")
 

 
  const addUser=async()=>{
    const response = await Axios.post("http://localhost:3001/create",{
      imagePath:imagePath,
      fname:fname,
      lname:lname,
      gender:gender,
      birthday:birthday
    })
    setUser([
      ...user,
      {
        imagePath:imagePath,
        fname:fname,
        lname:lname,
        gender:gender,
        birthday:birthday
      }
    ])
  }
  
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
              <Button onClick={addUser} variant="contained">ADD</Button>
            </Link>
          </Box>
        </Box>
        <form>
          <Box display={"flex"} flexDirection={"row"} sx={{ width: "100%" }}>
            <UpImg onChange={(imagePath)=>setImagePath(imagePath)} />
            <Box sx={{ width: "60%" }}>
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
                    onChange={(e)=>setFname(e.target.value)}
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
                    onChange={(e)=>setLname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom>
                    Gender
                  </Typography>
                  <Autocomplete
                  onChange={(e)=>setGender(e.target.value)}
                    fullWidth
                    disablePortal
                    options={Gender}
                    renderInput={(params) => (
                      <TextField {...params} label="Gender" />
                      
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom>
                    Birthday
                  </Typography>
                  <LocalizationProvider  dateAdapter={AdapterDayjs}>
                    <DatePicker onChange={(newValue)=>setBirthday(newValue)} sx={{ width: "100%" }} />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </Box>
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
