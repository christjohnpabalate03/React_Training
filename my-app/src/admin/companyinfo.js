import * as React from "react";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import Button from "@mui/material/Button";

function CompanyInfo() {
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
        <BusinessOutlinedIcon sx={{ fontSize: 35 }} />
        <h4 style={{ marginTop: "-10px" }}>Company </h4>
        <h4 style={{ marginTop: "-25px" }}>Information</h4>
      </Button>
    </div>
  );
}

export default CompanyInfo;
