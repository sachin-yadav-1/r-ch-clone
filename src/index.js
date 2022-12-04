import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { CampaignProvider, NavigationProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NavigationProvider>
    <CampaignProvider>
      <App />
    </CampaignProvider>
  </NavigationProvider>
);
