import {useContext} from "react";
import { FlaskDataContext } from '../components/User';
import {Grid } from "@material-ui/core";
import ActionButtons from './ActionButtons';

type confirmOrder = {
    setMessage?: any;
    setAlertScreen?: any
}

export default function OrderConfirmed(props:confirmOrder ) {
let {data} = useContext(FlaskDataContext);
return (
    <>
    <div className="row" style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}} >
        <div className="col-md-12 col-xs-12">
            <p style={{color:"white", fontSize:"35px", textAlign:"center"}}>
                {data.text}
            </p> 
        </div>
        
    </div> 
    <ActionButtons 
            showSubmit={true}
            disabledSubmit={true}
            setMesage={props.setMessage} 
            setAlertScreen={props.setAlertScreen}
        />
    </>   
    )
}
