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


const itemsNav = [{ title: "HOME" },
{ title: "BUY", dropdownItems: ["Books", "EBooks/EJournal", "Journal"] },
{ title: "ABOUT US", dropdownItems: ["Publication Division", "Vision And Mission"] },
{ title: "PUBLICATIONS", dropdownItems: ["Books", "EBooks/EJournals", "Journals", "Catalogue", "Emanelled Printers", "List of Reprints"] },
{ title: "FEEDBACK AND GRIEVANCE", dropdownItems: ["Feedback / Grievance", "Search Grievance", "Grievance Reopen"] },
{ title: "DOCUMENTS", dropdownItems: ["Royalty Structure", "Tenders", "Tenders Awarded", "RTI", "Budget", "Author Agreement", "Book Selection & Publishing Process", "Job Notification", "Orders And Notices", "Suo Moto Disclosure"] },
{ title: "BUSINESS", dropdownItems: ["Sales Emporium Address", "E Resource Aggregator", "Business Policy/Guidelines", "Agents(Books)", "Home Library Scheme", "Attractive Discounts", "Agents(Journals)", "Agents(Emp News)", "Agent Books Agreement"] },
{ title: "SUBMIT BOOK MANUSCRIPT", dropdownItems: ["Create Author Account", "Submission Process"] },
{ title: "VIEW MORE", dropdownItems: ["Citizen Charter", "Video Gallery", "Photo Gallery"] },
{ title: "WHO'S WHO" }

]



const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const [cartCounter, setCartCounter] = useState(0);
   


  const anchorRef = React.useRef(null);
  const usenavigate=useNavigate();

    const handleToggle = (title) => {

        setOpen((prevOpen) => !prevOpen);

        if (title=="HOME") {
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
                        <h1 className='text-[22px] font-normal'>Publication Division</h1>
                        <p className='text-[12px]'> Ministry of Information and Broadcasting <br />
                            Government of India
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