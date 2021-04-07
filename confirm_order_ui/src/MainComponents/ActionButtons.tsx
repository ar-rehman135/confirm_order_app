import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core'
import { useStyles } from '../shared/commonStyles';
import classNames from "classnames";

type Props = {
    
}


function ActionButtons(props:Props) {
  const classes = useStyles();
  return (
        <div>
            <Grid container  xs={12} justify="space-evenly">
                <Grid item >
                    <Button variant="contained" className={classNames(classes.actionButton,"col-4")} >Back</Button>
                    <Button variant="contained" color="primary" type="submit"  className={classNames(classes.actionButton,"col-4")} >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

ActionButtons.propTypes = {

}

export default ActionButtons

