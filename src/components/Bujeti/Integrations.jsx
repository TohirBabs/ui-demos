import { IntegrationIcon } from "./icons/Integration";

export const Integrations = () => {
  return (
    <div className=" my-20">
      <div className="mx-auto w-[95%] text-[#d28b28] text-center max-w-3xl  flex flex-col justify-center gap-5  items-center">
        <div className="flex gap-2 items-center rounded-full  p-1 border border-slate-700 px-3">
          <IntegrationIcon />
          <p className="text-slate-900 text-xs lg:text-sm font-semibold">
            integrations
          </p>
        </div>
        <h2 className="text-[1.7rem] lg:text-5xl  flex flex-col  w-full font-semibold lg:leading-[1.4]">
          <div className="">Get more value </div>{" "}
          <div className=""> from the tools you love.</div>
        </h2>
        <p className="lg:text-lg text-sm lg:w-[70%] w-[88%] text-slate-900">
          Connect your tools and teams. Your team&#39;s <br />
          favourite tools are just a click away.
        </p>

        <img src="/integration.webp" alt="" className="py-6" />
      </div>
    </div>
  );
};
