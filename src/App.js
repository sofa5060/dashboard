import React from "react";
import Dashboard from "./components/Dashboard";
import LayoutContextProvider from "./components/contexts/LayoutContext";

function App() {
  return (
    <LayoutContextProvider>
      <Dashboard />
    </LayoutContextProvider>
  );
}

export default App;
