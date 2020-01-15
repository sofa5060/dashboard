import React from "react";
import Dashboard from "./components/Dashboard";
import LayoutContextProvider from "./components/contexts/LayoutContext";
import SitesContextProvider from "./components/contexts/SitesContext";

function App() {
  return (
    <LayoutContextProvider>
      <SitesContextProvider>
        <Dashboard />
      </SitesContextProvider>
    </LayoutContextProvider>
  );
}

export default App;
