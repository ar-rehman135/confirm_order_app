import { useContext } from "react";
import {
  FlaskDataContext,
  ReactDataContext,
} from "../components/User";
import { Button } from "@material-ui/core";
import { handleApi } from "../Api/handleApi";


type alertScreen = {
  message: string;
  setMessage?: any;
  setAlertScreen?: any;
};

export default function AlertScreen(props: alertScreen) {
  let { state, response } = useContext(ReactDataContext);
  let { setData } = useContext(FlaskDataContext);

  const handleYes = async () => {
    let res = await handleApi({ state, response }, "POST");
    if (res) {
      setData(res, "", true);
    }
  }
  const handleNo = async () => {
    props.setAlertScreen(false);
  }

  return (
    <>
      <div className="row" style={{width:"100%"}} >
        <div className="col-md-12 col-xs-12" style={{textAlign:"center"}}>
          <p style={{ color: "white", fontSize: "15px" }}>{props.message}</p>
          <Button
            variant="contained"
            className="alertScreenButton"
            onClick={handleYes}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            onClick={handleNo}
            className="alertScreenButton"
          >
            No
          </Button>
        </div>
      </div>
      <div className="footer">
        <div className="row" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <div className="col-11" style={{textAlign:"right"}}>
            <Button
            variant="contained"
            style={{backgroundColor: "grey", color:"white", margin:"30px 5px"}}
            onClick={handleNo}
            >
            Back
            </Button>
        </div>
        </div>
    </div>
  </> 
  );
}
