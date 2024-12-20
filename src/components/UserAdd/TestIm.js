import React, { useState } from "react";
import {
  Box,
  Avatar,
  IconButton,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DialogContentText from '@mui/material/DialogContentText';
import { styled } from "@mui/material/styles";
import Axios from "axios";
import { Link } from "react-router-dom";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const TestIm = ({ onImageUpload, size = 150, onChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const formData = new FormData();
      formData.append("file", file);
      const response = await Axios.post(
        "http://localhost:3001/upload",
        formData
      );
      setPreviewUrl(response.data.imageUrl);
      onChange(response.data.imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
          width: "fit-content",
          borderRadius: "50px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Avatar
            src={previewUrl}
            sx={{
              width: size,
              height: size,
              mr: 2,
              border: selectedImage ? "2px solid" : "2px dashed",
              borderColor: selectedImage ? "primary.main" : "grey.400",
            }}
          >
            {!selectedImage && "เลือกรูป"}
          </Avatar>
        </Box>
        <Box sx={{ position: "relative", width: "100%", textAlign: "center" }}>
          <Box
            alt="Preview"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: 1,
            }}
          />
          <IconButton
           onClick={handleClickOpen}
            sx={{
              position: "absolute",
              top: -12,
              right: -12,
              bgcolor: "background.paper",
              "&:hover": { bgcolor: "grey.200" },
            }}
          >
            <DeleteIcon />
          </IconButton>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"You want delete to your image"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            คุณต้องการลบรูปเหรออออออ
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleRemoveImage} autoFocus>
            Agree
          </Button>
          
        </DialogActions>
      </Dialog>
        </Box>
        

        <IconButton
          component="label"
          color="primary"
          aria-label="upload picture"
        >
          <CloudUploadIcon />
          <VisuallyHiddenInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </IconButton>
      </Paper>
    </>
  );
};

export default TestIm;
