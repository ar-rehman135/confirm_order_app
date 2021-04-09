import { FormControlLabel, Radio, FormControl, RadioGroup } from '@material-ui/core';
import { useContext, useState } from 'react'
import { FlaskDataContext } from '../components/User';
import ActionButtons from './ActionButtons';

type Props = {
    [x:string]:any;
    setMessage?: any;
    setUserAge?: any
}

export default function QuestionRadio(props:Props) {

    let {data,setData} = useContext(FlaskDataContext);
    const [val,setVal] = useState("");
    const [list] = useState(data.options);
    const handleRadio = (e:any)=>{
        setVal(e);
        setData({state:data.state,response:e},"")
        props.setMessage("Selected Answer is " + e + " Confirm ?");
        props.setUserAge(e);
    }  

    return (
        <>
        <p style={{color:"black"}} >{data.text}</p>
        <div style={{paddingLeft:"15px", maxHeight:"300px", overflowY:"scroll", overflowX:"hidden", display:"flex"}}>
        <FormControl required error={val ==="" || val === "None"} component="fieldset" style={{textAlign:"left"}} >
            <RadioGroup defaultValue="" aria-label="age" name="customized-radios">
            {
            list.map((item:any,index:number)=>{
                    return (
                        <FormControlLabel
                                key={index}
                                control={
                                <Radio
                                    color="primary"
                                    size="small"
                                    onChange={()=>handleRadio(item)}
                                    
                                />
                                }
                                label={item}
                                value={item}
                        />
                    ); 
                })
            }
            </RadioGroup>
            
        </FormControl>
    </div>
    <ActionButtons showSubmit={true} disabledSubmit={val === "" || val === "None" } setMesage={props.setMessage} showBack={false} />
    </>
    )
}
