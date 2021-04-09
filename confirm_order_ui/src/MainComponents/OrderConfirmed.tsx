import {useContext} from "react";
import { FlaskDataContext } from '../components/User';
import ActionButtons from './ActionButtons';

type confirmOrder = {
    setMessage?: any
}

export default function OrderConfirmed(props:confirmOrder ) {
    let {data} = useContext(FlaskDataContext);
    return (
        <>
            <p style={{color:"black", fontSize:"22px"}}>
                {data.text}
            </p>
            <ActionButtons showSubmit={false} setMesage={props.setMessage} />
        </>
    )
}
