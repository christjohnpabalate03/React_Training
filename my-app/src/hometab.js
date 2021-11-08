import * as React from "react";
import ListIcon from "@mui/icons-material/List";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import SettingsPowerOutlinedIcon from "@mui/icons-material/SettingsPowerOutlined";
import Button from "@mui/material/Button";

function HomeTab() {
  return (
    <div style={{ display: "flex", height: "15vh" }}>
      <div>
        <Button style={{ display: "block", color: "black" }}>
          <ListIcon />
          <h5>Todo</h5>
        </Button>
      </div>
      <div>
        <Button
          style={{
            display: "block",
            color: "black",
          }}
        >
          <EnhancedEncryptionIcon />
          <h5>
            Change
            <br />
            Password
            <br />
          </h5>
        </Button>
      </div>
      <div>
        <Button style={{ display: "block", color: "black" }}>
          <FileCopyOutlinedIcon />
          <h5>
            Invoice <br /> Number
            <br />
          </h5>
        </Button>
      </div>
      <div>
        <Button style={{ display: "block", color: "black" }}>
          <SettingsPowerOutlinedIcon />
          <h5>Logout</h5>
        </Button>
      </div>
    </div>
  );
}
export default HomeTab;
