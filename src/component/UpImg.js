import React, { useState } from "react";
import { Box, Button, Typography, Paper, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";

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

const UpImg = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", p: 2 }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        {!previewUrl ? (
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ mb: 2 }}
          >
            เลือกรูปภาพ
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
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
                maxWidth: "100%",
                maxHeight: 200,
                objectFit: "contain",
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
        )}

        {selectedImage && (
          <Typography variant="body2" color="text.secondary">
            ชื่อไฟล์: {selectedImage.name}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default UpImg;
