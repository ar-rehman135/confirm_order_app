import { useContext } from "react";
import { FlaskDataContext } from "../components/User";
import { Button } from "@material-ui/core";
import { handleApi } from "../Api/handleApi";

type confirmOrder = {
  setMessage?: any;
  setAlertScreen?: any;
};

export default function OrderConfirmed(props: confirmOrder) {
  let { data, setData } = useContext(FlaskDataContext);
  const handleBack = async () => {
    let res = await handleApi("", "GET");
    props.setMessage("");
    props.setAlertScreen(false);
    setData(res, "back");
  };

  return (
    <>
      <div
        className="row"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="col-md-12 col-xs-12">
          <p style={{ color: "white", fontSize: "35px", textAlign: "center" }}>
            {data.text}
          </p>
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
