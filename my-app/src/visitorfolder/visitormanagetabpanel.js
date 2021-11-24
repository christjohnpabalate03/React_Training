import React from "react";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import Button from "@mui/material/Button";

function VisitorManagementTabPanel() {
  return (
    <div>
      <Button
        style={{
          display: "block",
          color: "black",
          textTransform: "none",
          marginLeft: "30px",
        }}
      >
        <SupervisorAccountOutlinedIcon sx={{ fontSize: 35 }} />
        <h4 style={{ marginTop: "-10px" }}>Visitor</h4>
        <h4 style={{ marginTop: "-25px" }}> Management</h4>
      </Button>
    </div>
  );
}

export default VisitorManagementTabPanel;
