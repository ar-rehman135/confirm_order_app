import {useContext} from "react";
import { FlaskDataContext } from '../components/User';
import { baseUrl } from "../shared/baseUrl";
import ActionButtons from './ActionButtons';

type ageconfirmProps = {
    setMessage?: any;
}

export default function AgeConfirm1(props: ageconfirmProps) {
    let {data} = useContext(FlaskDataContext);
    //console.log("data", data)
    return (
        <>
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
                                    <img src={baseUrl+"/api/img"} alt={item.text} width="350px" style={{borderRadius:"50px"}} />
                                : ""
                            }
                        </div>
                        
                    ); 
                })
            }
            <ActionButtons showSubmit={false} setMesage={props.setMessage} />
        </>
    )
}
