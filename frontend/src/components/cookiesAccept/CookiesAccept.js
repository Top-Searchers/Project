// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Slide from '@mui/material/Slide';
// import { useEffect } from 'react';
// import "./cookies.css"

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function AlertDialogSlide() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpen(true);
  //   }, 1000);
  // }, []);

//   return (
//     <React.Fragment>
//       <div className="dialog-container">
//         <Dialog
//           open={open}
//           TransitionComponent={Transition}
//           keepMounted
//           aria-describedby="alert-dialog-slide-description"
//           maxWidth="xl" // Set the maximum width to 'xl' for full screen width
//           sx={{position:"relative",
//         left:"-0%",
//         display:"flex",
//         flexDirection:"row",
//         width:"70vw"
//         }}
//         >
//           <DialogContent>
//             <DialogContentText id="alert-dialog-slide-description">
//               YOU HAVE TO ACCEPT COOKIES PLEASE
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>REJECT</Button>
//             <Button onClick={handleClose}>ACCEPT</Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     </React.Fragment>
//   );
// }



import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));



  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 3000);
  }, []);
  return (
    <React.Fragment>
    
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {/* {"Use Google's location service?"} */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          "By clicking 'ACCEPT,' you agree to our use of cookies to enhance your browsing experience. For more information on how we use cookies and to manage your preferences, please review our Cookie Policy."
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}