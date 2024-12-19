import React from "react";
import { Route, Routes, Link } from "react-router";
import "./App.css";
import { CssBaseline } from "@mui/material";
import UserAdd from "./pages/UserAdd";
import UserList from "./pages/UserList";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="add" element={<UserAdd />} />
      </Routes>
    </div>
  );
}

export default App;
