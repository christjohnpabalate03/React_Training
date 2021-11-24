import { useState } from "react";
import "./Mainnav.css";
import HomeNavigationTab from "../homefolder/Homenav";
import Sales from "../salesfolder/sales";
import VisitorManagementTab from "../visitorfolder/visitormanagetab";
import Admintab from "../admin/admintab";
function MainNav() {
  const [toggleTabs, setToggleTabs] = useState(1);

  const toggleTab = (index) => {
    setToggleTabs(index);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="bloc-onglets">
          <div
            className={toggleTabs === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Home
          </div>
          <div
            className={toggleTabs === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Sales
          </div>
          <div
            className={toggleTabs === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Visitor Mangement
          </div>
          <div
            className={toggleTabs === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Administration
          </div>
        </div>

        <div className="contenu-onglets">
          <div
            className={toggleTabs === 1 ? "contenu active-contenu" : "contenu"}
          >
            <HomeNavigationTab />
          </div>

          <div
            className={toggleTabs === 2 ? "contenu active-contenu" : "contenu"}
          >
            <Sales />
          </div>

          <div
            className={toggleTabs === 3 ? "contenu active-contenu" : "contenu"}
          >
            <VisitorManagementTab />
          </div>
          <div
            className={toggleTabs === 4 ? "contenu active-contenu" : "contenu"}
          >
            <Admintab />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainNav;
