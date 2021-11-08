import * as React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import Button from "@mui/material/Button";

function VisitorMgmtTab() {
  return (
    <div style={{ display: "flex", height: "15vh" }}>
      <div>
        <Button style={{ display: "block", color: "black" }}>
          <AccountCircleOutlinedIcon />
          <h5>
            ID <br />
            Management
            <br />
          </h5>
        </Button>
      </div>
      <div>
        <Button style={{ display: "block", color: "black" }}>
          <SupervisorAccountOutlinedIcon />
          <h5>
            Visitor <br />
            Management
            <br />
          </h5>
        </Button>
      </div>
    </div>
  );
}
export default VisitorMgmtTab;
