import React from "react";
import { Route, Routes, Link } from "react-router";
import "./App.css";
import { CssBaseline } from "@mui/material";
import UserAdd from "./pages/UserAdd";
import UserList from "./pages/UserList";
import Navbar from "./components/common/Navbar";
import UserEdit from "./pages/UserEdit";
import ToDoList from "./pages/ToDoList";
import UserProfileEditor from "./pages/UserProfileEditor ";

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="add" element={<UserAdd />} />
        <Route path="edit/:id" element={<UserEdit />} />
        <Route path="ToDoList" element={<ToDoList />} />
        <Route path="Profile" element={<UserProfileEditor />} />
      </Routes>
    </div>
  );
}

export default App;
