import React from "react";
import CustomerIcon from "../salesfolder/customericon";
import ForButtons from "../salesfolder/forbuttons";
import PendingInvoice from "../salesfolder/pendinginvoice";
import Invoice from "../salesfolder/invoice";
import CotDelivery from "../salesfolder/cotdelivery";
import Report from "../salesfolder/report";

function Sales() {
  return (
    <div>
      <div className="sales">
        <div>
          <div style={{ display: "flex" }}>
            <CustomerIcon />
            <ForButtons />
            <PendingInvoice />
            <Invoice />
            <CotDelivery />
          </div>
          <div className="main">Main</div>
        </div>

        <div className="report-divider">
          <div>
            <Report />
          </div>
          <div className="others">Others</div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
