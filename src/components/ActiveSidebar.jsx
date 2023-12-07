export const ActiveSidebar = () => {
  return (
    <div className="w-screen h-screen  p-5">
      <div className="flex flex-col gap-4 bg-white w-[500px]">
        <h1>
          <p className="uppercase">documentation</p>
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 15L14 12L11 9M7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Getting Started</p>
          </div>
          <div className="flex gap-3 h-max">
            <div className="h-[70px] w-[2px] mx-3 relative bg-blue-500/20">
              <div className="h-[35px] w-[2px] absolute  bg-blue-500"></div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="text-left">what is attio</button>
              <button className="text-left">attio glossary</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
