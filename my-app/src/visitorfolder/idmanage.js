import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "@mui/material/Button";

function IdManagement() {
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
        <AccountCircleOutlinedIcon sx={{ fontSize: 35 }} />
        <h4 style={{ marginTop: "-10px" }}>ID</h4>
        <h4 style={{ marginTop: "-25px" }}> Management</h4>
      </Button>
    </div>
  );
}

export default IdManagement;
