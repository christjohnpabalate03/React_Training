import * as React from "react";
import ButtonAppBar from "./Appbar";
import MainNav from "./mainfolder/Mainnav";

export default function App() {
  return (
    <div style={{ display: "block" }}>
      <div>
        <ButtonAppBar />
      </div>

      <div>
        <MainNav />
      </div>

      <div style={{ marginTop: "150px" }}>
        <h1>Hello Clients</h1>
      </div>
    </div>
  );
}
