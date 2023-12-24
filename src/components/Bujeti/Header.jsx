import { useState } from "react";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
    return (
      <div className={`mx-auto w-full max-w-6xl  border-slate-300 sticky top-0  z-10  lg:p-0  bg-${navOpen? "white":"[#f7e8d4]/50"}`}>
        <div className={`border-b border-x  border-[#d28b28]/500 mx-auto border-slate-300 w-full  backdrop-blur lg:px-8 py-3 text-black max-w-5xl  flex flex-col lg:flex-row lg:justify-between h-${navOpen?"screen":"16"} transition transition-all overflow-hidden lg:h-20 lg:items-center gap-5`}>
          <div className="flex justify-between w-full lg:w-auto px-3 lg:px-0 items-center">
            <img src="/bujeti.svg" alt="" className="h-10 p-2 px-4 rounded bg-[#bfff0b]"/>
            <div onClick={() => setNavOpen(!navOpen)} className="lg:hidden flex flex-col gap-1">
            <div className="w-6 h-1 bg-slate-700 "></div>
            <div className="w-6 h-1 bg-slate-700 "></div>
            <div className="w-6 h-1 bg-slate-700 "></div>

            </div>
            </div>
            <nav className="flex p-3 lg:p-0 flex-col lg:flex-row  lg:gap-8 gap-5 text-md">
              <a href="/">why bujeti?</a>
              <a href="/">products</a>
              <a href="/">company</a>
              <a href="/">pricing</a>
            </nav>
          
          <div className="flex flex-col lg:flex-row lg:gap-8 gap-5 p-3 w-max">
            <button className="capitalize bg-white text-black py-2 px-6 rounded-xl border-4 border-black/20  ">log in</button>
            <button className="capitalize bg-[#bfff0b] hidden lg:block text-black py-2 px-6 rounded-xl border-4 border-black/20 ">
              try it today
            </button>
          </div>
        </div>
      </div>
    );
  };