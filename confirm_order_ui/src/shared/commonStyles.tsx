import { createMuiTheme, makeStyles } from "@material-ui/core";



export const themeLight = createMuiTheme({
    palette: {
      background: {
        default: "#e4f0e2"
      }
    }
  });
  
export const themeDark = createMuiTheme({
    palette: {
      background: {
        default: "#272727"
      },
      text: {
        primary: "#C3C3C3"
      }
    }
  });


export const useStyles = makeStyles({
    actionButton:{
        margin:"20px",
    },
    paper:{
      backgroundColor:"#272727"
    }
});