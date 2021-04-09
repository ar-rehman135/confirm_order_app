import {useContext,useState} from 'react'
import MyTextField from '../components/MyTextField'
import { FlaskDataContext } from '../components/User';
import ActionButtons from './ActionButtons';
import {Grid} from '@material-ui/core';

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
        <Grid item xs={12} md={12} style={{textAlign:"center"}}>
            {
                data.type === "text-input" ? (
                    <>
                        <MyTextField required {...props} size="small" variant="outlined" className="col-12"  type="number" InputProps={{inputProps:{max:120, min:5}}} label={data.text} value={value} onChange={handleChange} style={{color:'black'}} ></MyTextField>
                    </>
                ): 
                (<></>)
            }
            <ActionButtons showSubmit={true} showBack={true} />
        </Grid>
    )
}
