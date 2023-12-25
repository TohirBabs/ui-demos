import { useState } from "react";

export const Header = () => {
  const ChevronDownIcon = () => {
    return <svg className="inline group-hover:rotate-180 transition-all" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  }
  const ArrowRightIcon = () => {
    return <svg className="inline " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  }
  const [navOpen, setNavOpen] = useState(false)
    return (
      <div className={`mx-auto w-full max-w-6xl  border-slate-300 sticky top-0  z-10  lg:p-0  bg-${navOpen? "white":"[#f7e8d4]/50"}`}>
        <div className={`border-b border-x  border-[#d28b28]/500 mx-auto border-slate-300 w-full  backdrop-blur lg:px-8 py-3 lg:py-0 text-black max-w-5xl   flex flex-col lg:flex-row lg:justify-between h-${navOpen?"screen":"16"} transition transition-all  lg:h-max lg:items-center gap-5`}>
          <div className="flex justify-between w-full lg:w-auto px-3 lg:px-0 items-center">
            <img src="/bujeti.svg" alt="" className="h-10 p-2 px-4 rounded bg-[#bfff0b]"/>
            <div onClick={() => setNavOpen(!navOpen)} className="lg:hidden flex flex-col gap-1">
            <div className="w-6 h-1 bg-slate-700 "></div>
            <div className="w-6 h-1 bg-slate-700 "></div>
            <div className="w-6 h-1 bg-slate-700 "></div>

            </div>
            </div>
            <nav className="flex p-3 lg:p-0 flex-col lg:flex-row h-full lg:gap-8 gap-5 text-md">
              <button className="group py-6" >why bujeti? <ChevronDownIcon />
              <div className="w-full text-left  gap-5 absolute top-[100%]  overflow-hidden left-0 max-h-[50vh] group-hover:h-[50vh] bg-white flex">
                <div className="flex flex-col  gap-10 py-20 px-20 max-w-[500px]">
                  <p className="text-5xl font-semibold">why us?</p> 
                  <p>Best-in-class, fully integrated and easy-to-use accounting and expense management solution for ambitious businesses.</p>
                  </div>
                  <div className="pt-20 max-h-full pb-10 flex flex-col gap-10 ">
                    <p className="text-lg capitalize">using bujeti</p>
                    <div className="flex flex-col  flex-wrap gap-6 gap-x-9 text-sm   ">
                      
                    <a href="/startups" className="text-slate-600 capitalize font-medium hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    <a href="/startups" className="text-slate-600 capitalize font-semibold hover:text-black" >for startups <ArrowRightIcon /></a>
                    </div>
                    </div> 
                   </div></button>
              <button>products</button>
              <button>company</button>
              <button>pricing</button>
            </nav>
          
          <div className="flex flex-col lg:flex-row lg:gap-8 gap-5 p-1 w-max">
            <button className="capitalize bg-white text-black py-2 px-6 rounded-xl border-4 border-black/20  ">log in</button>
            <button className="capitalize bg-[#bfff0b] hidden lg:block text-black py-2 px-6 rounded-xl border-4 border-black/20 ">
              try it today
            </button>
          </div>
        </div>
        
      </div>
    );
  };