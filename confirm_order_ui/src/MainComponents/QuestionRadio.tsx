import {
  Button,
  Grid,
} from "@material-ui/core";
import {} from "@material-ui/icons";
import { useContext, useState } from "react";
import { handleApi } from "../Api/handleApi";
import { FlaskDataContext } from "../components/User";

type Props = {
  [x: string]: any;
  setMessage?: any;
  setUserAge?: any;
  setAlertScreen?: any;
};

export default function QuestionRadio(props: Props) {
  let { data, setData } = useContext(FlaskDataContext);
  const [list] = useState(data.options);
  const handleRadio = (e: any) => {
    console.log('e', e);
    if (e !== 'NONE' && e !== 'None') {
        setData({ state: data.state, response: e }, "");
        props.setMessage("Selected Answer is " + e + " Confirm ?");
        props.setAlertScreen(true);
        props.setUserAge(e);
    }
    
  };
  const handleBack = async () => {
    let res = await handleApi("", "GET");
    props.setMessage("");
    props.setAlertScreen(false);
    setData(res, "back");
  };

  return (
    <>
      <div className="row" style={{ width: "100%" }}>
        <div
          className="col-md-12 col-xs-12"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p style={{ color: "white" }}>{data.text}</p>
          <div
            className="row"
            style={{
              maxHeight: "300px",
              overflowY: "scroll",
              overflowX: "hidden",
              textAlign: "center",
              maxWidth: "360px",
            }}
          >
            {list.map((item: any, index: number) => {
              return (
                <Grid item md={6} xs={6} style={{ padding: "15px" }}>
                  <Button
                    variant="contained"
                    style={{ width: "120px", height: "120px" }}
                    onClick={() => handleRadio(item)}
                  >
                    {item}
                  </Button>
                </Grid>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer">
          <div
            className="row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="col-11" style={{ textAlign: "right" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  margin: "30px 5px",
                }}
                onClick={handleBack}
              >
                Back
              </Button>
            </div>
          </div>
        </div>
    </>
  );
}
