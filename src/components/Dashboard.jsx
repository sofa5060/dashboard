import React, { useContext } from "react";
import { LayoutContext } from "./contexts/LayoutContext";
import HomeTable from "./Tables/HomeTable";
import ApprovedTable from "./Tables/ApprovedTable";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./Dashboard.css";

export default function Dashboard() {
  const { layoutPage, showHomePage, showApprovedSitesPage } = useContext(
    LayoutContext
  );

  return (
    <div className="home-screen">
      <div className="left">
        <h2>UnAwwwards</h2>
        <div className="add-button">
          <AddCircleIcon />
          <h6>Create</h6>
        </div>
        <ul>
          <li onClick={showHomePage}>Home</li>
          <li onClick={showApprovedSitesPage}>APPROVED</li>
        </ul>
      </div>
      <div className="right">
        <HomeTable />
        <ApprovedTable />
      </div>
    </div>
  );
}
