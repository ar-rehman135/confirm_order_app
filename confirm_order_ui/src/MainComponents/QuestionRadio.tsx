import { FormControlLabel, Radio, FormControl, RadioGroup, Button } from '@material-ui/core';
import { useContext, useState } from 'react'
import { FlaskDataContext } from '../components/User';
import ActionButtons from './ActionButtons';

type Props = {
    [x:string]:any;
    setMessage?: any;
    setUserAge?: any
    setAlertScreen?: any;
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
    <div className="row" style={{width:"100%"}} >
      <div className="col-md-12 col-xs-12" style={{display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
        <p style={{color:"white"}} >{data.text}</p>
        <div className="row" style={{maxHeight:"300px", overflowY:"scroll", overflowX:"hidden", textAlign:"center",width:"50%" }} >
                {/* { */}
                {/* // list.map((item:any,index:number)=>{ */}
                        {/* // return ( */}
                            <div className="col-md-4" style={{ padding: "15px"}} >
                                <Button
                                    variant="contained"
                                    style={{width: "120px", height: "120px"}}
                                    onClick={()=>handleRadio("item")}
                                >
                                    {/* {item} */} abc
                                </Button>
                            </div>
                            <div className="col-md-4" style={{ padding: "15px"}} >
                                <Button
                                    variant="contained"
                                    style={{width: "120px", height: "120px"}}
                                    onClick={()=>handleRadio("item")}
                                >
                                    {/* {item} */} abc
                                </Button>
                            </div>
                            <div className="col-md-4" style={{ padding: "15px"}} >
                                <Button
                                    variant="contained"
                                    style={{width: "120px", height: "120px"}}
                                    onClick={()=>handleRadio("item")}
                                >
                                    {/* {item} */} abc
                                </Button>
                            </div>
                            <div className="col-md-4" style={{ padding: "15px"}} >
                                <Button
                                    variant="contained"
                                    style={{width: "120px", height: "120px"}}
                                    onClick={()=>handleRadio("item")}
                                >
                                    {/* {item} */} abc
                                </Button>
                            </div>
                           
                        {/* // );  */}
                    {/* // }) */}
                {/* // } */}
        </div>    
      </div>
      <ActionButtons 
        showSubmit={true} 
        disabledSubmit={val === "" || val === "None" } 
        setMesage={props.setMessage} 
        showBack={false}
        setAlertScreen={props.setAlertScreen} 
     />
    </div> 
    </>
    )
}
