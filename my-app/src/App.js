import * as React from "react";
import LabTabs from "./maintab";
export default function App() {
  return (
    <div>
      <div className="Stellar Eco Application" style={{ backgroundColor: "" }}>
        <header
          style={{
            border: "10px",
            padding: "10px",
            backgroundColor: "Darkcyan",
            color: "white",
          }}
        >
          Stellar Eco Application/admin/CEBU Branch
          <div style={{ backgroundColor: "aqua" }}>
            <LabTabs />
          </div>
        </header>
        <body>
          <center>
            <h1>HEY</h1>
          </center>
        </body>
      </div>
    </div>
  );
}
