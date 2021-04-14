import {useContext,useState} from 'react'
import ActionButtons from './ActionButtons';

import { TextField } from '@material-ui/core'
import { FlaskDataContext } from '../components/User';

type Props = {
    [x:string]:any;
}


export default function QuestionTextField(props:Props) {

    let {data,setData} = useContext(FlaskDataContext);
    const [value,setValue] = useState("");

    const handleChange = (e:any) => {
        let v = e.target.value;
        setValue(v);
        setData({state: data.state, response: v},"")
    }

    return (
        <div className="row" style={{width:"100%"}} >
            <div className="col-xs-4 col-md-4"></div>
            <div className="col-xs-4 col-md-4">
                {
                    data.type === "text-input" ? (
                        <>  
                            <p style={{color:"white", textAlign:"left"}}>{data.text}</p>
                            <TextField required size="small" variant="outlined" type="number" InputProps={{inputProps:{max:120, min:5}}} value={value} 
                            onChange={handleChange} 
                            style={{color:'black', backgroundColor:"white"}} 
                            className="col-12"
                            />
                        </>
                    ): 
                    (<></>)
                }
                
            </div>
            <div className="col-xs-4 col-md-4"></div>

        <ActionButtons showSubmit={true} showBack={true} />
        </div>
    )
}
