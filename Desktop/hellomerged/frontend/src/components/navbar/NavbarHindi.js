import React, { useEffect, useState } from 'react'
import "../../style/navbar.css"
// import {ArrowDropDownIcon} from '@mui/icons-material';
import { ListItem } from '@mui/material';
import List from '@mui/material/List';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LanguageSelect from "./LanguageSelect"


const itemsNav= [
    {"title": "होम"},
    {"title": "खरीदें", "dropdownItems": ["पुस्तकें", "ईबुक्स / ईजर्नल", "जर्नल"]},
    {"title": "हमारे बारे में", "dropdownItems": ["प्रकाशन विभाग", "दृष्टिकोण और मिशन"]},
    {"title": "प्रकाशन", "dropdownItems": ["पुस्तकें", "ईबुक्स / ईजर्नल्स", "जर्नल्स", "सूचीपत्र", "इमेल्ड प्रिंटर्स", "पुनर्मुद्रण की सूची"]},
    {"title": "प्रतिक्रिया और शिकायत", "dropdownItems": ["प्रतिक्रिया / शिकायत", "शिकायत खोजें", "शिकायत पुनः खोलें"]},
    {"title": "दस्तावेज़", "dropdownItems": ["रॉयल्टी संरचना", "निविदाएँ", "पुरस्कृत निविदाएं", "आरटीआई", "बजट", "लेखक समझौता", "पुस्तक चयन और प्रकाशन प्रक्रिया", "नौकरी अधिसूचना", "आदेश और सूचनाएं", "स्वत: मोटो प्रकटीकरण"]},
    {"title": "व्यवसाय", "dropdownItems": ["बिक्री एम्पोरियम पता", "ई संसाधन एग्रीगेटर", "व्यापार नीति / दिशानिर्देश", "एजेंट्स (पुस्तकें)", "होम लाइब्रेरी योजना", "आकर्षक छूट", "एजेंट्स (जर्नल्स)", "एजेंट्स (एम्प न्यूज)", "एजेंट पुस्तकें समझौता"]},
    {"title": "पुस्तक पांडुलिपि जमा करें", "dropdownItems": ["लेखक खाता बनाएँ", "सबमिशन प्रक्रिया"]},
    {"title": "और देखें", "dropdownItems": ["नागरिक चार्टर", "वीडियो गैलरी", "फोटो गैलरी"]},
    {"title": "कौन कौन से"}
]




const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const [cartCounter, setCartCounter] = useState(0);
   


  const anchorRef = React.useRef(null);
  const usenavigate=useNavigate();

    const handleToggle = (title) => {

        setOpen((prevOpen) => !prevOpen);

        if (title=="होम") {
          usenavigate("/")
        }
      };
    
      const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      };
      function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        } else if (event.key === 'Escape') {
          setOpen(false);
        }
      }
    
    
      


    const menuContent = itemsNav.map((item, index) => {
        

        return(
         <div key={index}>
      
        {item.dropdownItems && (
         <Popper
         open={open}
         anchorEl={anchorRef.current}
         role={undefined}
         placement="bottom-start"
         transition
         disablePortal
       >
         {({ TransitionProps, placement }) => (
           <Grow
             {...TransitionProps}
             style={{
               transformOrigin:
                 placement === 'bottom-start' ? 'left top' : 'left bottom',
             }}
           >
             <Paper>
               <ClickAwayListener onClickAway={handleClose}>
                 <MenuList
                   autoFocusItem={open}
                   id="composition-menu"
                   aria-labelledby="composition-button"
                   onKeyDown={handleListKeyDown}
                 >
                   <MenuItem onClick={handleClose}>Profile</MenuItem>
                   <MenuItem onClick={handleClose}>My account</MenuItem>
                   <MenuItem onClick={handleClose}>Logout</MenuItem>
                 </MenuList>
               </ClickAwayListener>
             </Paper>
           </Grow>
         )}
       </Popper>
        )}
      </div>
        )
    });

    const [isVisible, setIsVisible] = useState(true);
    let debounceTimer;

    const handleScroll = () => {
      const threshold = 100;
      if (debounceTimer) clearTimeout(debounceTimer);
      
      debounceTimer = setTimeout(() => {
       if (window.scrollY>threshold) {
        setIsVisible(false);
        
       }
       else if(window.scrollY===0){
        setIsVisible(true)
       }
      }, 0); // Debounce time of 100ms
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (debounceTimer) clearTimeout(debounceTimer);
      };
    }, []);


    const data=    useSelector(state=>state?.counter.items)
    useEffect(() => {
    setCartCounter(data.length)
    console.log(cartCounter);
    
    
    }, [data])
    
    return (
        <>
            <nav className={` sticky bg-white z-[2] top-0 shadow-md mb-4 w-[100vw] ${isVisible?"translate-y-[0px]":"-translate-y-[90px]"} transition ease-in-out delay-[500]  `}>
               { <div className='flex pt-[10px] items-center ml-[15px] w-[100%]'>
                    <img src="/images/logo.png" alt=""
                        className='w-[40px] h-[44px] '
                    />
                    <div className='w-[21vw] h-[9vh] mx-[10px]'>
                        <h1 className='text-[22px] font-normal'>प्रकाशन प्रभाग</h1>
                        <p className='text-[12px]'> सूचना एवं प्रसारण मंत्रालय<br />
                        भारत सरकार
                        </p>

                    </div>
                    <img src="/images/logo192.png" alt=""
                        className='w-[90px] h-[65px] mx-[5px] '
                    />
                    <img src="/images/swachh_bharat.jpg" alt=""
                        className='w-[90px] h-[65px] mx-[5px]'
                    />
                    <img src="/images/G20_logo.png" alt=""
                        className='w-[90px] h-[65px] mx-[5px]'
                    />
                   <div className='w-1/2 relative   '>

<LanguageSelect

/>
   </div>
                </div>}

                <div className='w-[100vw] mt-[30px]'>
        <List className='w-full flex font-[700] text-[12px] items-center justify-center'>
          {itemsNav.map((item, index) => {
            return (
              <div key={index}>
                <ListItem
                   ref={anchorRef}
                   id="composition-button"
                   aria-controls={open ? 'composition-menu' : undefined}
                   aria-expanded={open ? 'true' : undefined}
                   aria-haspopup="true"
                   onClick={()=>handleToggle(item.title)}
                  className='hover:cursor-pointer'
                >
                  {item.title}
                  {/* {item.dropdownItems && <ArrowDropDownIcon />} */}
                </ListItem>
              </div>
            );
          })}
         <div className='relative'>

              <ShoppingCartIcon
          sx={{
            width:"28px",
            height:"31px",
            marginLeft:"36px",
            position:"relative",
            "&:hover":{
              cursor:"pointer"
            }
          }}

          onClick={()=>{
            usenavigate("/cart")
            
          }}
          />

          <p className='absolute -top-3 -right-3 text-[white] bg-[purple] w-[20px] h-[20px] flex justify-center rounded-full'>{cartCounter}</p>
        
            </div>
        </List>
      </div>
                {menuContent}


<div className='w-full  marquee'>
   <p>
    heloo
   </p>

</div>
            </nav>
        </>
    )
}

export default Navbar