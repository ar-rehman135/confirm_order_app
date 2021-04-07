import React from 'react'
import PropTypes from 'prop-types'

type Props = {
    type?:string;
    data?:string;
}

function Question(props:Props) {
    
    let element:any;
    switch(props.type){

        case "text-input":
            element = "";
            break;

    }
    
    return (
        <>
                {element}
        </>
    )
}


export default Question

