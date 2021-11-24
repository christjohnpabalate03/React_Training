import React from "react";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import Button from "@mui/material/Button";
import GroupedSelect from "./select";
function Report() {
  return (
    <div className="report">
      <div style={{ marginLeft: "40px" }}>
        <Button
          style={{ display: "block", color: "black", textTransform: "none" }}
        >
          <InsertDriveFileOutlinedIcon sx={{ fontSize: 35 }} />
          <h4 style={{ marginTop: "-10px" }}>Reports</h4>
        </Button>
      </div>
      <div>
        <GroupedSelect />
      </div>
    </div>
  );
}

export default Report;
