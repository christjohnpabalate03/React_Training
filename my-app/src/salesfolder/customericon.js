import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Button from "@mui/material/Button";

function CustomerIcon() {
  return (
    <div className="customer">
      <Button
        style={{ display: "block", color: "black", textTransform: "none" }}
      >
        <AccountBoxIcon sx={{ fontSize: 35 }} />
        <h4 style={{ marginTop: "-10px" }}>Customers</h4>
      </Button>
    </div>
  );
}

export default CustomerIcon;
