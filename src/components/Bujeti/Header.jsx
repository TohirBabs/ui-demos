export const Header = () => {
    return (
      <div className="w-screen  sticky top-0  z-10">
        <div className="border-b bg-white sticky top-0 border-[#d28b28]/500 mx-auto w-[95%] px-8 text-[#D28B28] max-w-5xl  flex justify-between h-20 items-center">
          <div className="flex gap-20 items-center capitalize ">
            <img src="/bujeti.svg" alt="" className="h-6"/>
            <nav className="flex gap-8 text-md">
              <a href="/">why bujeti?</a>
              <a href="/">products</a>
              <a href="/">company</a>
              <a href="/">pricing</a>
            </nav>
          </div>
          <div className="flex gap-8">
            <button className="capitalize">log in</button>
            <button className="capitalize bg-[#D28B28] text-white py-2 px-6 rounded-xl border-4 border-white/50 ">
              try it today
            </button>
          </div>
        </div>
      </div>
    );
  };