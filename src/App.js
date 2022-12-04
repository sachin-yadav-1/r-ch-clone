import React from "react";
import { HomePage, AboutUsPage, FaqPage, SearchPage } from "./pages";
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
      <Route path="/search">
        <SearchPage />
      </Route>
    </div>
  );
};

export default App;
