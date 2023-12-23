import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog( {isModalOpen,setIsModalOpen,code}) {
//   const [open, setOpen] = React.useState(false);



  const handleClickOpen = () => {
    
   setIsModalOpen(true)
  };

  const handleClose = () => {
    navigator.clipboard.writeText(code)
    setIsModalOpen(false)
  };

 
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          We're excited to offer you a chance to enjoy more books and save money through our Referral Program. It's simple: share your unique referral code with friends and family, and when they use it to buy a book, not only will they get a discount on their purchase, but you'll also receive a discount on your next order!
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{width:"100%"}}>
     <p className='w-full text-center font-[500]'> CODE:   {code}</p>
         
          <Button onClick={handleClose} autoFocus>
            COPY
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}