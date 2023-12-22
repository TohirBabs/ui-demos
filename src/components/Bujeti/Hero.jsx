import YouTube from "react-youtube";
import { Partners } from "./Partners";
export const Hero = () => {
  const DesktopVideo = () => {
    const opts = {
      height: "650",
      width: "1130",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      },
    };

    return <YouTube videoId="rtGIrLQ7O5s" opts={opts} className="hidden lg:block mx-auto overflow-hidden rounded-3xl" />;
  };

  const MobileVideo = () => {
    const opts = {
      height: "190",
      width: "370",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      },
    };
    return <YouTube videoId="rtGIrLQ7O5s" opts={opts} className="lg:hidden mx-auto overflow-hidden rounded-lg" />;

  };

  

  return (
      
      <div className="w-screen bg-[#f7e8d4]">
        <div className="mx-auto w-full border-x  border-slate-300 text-center text-[#D28B28] max-w-6xl  flex flex-col  items-center">
         <div className="flex flex-col items-center gap-5 max-w-5xl w-full border-x border-slate-300 py-10 lg:py-20">
         <h2 className="lg:text-[3.6rem] text-[2.8rem]  font-semibold leading-[1.4] w-full ">
           <div className="lg:border-y border-slate-300"> Financial management </div><div className="border-b border-slate-300">for your African business</div>
          </h2>
          <p className="lg:text-lg text-sm lg:w-[70%] text-slate-900">
            One platform for comprehensive management of all your financial
            services, from simple accounting all the way to corporate
            banking
          </p>
          <div className="flex gap-8 py-2">
            <button className="capitalize  py-2 px-6 rounded-xl text-black ">
              meet an expert
            </button>
            <button className="capitalize bg-[#bfff0b] text-black py-2 px-6 rounded-xl border-4 border-black/20 ">
              try it today
            </button>
          </div>
          
         </div>
          <div className=" w-full lg:p-3 p-1 border-y flex justify-center lg:z-30 bg-black/10 border-slate-300">
            <DesktopVideo/>
            <MobileVideo/>
          </div>
        </div>
      </div>
      // <Partners />
    
  );
};
