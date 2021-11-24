import React from "react";
import IdManagement from "../visitorfolder/idmanage";
import VisitorManagementTabPanel from "../visitorfolder/visitormanagetabpanel";

function VisitorManagementTab() {
  return (
    <div>
      <div className="visitor">
        <IdManagement />
        <VisitorManagementTabPanel />
      </div>
      <div className="visitor-home">Visitor Home</div>
    </div>
  );
}

export default VisitorManagementTab;
