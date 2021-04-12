import { useContext, useState } from "react";
import QuestionTextField from "./QuestionTextField";
import QuestionCheckBox from "./QuestionCheckBox";
import QuestionRadio from "./QuestionRadio";
import { FlaskDataContext, MyContext } from "../components/User";
import OrderConfirmed from "./OrderConfirmed";
import AgeConfirm1 from "./AgeConfirm1";
import AgeConfirm2 from "./AgeConfirm2";
import AlertScreen from "./AlertScreen";

function Question() {
  let { data } = useContext(FlaskDataContext);
  let {openAlert, setOpenAlert} = useContext(MyContext);
  //console.log("openAlert", openAlert);
  const [alertMessage, setAlertMessage] = useState("");
  const [age, setAge] = useState("");

  const chk_age = (a: string) => {
    const chk_age = parseInt(a);
    if (chk_age >= 18 && chk_age <= 25) {
      return 0;
    } else {
      return 1;
    }
  };

  return (
    <div
      style={{
        margin: "5%",
        padding: "50px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ color: "black",fontFamily:"monospace" }}><h2>Welcome To Confirm Order App</h2></div>
      <div style={{ marginTop: "40px" }}>
        {
          data.state === "A" ? (
            <QuestionTextField />
        ) : 
          data.state === "B1" && openAlert === false ? (
            <QuestionCheckBox
              setMessage={(val: string) => setAlertMessage(val)}
              setAlertScreen={(val: boolean) => setOpenAlert(val)}
            />
        ) : 
          data.state === "B2" && openAlert === false ? (
            <QuestionRadio
              setMessage={(val: string) => setAlertMessage(val)}
              setUserAge={(val: string) => setAge(val)}
              setAlertScreen={(val: boolean) => setOpenAlert(val)}
            />
        ) : 
          data.state === "C1" ? (
            <OrderConfirmed 
            setMessage={(val: string) => setAlertMessage(val)} 
            setAlertScreen={(val:boolean)=>setOpenAlert(val)}
            />
        ) : 
          data.state === "C2" && chk_age(age) === 0 ? (
            <AgeConfirm1 setMessage={(val: string) => setAlertMessage(val)} 
            setAlertScreen={(val:boolean)=>setOpenAlert(val)}
            />
        ) : 
          data.state === "C2" && chk_age(age) === 1 ? (
            <AgeConfirm2 setMessage={(val: string) => setAlertMessage(val)} 
            setAlertScreen={(val:boolean)=>setOpenAlert(val)}
            />
        ) : 
          openAlert === true ? (
            <AlertScreen message={alertMessage} 
            setMessage={(val: string) => setAlertMessage(val)} 
            setAlertScreen={(val:boolean)=>setOpenAlert(val)} />
        ) :

        (
          ""
        )
        }
      </div>
    </div>
  );
}

export default Question;
