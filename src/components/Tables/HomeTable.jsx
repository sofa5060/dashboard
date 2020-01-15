import React, { useContext } from "react";
import { LayoutContext } from "../contexts/LayoutContext";
import { SitesContext } from "../contexts/SitesContext";

export default function HomeTable() {
  const { layoutPage } = useContext(LayoutContext);
  const { sites, isFetching } = useContext(SitesContext);
  return (
    <table
      className={
        layoutPage.homePage ? "home-page move-down" : "home-page move-up"
      }
    >
      <thead>
        <tr>
          <th>Approved</th>
          <th>URL</th>
          <th>Description</th>
          <th>Sitename</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        {!isFetching ? (
          sites.map(site => {
            return (
              <tr key={site.id}>
                <td>{site.data.isApproved ? "true" : "false"}</td>
                <td>{site.data.url}</td>
                <td>{site.data.description}</td>
                <td>{site.data.title}</td>
                <td>
                  <img src={site.data.img} alt=""/>
                </td>
              </tr>
            );
          })
        ) : (
          <h3>Loading</h3>
        )}
      </tbody>
    </table>
  );
}
