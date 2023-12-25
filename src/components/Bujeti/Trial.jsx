export const Trial = () => {
  return (
    
    <div className="mx-auto w-[95%] text-[#D28B28] max-w-6xl  flex flex-col lg:flex-row justify-between  items-center">
    <img src="/mobile.webp" alt="" className="w-[80%] lg:w-max" />
    <div className="flex max-w-2xl flex-col gap-5 p-5">
      <p className="lg:text-5xl text-3xl font-semibold lg:leading-[4rem] text-[#242628]">
        Ready to take control of your finances?
      </p>
      <p className="text-slate-900">start your 3 month free trial today</p>
      <div className="flex w-full mx-auto  flex-col lg:flex-row lg:gap-8 gap-2 py-2">
        <button className="capitalize bg-white text-black py-2 px-6 rounded-xl border-4 border-black/20  ">
          meet an expert
        </button>
        <button className="capitalize bg-[#000000] text-white py-2 px-6 rounded-xl border-4 border-white/40 ">
          try it today
        </button>
      </div>
      
    </div>
  </div>
    
  );
};
