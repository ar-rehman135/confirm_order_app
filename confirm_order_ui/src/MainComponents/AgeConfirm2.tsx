import {useContext} from "react";
import { FlaskDataContext } from '../components/User';
import ActionButtons from './ActionButtons';
import {Grid } from "@material-ui/core";

type ageconfirmProps = {
    setMessage?: any;
    setAlertScreen?: any;
}
export default function AgeConfirm2(props: ageconfirmProps) {
    let {data} = useContext(FlaskDataContext);
    //console.log("data", data)
    return (
        <Grid item xs={12} md={12}>
            {
                data.content.map((item:any,index:number)=>{
                    return (
                        <div key={index} style={{color:"black"}}>
                            { 
                                item.type === "Title" ?
                                <p style={{backgroundColor:"Lightgrey"}}>
                                    {item.content + " For Age Greater Then 25"}
                                </p>:
                                item.type === "Text" ?
                                <p style={{textAlign:"left"}}>
                                    {item.text}
                                </p>:
                                item.type === "text" ?
                                <p style={{textAlign:"left"}}>
                                    {item.text}
                                </p>:""
                            }
                        </div>
                        
                    ); 
                })
            }
            <ActionButtons 
                showSubmit={false} 
                setMesage={props.setMessage} 
                setAlertScreen={props.setAlertScreen}
            />
        </Grid>
    )
}
