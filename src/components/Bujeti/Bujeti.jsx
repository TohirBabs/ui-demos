import React from "react";
import { Hero } from "./Hero";
import { Partners } from "./Partners";
import Features from "./Features";
import { Footer } from "./Footer";
import { Trial } from "./Trial";
import { FAQ } from "./FAQ";
import { Integrations } from "./Integrations";
import { Reason } from "./Reason";

const Bujeti = () => {
  return (
    <div className="font-poppins">
      <Hero />
      <Features />
      <Integrations />
      <Reason />
      <FAQ />
      <Trial />
      <Footer />
    </div>
  );
};

export default Bujeti;
