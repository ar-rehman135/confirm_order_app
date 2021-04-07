import { TextField } from 'material-ui'
import React,{useContext,useState} from 'react'
import MyTextField from '../components/MyTextField'
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
        <>
            {
                data.type === "text-input" ? (
                    <>
                        <MyTextField {...props} size="small" variant="outlined" className="col-12"  type="number" InputProps={{inputProps:{max:120}}} label={data.text} value={value} onChange={handleChange} ></MyTextField>
                    </>
                ): 
                (<></>)
            }
        </>
    )
}
