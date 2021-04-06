import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core'
import { useStyles } from '../shared/commonStyles';

type Props = {
    
}


function ActionButtons(props:Props) {
  const classes = useStyles();
  return (
        <div>
            <Grid container  xs={12} justify="space-evenly">
                <Grid item >
                    <Button variant="contained" className={classes.actionButton} >Back</Button>
                    <Button variant="contained" color="primary" type="submit"  className={classes.actionButton} >
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

