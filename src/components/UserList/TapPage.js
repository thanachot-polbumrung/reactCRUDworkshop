import React from 'react'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from "@mui/material/TextField";


function TapPage({onChange,pageCount,itemsPerPage,onChangePage}) {
  return (
    <Stack direction="row" 
    spacing={2} 
    sx={{ 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'flex-end' 
    }}>

    {/* <TextField value={itemsPerPage} onChange={(e)=>onChangePage(e.target.value)}  /> */}
    <Pagination
    siblingCount={2} 
    boundaryCount={2} 
    onChange={(_,newPage)=>onChange(newPage)}
      count={pageCount}
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