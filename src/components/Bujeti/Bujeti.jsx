import { Hero } from "./Hero";
import Features from "./Features";
import { Trial } from "./Trial";
import { Header } from "./Header";
import { Integrations } from "./Integrations";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { Reason } from "./Reason";
import { UseCases } from "./UseCases";

const Bujeti = () => {
  return (
    <div className="font-dm  bg-[#f7e8d4]">
      <Header />
      <Hero />
      <Features />
      <Integrations />
      <UseCases />
      <Reason />
      <FAQ />
      <Trial />
      <Footer />
    </div>
  );
};

export default Bujeti;
