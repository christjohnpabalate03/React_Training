import React from "react";
import SettingsPowerOutlinedIcon from "@mui/icons-material/SettingsPowerOutlined";
import Button from "@mui/material/Button";

function Logout() {
  return (
    <div className="logout">
      <Button
        style={{ display: "block", color: "black", textTransform: "none" }}
      >
        <SettingsPowerOutlinedIcon fontSize="large" />
        <h4 style={{ marginTop: "-10px" }}>Logout</h4>
      </Button>
    </div>
  );
}

export default Logout;
