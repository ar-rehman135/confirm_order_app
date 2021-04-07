import './App.css';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Button, Grid, makeStyles, Paper } from '@material-ui/core';
import MyTextField from './components/MyTextField'
import React from 'react';
import ActionButtons from './MainComponents/ActionButtons';
import { themeDark, useStyles } from './shared/commonStyles';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  const classes = useStyles();

  

  

  // if(data.type === "text-input")
  {
      // let field = <MyTextField id="standard-basic" label="Enter your age" variant="outlined"/>;
  }

  
  return (
    <div className="App">
      <Router>
        <MuiThemeProvider theme={themeDark}>
          <form autoComplete="off">
          <Grid container spacing={3}  justify="space-evenly" style={{height:"100%"}}>
            <Grid item xs={4} style={{height:"100%"}}>
                <Paper elevation={3}>
                  <MyTextField id="standard-basic" size="small" label="Enter your age" variant="outlined"/>
                  <ActionButtons />
                </Paper>
              </Grid>
            </Grid>
          </form>
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
