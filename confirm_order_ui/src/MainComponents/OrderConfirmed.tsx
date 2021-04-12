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
        <Grid item xs={12} md={12}>
            <p style={{color:"black", fontSize:"22px"}}>
                {data.text}
            </p>
            <ActionButtons 
                showSubmit={false} 
                setMesage={props.setMessage} 
                setAlertScreen={props.setAlertScreen}
            />
        </Grid>
    )
}
