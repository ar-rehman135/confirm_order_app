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
    <div>
      <Grid container justify="space-evenly">
        <Grid item xs={12} md={12}>
          <div className="d-flex flex-row justify-content-center">
            <Button
              variant="contained"
              disabled={props.showBack}
              className={"col-4"}
              style={{ margin: "20px" }}
              type="reset"
              onClick={handleBack}
            >
              Back
            </Button>
            {props.showSubmit === true ? (
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={props.disabledSubmit}
                className={"col-4"}
                style={{ margin: "20px" }}
              >
                Submit
              </Button>
            ) : (
              ""
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ActionButtons;
