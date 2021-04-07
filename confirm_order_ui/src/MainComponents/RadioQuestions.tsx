import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  FormHelperText,
  FormLabel,
} from "@material-ui/core";
import React,{useState,useRef} from "react";
import { Controller } from "react-hook-form";



type Props = {
  id: string;
  question: string;
  optionList: string[];
  optionValue: boolean[] | string[];
  defaultSelected?: string;
  useForm: any;
  actionOnSelection?: any;
  helperMessage?:string;
  showMessageOnValue?:string;
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
  isReq: boolean;
  isPartOfDynamicComponent?:boolean;
};

// const scrollToRef = (ref:any) => window.scrollTo(0, ref.current.offsetTop)   
const scrollToRef = (ref:any) => ref.current.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});   


export default function RadioQuestions(props: Props) {
  const myRef = useRef(null)


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
              <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
    </React.Fragment>
  );
}
