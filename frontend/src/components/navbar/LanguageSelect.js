import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react';
import {useLanguage} from "../Context/Context"

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { language,toggleLanguage } = useLanguage();
  

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='text-[black] absolute -top-[15px] left-[30vw]'
        style={{border:"1px solid"}}
      >
        Language
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{handleClose()
    if (language!=="ENGLISH") {
        toggleLanguage();
    }    
    }}
       sx={{
        borderBottom:"1px solid black ",
        background:`${language==="ENGLISH"?"#9de99d":""}`
       }}
      
        >ENGLISH</MenuItem>
        <MenuItem onClick={()=>{handleClose()
          if (language!=="HINDI") {
            toggleLanguage();
        }    
        
        }}
        
        sx={{
            borderBottom:"1px solid black ",
            background:`${language!=="ENGLISH"?"#9de99d":""}`
           }}
        >HINDI</MenuItem>
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}
