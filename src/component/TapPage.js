import React from 'react'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios';


function TapPage() {
  return (
    <Stack direction="row" 
    spacing={2} 
    sx={{ 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'flex-end' 
    }}>
    <Pagination
      count={10}
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
    />
  </Stack>
  )
}

export default TapPage