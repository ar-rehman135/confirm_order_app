import React,{useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import {  FlaskDataContext, MyContext, ReactDataContext } from './User';
import { handleApi } from '../Api/handleApi';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Alertprops = {
  message?: any
};

export default function AlertDialogSlide(props: Alertprops) {
    let {openAlert,setOpenAlert} = useContext(MyContext);
    let {state,response} = useContext(ReactDataContext);
    let {setData} = useContext(FlaskDataContext);

  const handleClose = async (action:boolean) => {
    //console.log("calling on hit outside");
    if(action)
    {
        let res = await handleApi({state,response},"POST");
        if (res) {
          setData(res,"",true);
          //console.log(res);
        }
    }
    setOpenAlert(false);
  };

  return (
    <div>
      <Dialog
        open={openAlert}
        TransitionComponent={Transition}
        keepMounted
        onClose={(e:any)=>handleClose(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
              {props.message}
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
    </div>
  );
}
