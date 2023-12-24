import React from "react";
import { Hero } from "./Hero";
import Features from "./Features";
import { Trial } from "./Trial";
import { Header } from "./Header";
import { Integrations } from "./Integrations";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";

const Bujeti = () => {
  return (
    <div className="font-poppins  bg-[#f7e8d4]">
      <Header />
      <Hero />
      <Features />
      <Integrations/>
      <FAQ/>
      <Trial />
     
      <Footer/>
    </div>
  );
};

export default Bujeti;
