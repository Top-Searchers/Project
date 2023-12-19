import React from 'react'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
const FormForFooter = () => {
  return (
    <div className=''>

<Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
       
      <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue="Hello World"
      sx={{
        '& .MuiInputBase-root': {
          height: '30px', // Set your desired height
        },
        '& .MuiInputBase-input': {
          height: '30px', // Match input height to the root height if needed
          padding: '0 14px', // Adjust padding as needed
        },
        '& .MuiInputLabel-root': {
          lineHeight: '-10px',
          fontSize:"15px" // Adjust label line height to vertically center it
        },
      }}
    />
      </FormControl>
     
    </Box>
    </div>
  )
}

export default FormForFooter