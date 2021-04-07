import { FormControlLabel } from '@material-ui/core';
import React,{useState,useContext} from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { FlaskDataContext } from '../components/User';

type Props = {
    [x:string]:any;
}

let selectedItems:Array<string> = [] ;
export default function QuestionCheckBox(props:Props) {
    
    let {data,setData} = useContext(FlaskDataContext);

    const [list,setList] = useState(data.options);


    const handleCheckBoxes = (e:any,check:boolean)=>{
        let v = e.target.value;
        if(check)
        {
            selectedItems.push(v);
        }
        else
        {
            selectedItems = selectedItems.filter(value => value !== v);
        }
        setData({state:data.state,response:selectedItems},"")
        console.log(selectedItems);
    }   


    return (
        <div>
            <span>{data.text}</span>
            {
                list.map((item:any,index:number)=>{
                    return (
                         <FormControlLabel
                            key={index}
                            control={
                            <Checkbox
                                color="primary"
                            />
                            }
                            value={item}
                            onChange={handleCheckBoxes}
                            label={item}
                        />
                    ); 
                })
            }
        </div>
    )
}
