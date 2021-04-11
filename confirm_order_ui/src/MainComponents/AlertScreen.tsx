import { useContext } from "react";
import {
  FlaskDataContext,
  MyContext,
  ReactDataContext,
} from "../components/User";
import { Button, Grid } from "@material-ui/core";
import { handleApi } from "../Api/handleApi";

type alertScreen = {
  message: string;
  setMessage?: any;
};

export default function AlertScreen(props: alertScreen) {
  let { openAlert, setOpenAlert } = useContext(MyContext);
  let { state, response } = useContext(ReactDataContext);
  let { setData } = useContext(FlaskDataContext);

  const handleYes = async () => {
      let res = await handleApi({ state, response }, "POST");
      if (res) {
        setData(res, "", true);
      }
    }
    setOpenAlert(false);
  };

  let { data } = useContext(FlaskDataContext);
  return (
    <>
      <Grid container justify="space-evenly">
        <p style={{ color: "black", fontSize: "22px" }}>{props.message}</p>
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
    </>
  );
}
