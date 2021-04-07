import React,{useEffect,useState,useContext} from 'react'
import PropTypes from 'prop-types'
import MyTextField from '../components/MyTextField';
import { handleApi } from '../Api/handleApi';
import ActionButtons from './ActionButtons';
import { debug } from '../shared/common';
import QuestionTextField from './QuestionTextField';
import QuestionCheckBox from './QuestionCheckBox';
import QuestionRadio from './QuestionRadio';
import { FlaskDataContext, FlaskDataType, MyContext } from '../components/User';
import AlertDialogSlide from '../components/AlertDialogSlide';





function Question() {
    let {data,setData} = useContext(FlaskDataContext);
    let {openAlert} = useContext(MyContext);


    return (
            <div style={{margin:"100px",padding:"50px 0px"}}>
                {
                    data.state === "A" ?
                    (
                        <QuestionTextField />
                    )
                    :data.state === "B1" ?
                    (
                        <QuestionCheckBox />
                    )
                    :data.state === "B2" ?
                    (
                        <QuestionRadio />
                    ):""
                }
                <ActionButtons />
                <AlertDialogSlide />
            </div>
    )
}


export default Question

