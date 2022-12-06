import React from "react";
import { Header, Hero, Carousal, CampaignsList } from "../components";

const carousalImages = ["/imgs/highlight-1.png", "/imgs/highlight-2.png"];

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <Carousal images={carousalImages} classes="carousal__home" />
      </div>
      <CampaignsList />
    </>
  );
};

export default HomePage;
