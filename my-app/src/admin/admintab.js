import * as React from "react";
import CompanyInfo from "./companyinfo";
import Settings from "./settings";
import SetupOthers from "./setupothers";
function Admintab() {
  return (
    <div>
      <div className="admin">
        <CompanyInfo />
        <Settings />
        <SetupOthers />
      </div>
      <div className="user">Setup & amp; Configuration</div>
    </div>
  );
}

export default Admintab;
