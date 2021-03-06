import { useContext } from "react";
import { Button } from "@material-ui/core";
import { handleApi } from "../Api/handleApi";
import { FlaskDataContext } from "../components/User";

type ActionButtonProps = {
  showSubmit?: boolean;
  disabledSubmit?: boolean;
  setMesage?: any;
  showBack?: boolean;
  setAlertScreen?: any;
};

function ActionButtons(props: ActionButtonProps) {
  let { setData } = useContext(FlaskDataContext);

  const handleBack = async () => {
    let res = await handleApi("", "GET");
    props.setMesage("");
    props.setAlertScreen(false);
    setData(res, "back");
  };

  return (
    <div className="footer">
          <div className="row" style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
            <div className="col-4" style={{textAlign:"center"}}>
              <Button
                variant="contained"
                disabled={props.showBack}
                style={{backgroundColor: "#313537", color:"white", margin:"30px 5px"}}
                onClick={handleBack}
                className="col-md-2"
              >
                Back
              </Button>
            </div>
            
            <div className="col-4" style={{textAlign:"center"}}>
              {props.showSubmit === true ? (
                <Button
                  variant="contained"
                  type="submit"
                  disabled={props.disabledSubmit}
                  className="col-md-2"
                  style={{margin:"30px 5px",color:"white", backgroundColor:"#3F51B5" }}
                >
                  Submit
                </Button>
              ) : (
                ""
              )}
            </div>
            
          </div>
    </div>
  );
}

export default ActionButtons;
