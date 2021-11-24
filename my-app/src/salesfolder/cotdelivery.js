import React from "react";
import Button from "@mui/material/Button";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";

function CotDelivery() {
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
        <PendingActionsOutlinedIcon sx={{ fontSize: 35 }} />
        <h4 style={{ marginTop: "-10px" }}>For COT</h4>
        <h4 style={{ marginTop: "-25px" }}> Delivery</h4>
      </Button>
    </div>
  );
}

export default CotDelivery;
