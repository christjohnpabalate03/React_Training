import * as React from "react";
import ButtonAppBar from "./Appbar";
import MainNav from "./mainfolder/Mainnav";

export default function App() {
  return (
    <div>
      <div>
        <ButtonAppBar />
      </div>
      <div>
        <div>
          <MainNav />
        </div>
      </div>
    </div>
  );
}
