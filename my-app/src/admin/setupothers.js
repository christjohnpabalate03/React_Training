import * as React from "react";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Button from "@mui/material/Button";

function SetupOthers() {
  return (
    <div>
      <Button
        style={{
          display: "block",
          color: "black",
          textTransform: "none",
          marginLeft: "50px",
        }}
      >
        <SettingsSuggestIcon sx={{ fontSize: 35 }} />
        <h4 style={{ marginTop: "-10px" }}>Setup </h4>
        <h4 style={{ marginTop: "-25px" }}>Others</h4>
      </Button>
    </div>
  );
}

export default SetupOthers;
