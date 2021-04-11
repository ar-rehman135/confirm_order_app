import { useContext, useState } from "react";
import QuestionTextField from "./QuestionTextField";
import QuestionCheckBox from "./QuestionCheckBox";
import QuestionRadio from "./QuestionRadio";
import { FlaskDataContext } from "../components/User";
import AlertDialogSlide from "../components/AlertDialogSlide";
import OrderConfirmed from "./OrderConfirmed";
import AgeConfirm1 from "./AgeConfirm1";
import AgeConfirm2 from "./AgeConfirm2";

function Question() {
  let { data } = useContext(FlaskDataContext);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertScreen, setAlertScreen] = useState(false);
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
      <div style={{ color: "black" }}>Welcome To Confirm Order App</div>
      <div style={{ marginTop: "40px" }}>
        {data.state === "A" ? (
          <QuestionTextField />
        ) : data.state === "B1" ? (
          <QuestionCheckBox
            setMessage={(val: string) => setAlertMessage(val)}
            setAlertScreen={(val: boolean) => setAlertScreen(val)}
          />
        ) : data.state === "B2" ? (
          <QuestionRadio
            setMessage={(val: string) => setAlertMessage(val)}
            setUserAge={(val: string) => setAge(val)}
          />
        ) : data.state === "C1" ? (
          <OrderConfirmed setMessage={(val: string) => setAlertMessage(val)} />
        ) : data.state === "C2" && chk_age(age) === 0 ? (
          <AgeConfirm1 setMessage={(val: string) => setAlertMessage(val)} />
        ) : data.state === "C2" && chk_age(age) === 1 ? (
          <AgeConfirm2 setMessage={(val: string) => setAlertMessage(val)} />
        ) : (
          ""
        )}
        <AlertDialogSlide message={alertMessage} />
      </div>
    </div>
  );
}

export default Question;
