import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SetupOthersSelect() {
  const [setup, setSetup] = React.useState("");

  const handleChange = (event) => {
    setSetup(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: -3, minWidth: 10, minHeight: 10 }}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={setup}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={22}>Company Data</MenuItem>
          <MenuItem value={10}>Setup Company</MenuItem>
          <MenuItem value={21}>User Management </MenuItem>
          <MenuItem value={22}>User Groups</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default SetupOthersSelect;
