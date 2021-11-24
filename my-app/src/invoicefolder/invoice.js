import React from "react";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import Button from "@mui/material/Button";

function Invoice() {
  return (
    <div className="invoice">
      <Button
        style={{ display: "block", color: "black", textTransform: "none" }}
      >
        <FileCopyOutlinedIcon fontSize="large" />
        <h4 style={{ marginTop: "-10px" }}>Invoice</h4>
        <h4 style={{ marginTop: "-25px" }}> Number</h4>
      </Button>
    </div>
  );
}

export default Invoice;
