import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { IconButton, Radio } from "@mui/material";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

function ToDoList() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const addPost = (title) => {
    const newDate = new Date();
    const checkText = false;
    const newPost = { id: newDate, title, checkText };
    setPosts([newPost, ...posts]);
  };
  const onKeyDown = (e) => {
    const title = e.target.value;
    if (e.key === "Enter" && title) {
      addPost(title);
      setInput("");
    }
  };

  return (
    <Box sx={{ marginTop: "10px" }}>
      <TextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        id="outlined-basic"
        label="สร้าง"
        variant="outlined"
      />
      <Box>
        {posts.map((value) => (
          <Box >
            <FormControlLabel
              control={
                <Radio
                  value={"single"}
                  checked={value.checkText}
                  onClick={(e) =>
                    setPosts(
                      posts.map((post) => ({
                        ...post,
                        checkText:
                          value.id == post.id
                            ? !post.checkText
                            : post.checkText,
                      }))
                    )
                  }
                />
              }
              label={value.title}
            />
            <IconButton onClick={()=>setPosts(posts.filter((post)=>(value.id != post.id)))}  edge="end" aria-label="delete">
              <DeleteOutlineRoundedIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ToDoList;
