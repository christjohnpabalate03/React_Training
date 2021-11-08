import * as React from "react";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Button from "@mui/material/Button";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";

import SelectReport from "./selectreport";
function SalesTab() {
  return (
    <div style={{ display: "flex", height: "15vh" }}>
      <div>
        <Button style={{ display: "block", color: "black" }}>
          <AccountBoxOutlinedIcon />
          <h5>Customers</h5>
        </Button>
      </div>
      <div style={{ display: "grid" }}>
        <div>
          <Button
            style={{
              fontFamily: "arial",
              size: "small",
              color: "black",
            }}
          >
            Beginning Balance
          </Button>
        </div>
        <div>
          <Button
            style={{ fontFamily: "arial", size: "small", color: "black" }}
          >
            For Treatment
          </Button>
        </div>
        <div>
          <Button
            style={{ fontFamily: "arial", size: "small", color: "black" }}
          >
            For COT
          </Button>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <Button style={{ display: "block", color: "black" }}>
          <VerifiedOutlinedIcon />
          <h5>
            Pending <br /> Invoice
            <br />
          </h5>
        </Button>
      </div>
      <div>
        <Button style={{ display: "block", color: "black" }}>
          <DescriptionOutlinedIcon />
          <h5>Invoice</h5>
        </Button>
      </div>
      <div>
        <Button style={{ display: "block", color: "black" }}>
          <PendingActionsOutlinedIcon />
          <h5>
            For COT <br />
            Delivery
            <br />
          </h5>
        </Button>
      </div>
      <div style={{ display: "block" }}>
        <Button style={{ display: "block", color: "black" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" />
            <circle cx="12" cy="16" r="1" />
            <path d="M11 7h2v7h-2z" />
          </svg>
          <h5>Reports</h5>
          <SelectReport />
        </Button>
      </div>
    </div>
  );
}
export default SalesTab;
