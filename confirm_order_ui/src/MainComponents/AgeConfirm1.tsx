import { Button, Grid } from "@material-ui/core";
import { useContext } from "react";
import { handleApi } from "../Api/handleApi";
import { FlaskDataContext } from "../components/User";
import { baseUrl } from "../shared/baseUrl";

type ageconfirmProps = {
  setMessage?: any;
  setAlertScreen?: any;
};

export default function AgeConfirm1(props: ageconfirmProps) {
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
        }}
      >
        <Grid item xs={12} md={12} style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
        }}>
          {data.content.map((item: any, index: number) => {
            return (
              <Grid key={index} item xs={12} md={8} style={{display:"flex", alignItems:"center", justifyContent:"center" ,width:"100%"}} >
                {item.type === "Title" ? (
                  <div style={{backgroundColor:"#313537", width:"100%", textAlign:"center"}}>
                      <p style={{color: "white", height: "40px", fontSize:"30px" }}>
                        {item.content + " For Age <= 25"}
                     </p>
                  </div>
                ) : item.type === "Text" ? (
                  <p style={{ textAlign: "left",color: "white", paddingTop:"5px" }}>{item.text}</p>
                ) : item.type === "Image" ? (
                  <img
                    src={baseUrl + "/api/img"}
                    alt={item.text}
                    width="100%"
                    style={{ borderRadius: "50px", maxWidth: "300px" }}
                  />
                ) : (
                  ""
                )}
              </Grid>
            );
          })}
        </Grid>
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
                backgroundColor: "#313537",
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
