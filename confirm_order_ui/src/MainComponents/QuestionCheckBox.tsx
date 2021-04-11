import {
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
} from "@material-ui/core";
import { useState, useContext } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { FlaskDataContext } from "../components/User";
import ActionButtons from "./ActionButtons";

type Props = {
  [x: string]: any;
  setMessage?: any;
  setAlertScreen?: any;
};

export default function QuestionCheckBox(props: Props) {
  let { data, setData } = useContext(FlaskDataContext);

  const [list] = useState(data.options);
  const [checked, setChecked] = useState(list.map(() => false));
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckBoxes = (e: any, check: boolean) => {
    let v = e.target.value;
    if (check) {
      if (selectedItems.indexOf(v) === -1) {
        selectedItems.push(v);
        setSelectedItems(selectedItems);
        setData({ state: data.state, response: selectedItems }, "");
        props.setMessage(
          "Ice Cream With " + selectedItems.toString() + " Is That it ?"
        );
      } else {
        const remainItems = selectedItems.filter((value) => value !== v);
        setSelectedItems(remainItems);
      }
    } else {
      const remainItems = selectedItems.filter((value) => value !== v);
      setSelectedItems(remainItems);
      setData({ state: data.state, response: remainItems }, "");
      props.setAlertScreen(true);
      props.setMessage(
        "Ice Cream With " + remainItems.toString() + " Is That it ?"
      );
    }
    const checkedC = [...checked];
    const ind = list.findIndex((v1: any) => v1 === v);
    checkedC[ind] = check;
    setChecked(checkedC);
  };
  const error = selectedItems.length <= 0;

  return (
    <div style={{ paddingLeft: "15px" }}>
      <FormControl
        required
        error={error}
        component="fieldset"
        style={{ textAlign: "left" }}
      >
        <FormLabel component="legend">{data.text}</FormLabel>
        <FormGroup>
          {list.map((item: any, index: number) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked={false}
                    onChange={handleCheckBoxes}
                    checked={checked[index]}
                  />
                }
                checked={checked[index]}
                defaultChecked={false}
                onChange={handleCheckBoxes}
                value={item}
                label={item}
              />
            );
          })}
        </FormGroup>
        <ActionButtons
          showSubmit={true}
          disabledSubmit={error}
          setMesage={props.setMessage}
          showBack={false}
        />
      </FormControl>
    </div>
  );
}
