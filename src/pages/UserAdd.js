import React, {  useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TestIm from "../components/UserAdd/TestIm";

function UserAdd() {
  const [user, setUser] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [imagePath, setImagePath] = useState("");

  const addUser = async () => {
    await Axios.post("http://localhost:3001/create", {
      imagePath: imagePath,
      fname: fname,
      lname: lname,
      gender: gender,
      birthday: birthday,
    });
    setUser([
      ...user,
      {
        imagePath: imagePath,
        fname: fname,
        lname: lname,
        gender: gender,
        birthday: birthday,
      },
    ]);
  };
  console.log(...user)

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
              <Button disabled>ADD</Button>
            </Link>
          </Box>
        </Box>
       
        <Container maxWidth="90%">
        <form>
          <Box  display={"flex"} flexDirection={"row"} sx={{ width: "100%" }}>
            <TestIm onChange={(imagePath) => setImagePath(imagePath)} />
            <Box sx={{ width: "60%" }}>
              <Grid container justifyContent="flex-end" rowSpacing={1} columnSpacing={1}>
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom>
                    First name
                  </Typography>
                  <TextField
                    id="fname"
                    label="First name"
                    variant="outlined"
                    required
                    fullWidth
                    onChange={(e) => setFname(e.target.value)}
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
                    required
                    fullWidth
                    onChange={(e) => setLname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom>
                    Gender
                  </Typography>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Gender
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gender}
                        label="gender"
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom>
                    Birthday
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      onChange={(newValue) => setBirthday(newValue)}
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box
            sx={{
              display:"flex",
              justifyContent:"flex-end",
              marginTop:"20px",
              "& > *": {
                m: 1,
              },
            }}
          >
            <ButtonGroup
              orientation="vertical"
              aria-label="Vertical button group"
              variant="contained"
            >
              <Link href="/">
                <Button color="error">cancel</Button>
              </Link>
            </ButtonGroup>
            <ButtonGroup
              orientation="vertical"
              aria-label="Vertical button group"
              variant="contained"
            >
              <Link href="/">
                <Button variant="contained" color="success" onClick={addUser}>
                  Save
                </Button>
              </Link>
            </ButtonGroup>
          </Box>
        </form>
          <Box sx={{ bgcolor: "#FFF", height: "100vh" }}></Box>
          
        </Container>
      </React.Fragment>
    </div>
  );
}

export default UserAdd;
