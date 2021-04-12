import { useContext } from "react";
import {
  FlaskDataContext,
  ReactDataContext,
} from "../components/User";
import { Button, Grid } from "@material-ui/core";
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
      <Grid container justify="space-evenly">
        <Grid item xs={12} md={10}>
        <p style={{ color: "black", fontSize: "15px" }}>{props.message}</p>
          <div className="d-flex flex-row justify-content-center">
            <Button
              variant="contained"
              className={"col-4"}
              style={{ margin: "20px" }}
              onClick={handleYes}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNo}
              className={"col-4"}
              style={{ margin: "20px" }}
            >
              No
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
