import YouTube from "react-youtube";
import { Partners } from "./Partners";
export const Hero = () => {
  const Video = () => {
    const opts = {
      height: "619",
      width: "1100",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId="rtGIrLQ7O5s" opts={opts} />;
  };

  

  return (
    <div className="w-screen overflow-x-hidden  min-h-screen">
      {/* <div className="w-screen min-h-screen h-full absolute -z-10  ">
        <div className=" absolute w-screen h-screen  flex flex-col justify-between">
          <div className="h-[1px] bg-slate-400"></div>
          <div className="h-[1px] bg-slate-400"></div>
          <div className="h-[1px] bg-slate-400"></div>
          <div className="h-[1px] bg-slate-400"></div>
          <div className="h-[1px] bg-slate-400"></div>
          <div className="h-[1px] bg-slate-400"></div>
          <div className="h-[1px] bg-slate-400"></div>
          <div className="h-[1px] bg-slate-400"></div>
          <div className="h-[1px] bg-slate-400"></div>{" "}
          <div className="h-[1px] bg-slate-400"></div>
          <div className="h-[1px] bg-slate-400"></div>
          <div className="h-[1px] bg-slate-400"></div>
          <div className="h-[1px] bg-slate-400"></div>
          <div className="h-[1px] bg-slate-400"></div>
        </div>
        <div className=" absolute w-screen h-screen flex  justify-between">
          <div className="w-[1px] bg-slate-400"></div>
          <div className="w-[1px] bg-slate-400"></div>
          <div className="w-[1px] bg-slate-400"></div>
          <div className="w-[1px] bg-slate-400"></div>
          <div className="w-[1px] bg-slate-400"></div>
          <div className="w-[1px] bg-slate-400"></div>
          <div className="w-[1px] bg-slate-400"></div>
          <div className="w-[1px] bg-slate-400"></div>
          <div className="w-[1px] bg-slate-400"></div>{" "}
          <div className="w-[1px] bg-slate-400"></div>
          <div className="w-[1px] bg-slate-400"></div>
          <div className="w-[1px] bg-slate-400"></div>
          <div className="w-[1px] bg-slate-400"></div>
          <div className="w-[1px] bg-slate-400"></div>{" "}
          <div className="w-[1px] bg-slate-400"></div>
          <div className="w-[1px] bg-slate-400"></div>
          <div className="w-[1px] bg-slate-400"></div>
        </div>
        <div className="absolute w-screen h-full to-[#FBF5EC]/80 from-[#FBF5EC] bg-gradient-to-br"></div>
      </div> */}

      
      <div className="w-screen mt-10">
        <div className="mx-auto w-[95%] text-center text-[#D28B28] max-w-4xl  flex flex-col gap-5 items-center">
          <h2 className="text-[3.6rem]  font-semibold leading-[1.4]">
            Financial management for your African business
          </h2>
          <p className="text-lg w-[90%] text-slate-900">
            One platform for comprehensive management of all your financial
            services, <br /> from simple accounting all the way to corporate
            banking
          </p>
          <div className="flex gap-8 py-2">
            <button className="capitalize  py-2 px-6 rounded-xl border-4 bg-gray-300/10 backdrop-blur-sm">
              meet an expert
            </button>
            <button className="capitalize bg-[#D28B28] text-white py-2 px-6 rounded-xl border-4 border-white/50 ">
              try it today
            </button>
          </div>
          <div className="w-[1100px] h-[619px] bg-slate-800 rounded-3xl overflow-hidden border">
            {/* <Video /> */}
          </div>
        </div>
      </div>
      <Partners />
    </div>
  );
};
