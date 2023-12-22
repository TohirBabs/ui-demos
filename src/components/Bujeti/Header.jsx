export const Header = () => {
    return (
      <div className="mx-auto w-full max-w-6xl border-x border-slate-300 sticky top-0  z-10  lg:p-0 lg:bg-[#f7e8d4] bg-[#f7e8d4]">
        <div className="border-b border-x  border-[#d28b28]/500 mx-auto border-slate-300 w-full lg:px-8 py-3 text-black max-w-5xl  flex flex-col lg:flex-row justify-between h-16 overflow-hidden lg:h-20 items-center gap-5">
          <div className="flex justify-between w-full lg:w-auto px-3 lg:px-0 items-center">
            <img src="/bujeti.svg" alt="" className="h-10 p-2 px-4 rounded bg-[#bfff0b]"/>
            <div className="lg:hidden flex flex-col gap-1">
            <div className="w-6 h-1 bg-slate-700 "></div>
            <div className="w-6 h-1 bg-slate-700 "></div>
            <div className="w-6 h-1 bg-slate-700 "></div>

            </div>
            </div>
            <nav className="flex  flex-col lg:flex-row  gap-8 text-md">
              <a href="/">why bujeti?</a>
              <a href="/">products</a>
              <a href="/">company</a>
              <a href="/">pricing</a>
            </nav>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <button className="capitalize">log in</button>
            <button className="capitalize bg-[#bfff0b] text-black py-2 px-6 rounded-xl border-4 border-black/20 ">
              try it today
            </button>
          </div>
        </div>
      </div>
    );
  };