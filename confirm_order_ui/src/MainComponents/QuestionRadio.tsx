import { FormControlLabel, Radio } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { FlaskDataContext } from '../components/User';

type Props = {
    [x:string]:any;
}

export default function QuestionRadio(props:Props) {

    let {data,setData} = useContext(FlaskDataContext);


    const [list,setList] = useState(data.options);

    
    return (
        <div>
            <span>{data.text}</span>
            <div style={{maxHeight:"300px" , overflow:"auto"}}>
                {
                    list.map((item:any,index:number)=>{
                        return (
                            <FormControlLabel
                                key={index}
                                control={
                                <Radio
                                    color="primary"
                                    size="small"
                                />
                                }
                                label={item}
                            />
                        ); 
                    })
                }        
            </div>
        </div>
    )
}
