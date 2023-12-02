import { useState } from "react";

export const ResponsiveSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const mainNav = [
    "dashboard",
    "payments",
    "analytics",
    "products",
    "reports",
    "customers",
  ];

  const settingsNav = ["settings", "billing", "notifications"];
  const IconPlaceholder = () => {
    return <div className="w-8 h-8 bg-gray-300 rounded inline-block "></div>;
  };
  const NavButton = ({ title }) => {
    return (
      <button className="text-sm flex items-center gap-4  rounded-md transition h-10  px-1  hover:bg-gray-500 w-full text-left capitalize">
        <IconPlaceholder />
        {!isCollapsed && <p> {title}</p>}
      </button>
    );
  };
  return (
    <div className="h-screen p-2 font-poppins text-white relaative">
      <div
        style={{ width: isCollapsed ? "3.75rem" : "16rem" }}
        className="h-full  bg-gray-800 transition-all duration-300 rounded-2xl  border-2 border-gray-400 p-2  flex flex-col relative"
      >
        <button
          onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
          className="absolute top-1 -right-5 w-9 h-9  bg-gray-500 rounded-full inline-block m-1"
        ></button>

        <h1 className="text-xl font-bold flex items-center gap-4  font-mono p-2 pb-6">
          <IconPlaceholder />
          {!isCollapsed && <p> ASTRA</p>}
        </h1>

        <div className="relative flex items-center ">
          <span className="w-6 h-6 absolute bg-gray-700 rounded inline-block m-1"></span>
          <input
            type="search"
            className="w-full rounded-md bg-gray-100 h-9  text-xs pl-8 text-black"
            placeholder="search for anything..."
            name=""
            id=""
          ></input>
        </div>
        <nav className="flex flex-col justify-between flex-1 mt-4">
          <div className="">
            {/* {!isCollapsed && <p className=" p-2">Main</p>} */}
            <ul className="flex flex-col gap-2">
              {mainNav.map((nav, index) => (
                <li key={index}>
                  <NavButton title={nav} />
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            {/* {!isCollapsed && <p className=" p-2">Settings</p>} */}
            <ul className="flex flex-col gap-2">
              {settingsNav.map((nav, index) => (
                <li key={index}>
                  <NavButton title={nav} />
                </li>
              ))}
              <li className="relative flex  items-center gap-2 py-2">
                <button className="flex items-center gap-1 text-xs  p-1 flex-1 rounded-lg hover:bg-gray-500 text-left ">
                  <img
                    src="/avatar.png"
                    alt=""
                    className="w-8 h-8 bg-[#f5f5f5] rounded-full"
                  />
                  {!isCollapsed && (
                    <div className=" w-max">
                      <p> tohir babs</p>
                      <p className="text-gray-200 text-xs">
                        tohirbabs@gmail.com
                      </p>
                    </div>
                  )}
                </button>
                {!isCollapsed && (
                  <button className="w-6 h-6 mr-2 bg-gray-300 rounded  "></button>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
