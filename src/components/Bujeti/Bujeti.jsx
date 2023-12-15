import React from "react";
import { Hero } from "./Hero";
import { Partners } from "./Partners";
import Features from "./Features";
import { Footer } from "./Footer";
import { Trial } from "./Trial";
import { FAQ } from "./FAQ";

const Bujeti = () => {
  return (
    <div className="font-poppins">
      <Hero />
      <Features />
      <Trial />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Bujeti;
