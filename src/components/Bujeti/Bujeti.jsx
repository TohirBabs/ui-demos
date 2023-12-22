import React from "react";
import { Hero } from "./Hero";
import { Partners } from "./Partners";
import Features from "./Features";
import { Footer } from "./Footer";
import { Trial } from "./Trial";
import { FAQ } from "./FAQ";
import { Header } from "./Header";

const Bujeti = () => {
  return (
    <div className="font-poppins">
      <Header/>
      <Hero />
      <Features />
      <Trial />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Bujeti;
