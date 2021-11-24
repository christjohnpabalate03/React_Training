import React from "react";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import Button from "@mui/material/Button";

function ChangePassword() {
  return (
    <div className="changepassword">
      <Button
        style={{
          display: "block",
          color: "black",
          textTransform: "none",
        }}
      >
        <EnhancedEncryptionIcon fontSize="large" />
        <h4 style={{ marginTop: "-10px" }}>Change</h4>
        <h4 style={{ marginTop: "-25px" }}>Password</h4>
      </Button>
    </div>
  );
}

export default ChangePassword;
