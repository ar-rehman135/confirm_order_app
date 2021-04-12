import { Grid } from "@material-ui/core";
import React, {useContext} from "react";
import { FlaskDataContext } from '../components/User';
import { baseUrl } from "../shared/baseUrl";
import ActionButtons from './ActionButtons';

type ageconfirmProps = {
    setMessage?: any;
    setAlertScreen?: any;
}

export default function AgeConfirm1(props: ageconfirmProps) {
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
                                    {item.content + " For Age <= 25"}
                                </p>:
                                item.type === "Text" ?
                                <p style={{textAlign:"left"}}>
                                    {item.text}
                                </p> :
                                item.type === "Image" ?
                                    <img src={baseUrl+"/api/img"} alt={item.text} width="100%" style={{borderRadius:"50px", maxWidth:"300px"}} />
                                : ""
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
