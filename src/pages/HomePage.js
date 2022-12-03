import React from "react";
import { Header, Hero, Carousal } from "../components";

const carousalImages = [
  { id: 1, src: "/imgs/highlight-1.png", description: "Donate for homeless people" },
  { id: 2, src: "/imgs/highlight-2.png", description: "Celebrate an orphan's birthday" },
];

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Carousal images={carousalImages} />
    </>
  );
};

export default HomePage;
