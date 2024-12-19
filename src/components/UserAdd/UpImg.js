import React, { useState } from "react";
import { Box, Button, Typography, Paper, IconButton, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import Axios from "axios";

// Styled component สำหรับซ่อน input file ดั้งเดิม
const Input = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const UpImg = ({ onChange, ...props }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
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
  console.log(previewUrl);

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  return (
    <Box sx={{ maxWidth: "100%", mx: "auto", p: 2 }}>
      <Paper
        elevation={3}
        sx={{
          display: 'flex', 
          alignItems: 'center', 
          p: 1, 
          width: 'fit-content',
          borderRadius: '50px' 
        }}
      >
        <Avatar
        src={selectedImage || undefined}
        sx={{ 
          width: 200, 
          height: 200, 
          mr: 2,
          border: selectedImage ? '2px solid' : '2px dashed',
          borderColor: selectedImage ? 'primary.main' : 'grey.400'
        }}
      >
        {!selectedImage && 'เลือกรูป'}
      </Avatar>
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
        {/* {!previewUrl ? (
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ mb: 2 }}
          >
            เลือกรูปภาพ
            <Input type="file" accept="image/*" onChange={handleImageChange} />
          </Button>
        ) : (
          <Box
            sx={{ position: "relative", width: "100%", textAlign: "center" }}
          >
            <Box
              component="img"
              src={previewUrl}
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
              onClick={handleRemoveImage}
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
          </Box>
        )} */}

        {selectedImage && (
          <Typography variant="body2" color="text.secondary">
            {/* ชื่อไฟล์: {selectedImage.name} */}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default UpImg;
