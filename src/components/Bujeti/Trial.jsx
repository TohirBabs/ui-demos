export const Trial = () => {
  return (
    <div className="w-screen ">
      <div className="mx-auto w-[95%] text-[#D28B28] max-w-6xl  flex flex-col lg:flex-row justify-between  items-center">
        <img src="/mobile.webp" alt="" />
        <div className="flex max-w-2xl flex-col gap-5">
          <p className="text-5xl font-semibold leading-[4rem]">
            Ready to take control of your finances?
          </p>
          <p className="text-slate-900">start your 3 month free trial today</p>
          <div className="flex gap-8 py-2">
            <button className="capitalize  py-2 px-6 rounded-xl border-4 bg-gray-300/10 backdrop-blur-sm">
              meet an expert
            </button>
            <button className="capitalize bg-[#D28B28] text-white py-2 px-6 rounded-xl border-4 border-white/50 ">
              try it today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
