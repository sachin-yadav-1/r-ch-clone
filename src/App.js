import React from "react";
import { HomePage, AboutUsPage, FaqPage } from "./pages";
import { Route } from "./components";

const App = () => {
  return (
    <div>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutUsPage />
      </Route>
      <Route path="/faq">
        <FaqPage />
      </Route>
    </div>
  );
};

export default App;
