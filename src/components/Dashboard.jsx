import React, { useContext, useEffect } from "react";
import { LayoutContext } from "./contexts/LayoutContext";
import HomeTable from "./Tables/HomeTable";
import ApprovedTable from "./Tables/ApprovedTable";

export default function Dashboard() {
  const { layoutPage, showHomePage, showApprovedSitesPage } = useContext(
    LayoutContext
  );

  useEffect(() => {
    console.log(layoutPage);
  }, [layoutPage]);

  return (
    <div>
      <div className="left">
        <h1>UnAwwwards</h1>
        <ul>
          <li onClick={showHomePage}>Home</li>
          <li onClick={showApprovedSitesPage}>APPROVED</li>
        </ul>
      </div>
      <div className="right">
        {layoutPage.homePage ? <HomeTable /> : <ApprovedTable />}
      </div>
    </div>
  );
}
