import React from "react";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Button from "@mui/material/Button";

function PendingInvoice() {
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
        <VerifiedOutlinedIcon sx={{ fontSize: 35 }} />
        <h4 style={{ marginTop: "-10px" }}>Pending</h4>
        <h4 style={{ marginTop: "-25px" }}> Invoice</h4>
      </Button>
    </div>
  );
}

export default PendingInvoice;
