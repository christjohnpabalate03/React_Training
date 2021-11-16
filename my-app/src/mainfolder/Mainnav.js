import { useState } from "react";
import "./Mainnav.css";

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
            <h2>Homepage</h2>

            <p>This is the HOme Page</p>
          </div>

          <div
            className={toggleTabs === 2 ? "contenu active-contenu" : "contenu"}
          >
            <h2>Sales </h2>

            <p>This is the Sales Page</p>
          </div>

          <div
            className={toggleTabs === 3 ? "contenu active-contenu" : "contenu"}
          >
            <h2>Visitor Management </h2>

            <p>This is the Visitor Mangement page</p>
          </div>
          <div
            className={toggleTabs === 4 ? "contenu active-contenu" : "contenu"}
          >
            <h2>Administration</h2>

            <p>This is the Administration Page</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainNav;
