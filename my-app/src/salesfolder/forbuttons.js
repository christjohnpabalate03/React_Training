import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
function ForButtons() {
  return (
    <div style={{ display: "grid", marginLeft: "30px" }}>
      <Box>
        <div>
          <Button
            style={{
              color: "black",
              textTransform: "none",
              marginTop: "10px",
              height: "20px",
            }}
          >
            <h4>Beginning Balance</h4>
          </Button>
        </div>
        <div>
          <Button
            style={{
              color: "black",
              textTransform: "none",
              marginTop: "10px",
              height: "20px",
            }}
          >
            <h4>For Treatment</h4>
          </Button>
        </div>
        <div>
          <Button
            style={{
              color: "black",
              textTransform: "none",
              marginTop: "10px",
              height: "20px",
            }}
          >
            <h4>For COT</h4>
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default ForButtons;
