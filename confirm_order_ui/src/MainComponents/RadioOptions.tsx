import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@material-ui/core';
import { Controller } from 'react-hook-form';

type Props = {
    id: string;
    question: string;
    optionList: string[];
    optionValue: boolean[] | string[];
    defaultSelected?: string;
    useForm: any;
    actionOnSelection?: any;
    helperMessage?:string;
    xsSize?:
      | boolean
      | "auto"
      | 1
      | 12
      | 3
      | 2
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | undefined;
  
  
  
}

function RadioOptions(props:Props) {
    let radioRef = useRef();

    const handleChange = ()=>{

    }

    return (
        <React.Fragment >
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          spacing={1}
        >
          <Grid
            item
            xs={props.xsSize === undefined ? 10 : props.xsSize}
          >
            <Typography >{props.question}</Typography>
        </Grid>
        <Grid
                item
                xs={props.xsSize === undefined ? 10 : props.xsSize}
                style={{ textAlign: "left" }}
            >
                <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup  name={props.id} onChange={handleChange}>
                    props.optionList.map((item,index)=>{
                        return <FormControlLabel key={index} value={item} control={<Radio />} label={item} />
                    })
                </RadioGroup>
                </FormControl>
            </Grid>
            </Grid>
        </React.Fragment>
    );

}