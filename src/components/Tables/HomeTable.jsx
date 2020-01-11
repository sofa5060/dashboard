import React,{useContext} from "react";
import { LayoutContext } from "../contexts/LayoutContext";

export default function HomeTable() {
  const {layoutPage} = useContext(LayoutContext)
  return <div className={layoutPage.homePage ? "home-page move-down":"home-page move-up"}>home</div>;
}
