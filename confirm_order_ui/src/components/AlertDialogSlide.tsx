import React,{useEffect,useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import {  FlaskDataContext, MyContext, ReactDataContext } from './User';
import { handleApi } from '../Api/handleApi';
import MessageAlert from './MessageAlert';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function AlertDialogSlide() {
    let {openAlert,setOpenAlert} = useContext(MyContext);
    let {state,response} = useContext(ReactDataContext);
    let {data,setData} = useContext(FlaskDataContext);
    const [open, setOpen] = React.useState(openAlert);
    const [openMessageAlert, setOpenMessageAlert] = React.useState(false);


  const handleClose = async (action:boolean) => {
    if(action)
    {
        let res = await handleApi({state,response},"POST");
        if(data.state === "B1" && res.state === "C1")
        {
            setOpenMessageAlert(true);
        }
        setData(res);
        console.log(res);
    }

    setOpenAlert(false);
  };

  console.log(response);
  let selectedItemsDescription;
  if(response)
  {
     selectedItemsDescription = "Ice-Cream with " + response.toString() + ", Is that it?";
  }

  return (
    <div>
      <Dialog
        open={openAlert}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle id="alert-dialog-slide-title">{"Selected Items"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
              {selectedItemsDescription}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e:any)=>{handleClose(true)}} color="primary">
            Yes
          </Button>
          <Button onClick={(e:any)=>{handleClose(false)}} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
      {
        openMessageAlert && 
        <MessageAlert open={openMessageAlert} status={openMessageAlert?"success":"error"} message={openMessageAlert?"Success":"Error"} />
      }
    </div>
  );
}
