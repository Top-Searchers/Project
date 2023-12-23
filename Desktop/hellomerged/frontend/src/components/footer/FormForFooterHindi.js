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
      label="नाम"
      defaultValue=""
      sx={{marginTop:"30px",
        '& .MuiInputBase-root': {
          height: '40px', // Set your desired height
          width:"20vw"
        },
        '& .MuiInputBase-input': {
          height: '40px', // Match input height to the root height if needed
          padding: '0 14px', // Adjust padding as needed
        },
        '& .MuiInputLabel-root': {
          lineHeight: '14px',
          fontSize:"15px" // Adjust label line height to vertically center it
        },
      }}
    />
      <TextField
      required
      id="outlined-required"
      label="ईमेल"
      defaultValue=""
      sx={{marginTop:"30px",
        '& .MuiInputBase-root': {
          height: '40px', // Set your desired height
          width:"20vw"
        },
        '& .MuiInputBase-input': {
          height: '40px', // Match input height to the root height if needed
          padding: '0 14px', // Adjust padding as needed
        },
        '& .MuiInputLabel-root': {
          lineHeight: '14px',
          fontSize:"15px" // Adjust label line height to vertically center it
        },
      }}
    />
    <button
     className='mt-[57px] h-[6vh]  border-[1px] rounded-[10px] font-[600] bg-[#fff2f2]
    hover:text-[white] hover:!bg-red-500
     '
    >प्रकाशन की सदस्यता लें</button>
      </FormControl>

     
    </Box>
    </div>
  )
}

export default FormForFooter