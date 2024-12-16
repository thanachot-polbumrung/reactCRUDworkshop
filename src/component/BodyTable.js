import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TapPage from "./TapPage";
import Axios from "axios";
import { Avatar } from "@mui/material";


export default function BodyTable() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUser = async () => {
    const response = await Axios.get("http://localhost:3001/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    const response = await Axios.delete(`http://localhost:3001/delete/${id}`);
    setUser(
      user.filter((val) => {
        return val.id != id;
      })
    );
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="headtable">
          <TableRow>
            <TableCell align="center">Profile picture</TableCell>
            <TableCell align="center">First name</TableCell>
            <TableCell align="center">Last name</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Birthday</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell  align="center">
                <Box display="flex" justifyContent="center">
                  <Avatar alt="Remy Sharp" src={row.image_path} />
                </Box>
              </TableCell>
              <TableCell align="center">{row.fname}</TableCell>

              <TableCell align="center">{row.lname}</TableCell>
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="center">{row.birthday}</TableCell>
              <TableCell align="center">
                <Box
                  sx={{
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
                    <Button color="warning">Edit</Button>
                  </ButtonGroup>
                  <ButtonGroup
                    orientation="vertical"
                    aria-label="Vertical button group"
                    variant="contained"
                  >
                    <Button
                      color="error"
                      onClick={() => {
                        deleteUser(row.id);
                      }}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TapPage />
    </TableContainer>
  );
}
