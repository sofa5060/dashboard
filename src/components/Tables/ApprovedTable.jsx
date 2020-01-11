import React,{useContext} from "react";
import {LayoutContext} from "../contexts/LayoutContext"

export default function ApprovedTable() {
  const {layoutPage} = useContext(LayoutContext)
  return <div className={layoutPage.homePage ? "approved-page move-down2":"approved-page move-up2"}>hello</div>;
}
