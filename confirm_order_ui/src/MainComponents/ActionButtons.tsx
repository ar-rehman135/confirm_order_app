import { useContext } from "react";
import { Button, Grid } from "@material-ui/core";
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
          <div className="row">
            <div className="col-xs-4 col-md-4" style={{textAlign:"center"}}>
              <Button
                variant="contained"
                disabled={props.showBack}
                style={{backgroundColor: "grey", color:"white", margin:"30px 0px"}}
                onClick={handleBack}
                className="col-md-2 col-8"
              >
                Back
              </Button>
            </div>
            <div className="col-xs-4 col-md-4"><span></span></div>
            <div className="col-xs-4 col-md-4" style={{textAlign:"center"}}>
              {props.showSubmit === true ? (
                <Button
                  variant="contained"
                  type="submit"
                  disabled={props.disabledSubmit}
                  className="col-md-2 col-8"
                  style={{margin:"30px 0px", color:"white", backgroundColor:"#3F51B5" }}
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
