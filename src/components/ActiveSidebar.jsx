import { useState } from "react";

export const ActiveSidebar = () => {
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
    {
      title: "api reference",
      subnavs: ["reactDOM", "test renderer  ", "js environment", "glossary"],
    },
  ];

  const NavItem = ({ navItem }) => {
    const [nav, setNav] = useState(-1);
    const [open, setOpen] = useState(false);
    const SubNavButton = ({ title, index, nav }) => {
      return (
        <button
          style={{ color: nav === index && "black" }}
          onClick={() => setNav(index)}
          className="text-left h-[50px]  text-gray-600 hover:text-black "
        >
          {title}
        </button>
      );
    };

    // const open = open === navItem.title;

    return (
      <div
        style={{
          height: open ? `${(navItem.subnavs.length + 1) * 50 + 40}px` : "50px",
          backgroundColor: open ? "rgb(219 234 254)" : "rgb(239 246 255)",
        }}
        className="flex flex-col gap-4 p-4
           rounded-lg overflow-hidden  transition-all duration-300 "
      >
        <div onClick={() => setOpen(!open)} className="flex items-center gap-3">
          <button
            style={{
              transform: open ? "rotate(0deg)" : "rotate(-90deg)",
            }}
            className=" transition-transform duration-300 hover:text-blue-500"
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
                stroke={open ? "rgb(59 130 246)" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <p
            style={{ color: open ? "rgb(59 130 246)" : "black" }}
            onClick={() => setNav(-1)}
            className="cursor-pointer text-lg font-bold "
          >
            {navItem.title}
          </p>
        </div>
        <div className="flex gap-3 h-max">
          <div
            style={{ height: `${navItem.subnavs.length * 50}px` }}
            className=" w-[3px] mx-3 relative bg-blue-500/20 overflow-hidden ease-in rounded-full"
          >
            <div
              style={{ top: `${nav * 50}px` }}
              className={`h-[50px] w-[3px] absolute  bg-blue-500 transition-all rounded-full duration-300  `}
            ></div>
          </div>
          <div className="flex flex-col ">
            {navItem.subnavs.map((navItem, index) => (
              <SubNavButton
                key={index}
                title={navItem}
                index={index}
                nav={nav}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-screen h-screen   font-poppins">
      <div className="flex flex-col gap-4 p-5 w-[420px] bg-blue-50 min-h-screen">
        <h1 className="text-xl font-bold flex items-center gap-4  font-mono p-1 pb-6">
          <div className="w-8 h-8  rounded flex items-center justify-center">
            <svg
              width="44"
              height="43"
              viewBox="0 0 44 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.8 33.1C22.3 31.8 18.7 31.6 15.4 32.5C13.1 33.1 10.9 34.3 8.90002 35.8L7.5 37L7.10001 37.4L8 38.2C8.1 38.2 8.10001 38.3 8.20001 38.4C8.40001 38.6 8.60002 38.7 8.90002 38.9L9.5 39.3L10.1 38.8C10.2 38.7 10.4 38.5 10.6 38.4C12.4 36.9 14.4 35.9 16.5 35.4C19.2 34.7 22.1 34.8 25 35.9C27.4 36.8 32.3 37.9 38.2 35.4L38.4 35.3L38.7 35C38.7 34.9 38.8 34.9 38.9 34.8C39.4 34.2 39.9 33.6 40.3 32.9L42.3 29.8L39.1 31.6C34.4 34.2 30.1 34.7 25.8 33.1Z"
                fill="rgb(37 99 235)"
              />
              <path
                d="M12.1 22.3C14.8 21.6 17.7 21.7 20.6 22.8C23.8 24 32 25.7 41.2 17.4L42.7 15.9L42.8 15.8L43.2 15.4L43 14.9C42.9 14.5 42.7 14 42.5 13.5L42 12.1L41 13.1C40.9 13.3 40.7 13.4 40.5 13.6C36.1 18.1 29.3 22.7 21.5 19.9C18 18.6 14.4 18.4 11.1 19.3C7.90001 20.2 5.1 21.9 2.5 24.3V24.2L1 25.8C1 25.9 0.900018 25.9 0.800018 26L0.5 26.3L0.600006 26.7C0.700006 27.2 0.9 27.7 1 28.2L1.60001 29.8L2.60001 28.5C2.70001 28.3 2.9 28.2 3 28C5.1 26.1 8.00001 23.4 12.1 22.3Z"
                fill="rgb(37 99 235)"
              />
              <path
                d="M2.40002 20.5C4.70002 18.1 7.30001 16.6 10.1 15.8C12.8 15.1 15.7 15.2 18.6 16.3C27.6 19.6 35.4 14.2 38.8 11.3L40.1 10L40.6 9.59998L40.2 9C39.9 8.7 39.7 8.29999 39.4 7.89999L38.8 7.09998L38.1 7.79999C38 7.89999 37.8 8.09998 37.7 8.19998C33.5 12.2 27 16.3 19.6 13.5C16.1 12.2 12.5 12 9.20001 12.9C7.10001 13.5 5.10001 14.5 3.10001 15.8L1 17.5C0.8 17.7 0.7 17.8 0.5 18L0.300018 18.2V18.5C0.200018 19.2 0.200006 19.9 0.100006 20.5L0 23L1.70001 21.2C1.90001 21 2.10002 20.7 2.40002 20.5Z"
                fill="rgb(37 99 235)"
              />
              <path
                d="M28.7 39.9L28.5 40.5L28.7 39.9C28.4 39.8 28.2 39.7 27.9 39.6C24.4 38.3 20.8 38.1 17.5 39C16.8 39.2 16.1 39.4 15.4 39.7L13 40.8L12.4 41.1L14.4 41.8C15 42 15.6 42.2 16.2 42.4L16.5 42.5L16.8 42.4C17.1 42.3 17.4 42.1 17.7 42.1C17.9 42.1 18.1 42 18.3 41.9C20.7 41.3 23.3 41.3 26.1 42.2C26.4 42.3 26.6 42.4 26.9 42.5L27.4 42.7L27.7 42.6C28.4 42.4 29.2 42.2 29.8 41.9L32.6 40.9L29.7 40.2C29.4 40.1 29 40 28.7 39.9Z"
                fill="rgb(37 99 235)"
              />
              <path
                d="M44 19.2L42.5 20.7C42.3 20.9 42.1 21.1 41.9 21.3C37.8 25.2 31.2 29.4 23.8 26.6C20.3 25.3 16.7 25.1 13.4 26C10.3 26.9 7.5 28.5 5 30.9L3.70001 32.3L3.30002 32.8L3.70001 33.4C4.00001 33.8 4.20002 34.1 4.40002 34.5L5 35.4L5.70001 34.5C5.80001 34.4 6.00001 34.2 6.10001 34.1C8.50001 31.5 11.1 29.9 14.1 29.1C16.8 28.4 19.7 28.5 22.6 29.6C25.1 30.5 27.7 30.8 30.3 30.5C34.9 30 39.5 27.4 42.9 24.5C43.1 24.3 43.3 24.2 43.5 24L43.8 23.7V23.4C43.8 22.8 43.9 22.1 43.9 21.5L44 19.2Z"
                fill="rgb(37 99 235)"
              />
              <path
                d="M6 10L5.70001 9.39999L6 10C6.6 9.7 7.30002 9.49999 7.90002 9.29999C10.6 8.59999 13.5 8.69999 16.4 9.79999C18.3 10.5 20.2 10.8 22.3 10.8C26.5 10.8 30.7 9.29999 34.6 6.39999L36.1 5.19998L36.6 4.79999L35.7 4.09998C35.4 3.79998 35 3.49999 34.6 3.29999L34 2.89999L33.5 3.29999C33.3 3.39999 33.2 3.59998 33 3.69998C27.7 7.69998 22.4 8.79999 17.4 6.89999C13.8 5.59999 10.2 5.29999 6.60001 6.39999C6.30001 6.49999 6.00001 6.59998 5.60001 6.69998L5.40002 6.79999L5.10001 7.09998C5.10001 7.19998 5.00002 7.19999 4.90002 7.29999C4.50002 7.89999 4.00001 8.4 3.60001 9L1.70001 11.9L4.80002 10.3C5.30002 10.3 5.7 10.1 6 10Z"
                fill="rgb(37 99 235)"
              />
              <path
                d="M14.2 3.19998L14.5 3.29999C15.8 3.79999 17.8 4.29999 20.3 4.29999C22.9 4.29999 25.4 3.69998 27.9 2.69998L31 1.19998L28.9 0.5C28.3 0.3 27.7 0.1 27 0H26.7L26.4 0.0999756C26.1 0.199976 25.8 0.4 25.5 0.5C22.5 1.6 19.5 1.8 16.6 1C16.3 0.9 16 0.799982 15.7 0.699982L15.4 0.599976L15.1 0.699982C14.5 0.899982 13.9 1.09999 13.3 1.39999L11 2.39999L13.4 3.09998C13.6 2.99998 13.9 3.09998 14.2 3.19998Z"
                fill="rgb(37 99 235)"
              />
            </svg>
          </div>
          <p className="uppercase semibold ">REACT DOCUMENTATION</p>
        </h1>
        {NavItems.map((navItem, index) => (
          <NavItem key={index} navItem={navItem} />
        ))}
      </div>
    </div>
  );
};
