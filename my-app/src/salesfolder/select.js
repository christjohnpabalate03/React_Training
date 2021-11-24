import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function GroupedSelect() {
  return (
    <div className="select">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="" value="" />
          {/* //Daily Report  */}
          <optgroup label="Daily Totals">
            <option value={1}>Summary</option>
            <option value={1}>Detailed</option>
            <option value={2}>Monthly</option>
            <option value={2}>Detailed Per Invoice</option>
            <option value={2}>Detailed Per Item</option>
          </optgroup>

          <optgroup label="Customer Totals">
            <option value={3}>Summary</option>
            <option value={4}>Detailed </option>
            <option value={4}>Monthly</option>
            <option value={4}>Top Sales </option>
          </optgroup>
          <optgroup label="Billing Reports">
            <option value={1}>Statement Of Account</option>
            <option value={2}>Unpaid Invoices</option>
            <option value={2}>Aging of Receivables</option>
            <option value={2}>Deatailed Aging</option>
            <option value={2}>Outstanding Receivables</option>
          </optgroup>
          <optgroup label="Counter Receipts">
            <option value={1}>Billing Group </option>
            <option value={2}>Per Customer </option>
            <option value={1}>Pickup </option>
            <option value={2}>Connection List </option>
            <option value={2}>Connection List Summary</option>
          </optgroup>
          <optgroup label="Transactions">
            <option value={1}>Sales </option>
            <option value={2}>Credit Memos</option>
            <option value={1}>Debit Memos </option>
            <option value={2}>Payments</option>
            <option value={2}>Consolidated</option>
          </optgroup>
          <option value={1}>Receipt Registers</option>
          <option value={2}>Invoice Registers</option>
          <option value={2}>WTAX Report</option>
        </Select>
      </FormControl>
    </div>
  );
}
