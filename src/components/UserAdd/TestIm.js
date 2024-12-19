import React, { useState } from 'react';
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
  Typography
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { styled } from '@mui/material/styles';

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

const TestIm = ({ onImageUpload, size = 150 }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage({
          file: file,
          preview: reader.result
        });
        if (onImageUpload) {
          onImageUpload(file, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
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
        <Box sx={{ position: 'relative' }}>
          <Avatar
            src={selectedImage?.preview || undefined}
            sx={{ 
              width: size, 
              height: size, 
              mr: 2,
              border: selectedImage ? '2px solid' : '2px dashed',
              borderColor: selectedImage ? 'primary.main' : 'grey.400'
            }}
          >
            {!selectedImage && 'เลือกรูป'}
          </Avatar>
          {selectedImage && (
            <IconButton
              size="small"
              sx={{
                position: 'absolute',
                bottom: 0,
                right: '20%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
              }}
              onClick={handleOpenDialog}
            >
              <ZoomInIcon fontSize="small" sx={{ color: 'white' }} />
            </IconButton>
          )}
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

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>รูปภาพที่เลือก</DialogTitle>
        <DialogContent>
          {selectedImage && (
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center' 
            }}>
              <img 
                src={selectedImage.preview} 
                alt="Selected" 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '500px', 
                  objectFit: 'contain' 
                }} 
              />
              <Typography variant="body2" sx={{ mt: 2 }}>
                ชื่อไฟล์: {selectedImage.file.name}
              </Typography>
              <Typography variant="body2">
                ขนาด: {(selectedImage.file.size / 1024).toFixed(2)} KB
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>ปิด</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TestIm;