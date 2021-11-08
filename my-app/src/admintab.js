import * as React from "react";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SetupOthersSelect from "./setupothersselect";
import Button from "@mui/material/Button";

function AdminTab() {
  return (
    <div style={{ display: "flex", height: "15vh" }}>
      <div>
        <Button style={{ display: "block", color: "black" }}>
          <BusinessOutlinedIcon />
          <h5>
            Company <br />
            Information
            <br />
          </h5>
        </Button>
      </div>
      <div>
        <Button style={{ display: "block", color: "black" }}>
          <SettingsOutlinedIcon />
          <h5>Settings</h5>
        </Button>
      </div>
      <div>
        <Button style={{ margin: "-2", display: "block", color: "black" }}>
          <SettingsSuggestIcon />
          <h5>Setup Others</h5>
          <SetupOthersSelect />
        </Button>
      </div>
    </div>
  );
}
export default AdminTab;
