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
          हम अपने रेफरल कार्यक्रम के माध्यम से आपको अधिक पुस्तकों का आनंद लेने और पैसे बचाने का मौका देने के लिए उत्साहित हैं। यह सरल है: अपने अद्वितीय रेफरल कोड को दोस्तों और परिवार के साथ साझा करें, और जब वे इसका उपयोग किताब खरीदने के लिए करेंगे, तो न केवल उन्हें उनकी खरीदारी पर छूट मिलेगी, बल्कि आपको अपने अगले ऑर्डर पर भी छूट मिलेगी!
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{width:"100%"}}>
     <p className='w-full text-center font-[500]'> कोड:   {code}</p>
         
          <Button onClick={handleClose} autoFocus>
          कॉपी
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}