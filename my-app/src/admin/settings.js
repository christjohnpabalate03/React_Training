import * as React from "react";
//import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Button from "@mui/material/Button";
import MenuListComposition from "./settingsselect";
function Settings() {
  return (
    <div>
      <div>
        <Button
          style={{
            display: "block",
            color: "black",
            textTransform: "none",
            marginLeft: "50px",
          }}
        ></Button>
      </div>
      <div>
        <MenuListComposition />
      </div>
    </div>
  );
}

export default Settings;
