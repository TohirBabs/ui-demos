export const TouchButton = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#262d29] ">
      <div className="relative flex items-center justify-center rounded-full font-mono  overflow-hidden w-[300px] h-20 bg-[#a2d194] hover:cursor-pointer group">
        <div className="relative bottom-4 font-semibold text-2xl w-[200px] text-[#262d29]">
          <p className="absolute w-max origin-right group-hover:-rotate-45 group-hover:translate-y-12 ease-in transition-all duration-300">
            Get in touch
          </p>
          <p className="absolute origin-right rotate-45 -translate-y-12 w-max group-hover:-rotate-0 group-hover:translate-y-0 ease-in transition-all duration-300">
            Don&lsquo;t be shy
          </p>
        </div>
        <div className="absolute right-0 h-full w-20 flex items-center justify-center">
          <span className="w-5 h-5 rounded-full   bg-[#262d29] group-hover:w-12 group-hover:h-12 transition-all duration-300 overflow-hidden flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative right-20 group-hover:right-0 transition-all duration-300"
            >
              <path
                d="M3 12H21M21 12L15 18M21 12L15 6"
                stroke="#a2d194"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
