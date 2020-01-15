import React, { createContext, useState } from "react";

export const LayoutContext = createContext();

const LayoutContextProvider = props => {
  const [layoutPage, setlayoutPage] = useState({
    homePage: true,
    approvedPage: false
  });

  const showHomePage = () => {
      setlayoutPage({
          homePage:true,
          approvedPage:false
      })
  }

  const showApprovedSitesPage = () => {
    setlayoutPage({
        homePage:false,
        approvedPage:true
    })
  }

  return (
    <LayoutContext.Provider value={{ layoutPage,showHomePage, showApprovedSitesPage }}>
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
