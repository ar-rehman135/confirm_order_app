import {useContext} from "react";
import { FlaskDataContext } from '../components/User';
import ActionButtons from './ActionButtons';

type ageconfirmProps = {
    setMessage?: any;
}
export default function AgeConfirm2(props: ageconfirmProps) {
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
            <ActionButtons showSubmit={false} setMesage={props.setMessage} />
        </>
    )
}
