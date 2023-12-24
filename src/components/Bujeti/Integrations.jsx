export const Integrations = () => {
  return (
    <div className="w-screen my-20">
      <div className="mx-auto w-[95%] text-[#d28b28] text-center max-w-3xl  flex flex-col justify-center gap-5  items-center">
        <div className="flex gap-2 items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 14.5V20.5M14.5 17.5H20.5M5 10H8C9.10457 10 10 9.10457 10 8V5C10 3.89543 9.10457 3 8 3H5C3.89543 3 3 3.89543 3 5V8C3 9.10457 3.89543 10 5 10ZM5 21H8C9.10457 21 10 20.1046 10 19V16C10 14.8954 9.10457 14 8 14H5C3.89543 14 3 14.8954 3 16V19C3 20.1046 3.89543 21 5 21ZM16 10H19C20.1046 10 21 9.10457 21 8V5C21 3.89543 20.1046 3 19 3H16C14.8954 3 14 3.89543 14 5V8C14 9.10457 14.8954 10 16 10Z"
              stroke="#bfff0b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-slate-900 font-semibold">integrations</p>
        </div>
        <h2 className="text-5xl  font-semibold leading-[1.5]">
          Get more value <br />
          from the tools you love.
        </h2>
        <p className="text-lg w-[90%] text-slate-900">
          Connect your tools and teams. Your team&#39;s <br />
          favourite tools are just a click away.
        </p>
        <img src="/integration.webp" alt="" className="py-6" />
      </div>
    </div>
  );
};
