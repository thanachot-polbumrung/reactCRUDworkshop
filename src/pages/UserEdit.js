import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function UserEdit() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    gender: "",
    birthday: null,
    imagePath: "",
  });

  const getUser = async () => {
    try {
      const response = await Axios.get(
        `${process.env.REACT_APP_API_URL}/user/${id}`
      );
      setUser({
        fname: response.data.fname,
        lname: response.data.lname,
        gender: response.data.gender,
        birthday: dayjs(response.data.birthday),
        imagePath: response.data.image_path,
      });
    } catch (_) {}
  };

  const editUser = async (id) => {
    try {
      await Axios.put(`${process.env.REACT_APP_API_URL}/edit`, {
        imagePath: user.imagePath,
        fname: user.fname,
        lname: user.lname,
        gender: user.gender,
        birthday: user.birthday,
        id: id,
      });
      navigate("/");
    } catch (_) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box display={"flex"} margin={"10px"}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            Edit
          </Typography>
        </Box>
        <Box>
          <Link href="add">
            <Button disabled>ADD</Button>
          </Link>
        </Box>
      </Box>


      <Container maxWidth="90%">
        <Box display={"flex"} flexDirection={"row"} sx={{ width: "100%" }}>
          <TestIm
            imagePath={user.imagePath}
            onChange={(imagePath) =>
              setUser((prev) => ({ ...prev, imagePath: imagePath }))
            }
          />
          <Box sx={{ width: "60%", margin: "20px" }}>
            <Grid
              container
              justifyContent="flex-end"
              rowSpacing={1}
              columnSpacing={1}
            >
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  First name
                </Typography>
                <TextField
                  id="fname"
                  label="fname"
                  variant="outlined"
                  value={user.fname}
                  required
                  fullWidth
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, fname: e.target.value }))
                  }
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
                  value={user.lname}
                  required
                  fullWidth
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, lname: e.target.value }))
                  }
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
                      value={user.gender}
                      label="gender"
                      onChange={(e) =>
                        setUser((prev) => ({ ...prev, gender: e.target.value }))
                      }
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
                    onChange={(newValue) =>
                      setUser((prev) => ({ ...prev, birthday: newValue }))
                    }
                    sx={{ width: "100%" }}
                    value={user.birthday}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
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
            {/* <Link href="/"> */}
            <Button onClick={handleClickOpen} color="error">
              cancel
            </Button>
            {/* </Link> */}
          </ButtonGroup>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{"คุณต้องการยกเลิกใช่หรือไม่?"}</DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Link href="/">
                <Button>Agree</Button>
              </Link>
            </DialogActions>
          </Dialog>
          <ButtonGroup
            orientation="vertical"
            aria-label="Vertical button group"
            variant="contained"
          >
            <Button
              variant="contained"
              color="success"
              onClick={() => editUser(id)}
            >
              Save
            </Button>
          </ButtonGroup>
        </Box>

        <Box sx={{ bgcolor: "#FFF", height: "100vh" }}></Box>
      </Container>
    </React.Fragment>
  );
}

export default UserEdit;
