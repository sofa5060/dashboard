import React, { createContext, useState, useEffect } from "react";
import firebase from "../Config/fbConfig";

export const SitesContext = createContext();

const SitesContextProvider = props => {
  const [sites, setSites] = useState([]);
  const [isFetching, updateFetching] = useState(true);
  const db = firebase.firestore();
  const approvedSites = [];

  const getSites = async () => {
    const sites = await db
      .collection("sites")
      .where("isApproved", "==", true)
      .get();
    sites.forEach(site => {
      const siteData = {
        data: site.data(),
        id: site.id
      };
      approvedSites.push(siteData);
      setSites(approvedSites);
    });
    updateFetching(false)
  };

  useEffect(() => {
    getSites();
  }, []);

  return (
    <SitesContext.Provider value={{ sites, isFetching }}>
      {props.children}
    </SitesContext.Provider>
  );
};

export default SitesContextProvider;
