import React from "react";
import ListIcon from "@mui/icons-material/List";
import Button from "@mui/material/Button";

function TodoContent() {
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
        <div>
          <ListIcon fontSize="large" />
        </div>
        <div>
          <h4 style={{ marginTop: "-10px" }}>Todo</h4>
        </div>
      </Button>
    </div>
  );
}

export default TodoContent;
