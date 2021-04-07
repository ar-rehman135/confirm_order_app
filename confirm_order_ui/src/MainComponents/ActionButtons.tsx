import React,{useContext} from 'react'
import { Button, Grid } from '@material-ui/core'
import { useStyles } from '../shared/commonStyles';
import classNames from "classnames";
import { handleApi } from '../Api/handleApi';
import {FlaskDataContext,ReactDataContext} from "../components/User";


function ActionButtons() {

    let {data,setData} = useContext(FlaskDataContext);
    let {state,response} = useContext(ReactDataContext);
    const classes = useStyles();



  const handleBack = async () => {
    let res = await handleApi("","GET");
    setData(res,"back");

}

  return (
        <div>
            <Grid container  justify="space-evenly">
                <Grid item xs={12} >
                    <div className="d-flex flex-row justify-content-center">
                        <Button variant="contained" className={classNames(classes.actionButton,"col-4")}  onClick={handleBack}>Back</Button>
                        <Button variant="contained" color="primary" type="submit"  className={classNames(classes.actionButton,"col-4")} >
                            Submit
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}


export default ActionButtons;

