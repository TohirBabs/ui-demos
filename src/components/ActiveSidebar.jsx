import { useState } from "react";

export const ActiveSidebar = () => {
  const [open, setOpen] = useState("");
  const NavItems = [
    {
      title: "quick start",
      subnavs: ["tutorial: tic-tac-toe", "thinking in react"],
    },
    {
      title: "installation",
      subnavs: [
        "start a new react project",
        "add reaact to an existing project",
        "editor setup",
        "using typescript",
        "react developer tools",
      ],
    },
    {
      title: "describing the ui",
      subnavs: [
        "your first component",
        "importing and exporting components",
        "writing markup with jsx",
      ],
    },
    {
      title: "advanced guides",
      subnavs: [
        "accesssibility",
        "code-splitting",
        "context",
        "error boundaries",
        "fragments",
      ],
    },
  ];

  const NavItem = ({ navItem }) => {
    const [nav, setNav] = useState(-1);
    const SubNavButton = ({ title, index }) => {
      return (
        <button
          onClick={() => setNav(index)}
          className="text-left h-[40px] text-sm text-gray-600 hover:text-black "
        >
          {title}
        </button>
      );
    };

    const isOpen = open === navItem.title;

    return (
      <div
        onClick={() => setOpen(navItem.title)}
        style={{
          height: isOpen
            ? `${(navItem.subnavs.length + 1) * 40 + 40}px`
            : "40px",
          backgroundColor: isOpen ? "rgb(239 246 255)" : "white",
        }}
        className="flex flex-col gap-4 p-4
           rounded-lg overflow-hidden  transition-all duration-300 "
      >
        <div className="flex items-center gap-3">
          <button
            style={{
              transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)",
            }}
            className=" transition-transform duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 11L12 14L15 11M7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21Z"
                stroke={isOpen ? "rgb(59 130 246)" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <p
            style={{ color: isOpen ? "rgb(59 130 246)" : "black" }}
            onClick={() => setNav(-1)}
            className="cursor-pointer  "
          >
            {navItem.title}
          </p>
        </div>
        <div className="flex gap-3 h-max">
          <div
            style={{ height: `${navItem.subnavs.length * 40}px` }}
            className=" w-[3px] mx-3 relative bg-blue-500/20 overflow-hidden ease-in rounded-full"
          >
            <div
              style={{ top: `${nav * 40}px` }}
              className={`h-[40px] w-[3px] absolute  bg-blue-500 transition-all rounded-full duration-300  `}
            ></div>
          </div>
          <div className="flex flex-col ">
            {navItem.subnavs.map((navItem, index) => (
              <SubNavButton key={index} title={navItem} index={index} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-screen h-screen  p-5 font-poppins">
      <div className="flex flex-col gap-4 bg-white w-[400px]">
        <h1>
          <p className="uppercase">GET STARTED</p>
        </h1>
        {NavItems.map((navItem, index) => (
          <NavItem key={index} navItem={navItem} />
        ))}
      </div>
    </div>
  );
};
