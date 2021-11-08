import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectReport() {
  const [report, setReport] = React.useState("");

  const handleChange = (event) => {
    setReport(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: -3, minWidth: 10, minHeight: 10 }}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={report}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={22}></MenuItem>
          <MenuItem value={10}>Daily</MenuItem>
          <MenuItem value={21}>Monthly</MenuItem>
          <MenuItem value={22}>Annual</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
