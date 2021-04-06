import React from 'react'
import { TextField } from '@material-ui/core'

type Props = {
    id?:string;
    label?:string;
    value?:string;
    [x:string]:any;
}

function MyTextField(props:Props) {
    return (
        <>
          <TextField {...props}/>
        </>
    )
}


export default MyTextField