import { useState } from "react";
import ChevronDownIcon from "./icons/ChevronDown";
import ArrowRightIcon from "./icons/ArrowRight";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(-1);

  const navDetails = [
    {
      title: "why bujeti?",
      detail:
        "Best-in-class, fully integrated and easy-to-use accounting and expense management solution for ambitious businesses.",
      cta: "schedule demo",
      links: [
        {
          title: "using bujeti",
          list: [
            "for startups",
            "for employees",
            "for finance teams",
            "for technology",
            "for travel and hospitality",
          ],
        },
        {
          title: "",
          list: [
            "for helthcare",
            "for marketing",
            "for restaurants",
            "for non-profits",
          ],
        },
      ],
    },
    {
      title: "products",
      cta: "pricing",
      links: [
        {
          title: "solutions",
          list: [
            "expense management",
            "corporate cards",
            "bank payments",
            "reimbursements",
            "reporting & insights",
            "fund collection",
            "bank sync",
          ],
        },
        {
          title: "coming this year",
          list: ["business credit", "payroll"],
        },
      ],
    },
    {
      title: "company",
      detail:
        "Best-in-class, fully integrated and easy-to-use accounting and expense management solution for ambitious businesses.",
      cta: "",
      links: [
        {
          title: "learn",
          list: ["blog", "careers", "contact us", "about us"],
        },
        {
          title: "support",
          list: [
            "frequently asked questions",
            "terms of use",
            "privacy policy",
          ],
        },
      ],
    },
  ];

  const NavMenu = ({ nav, index }) => {
    console.log(menuOpen === index);
    return (
      <button className="group lg:py-6 ">
        <div
          onClick={() => setMenuOpen(index)}
          className="flex justify-between p-3 overflow-hidden lg:overflow-visible"
        >
          <p className="capitalize text-lg"> {nav.title}</p> <ChevronDownIcon />
        </div>
        <div
          className={`lg:w-[72rem] text-left lg:items-center justify-center
           h-${menuOpen === index ? "max" : "0"}
         lg:gap-5 gap-2 lg:absolute lg:top-[100%] overflow-hidden lg:left-[50%] lg:-translate-x-[50%] lg:group-hover:h-[450px] transition-all  bg-white backdrop-blur flex flex-col lg:flex-row`}
        >
          <div className="flex flex-col bg-slate-100 h-full justify-center lg:gap-10 gap-2 lg:px-20 p-4 max-w-[500px]">
            <p className="lg:text-5xl text-2xl font-semibold ">{nav.title}</p>
            <p className="">
              Best-in-class, fully integrated and easy-to-use accounting and
              expense management solution for ambitious businesses.
            </p>
            {nav.cta && (
              <a
                href="/startups"
                className="text-slate-600 capitalize font-semibold hover:text-black"
              >
                {nav.cta} <ArrowRightIcon />
              </a>
            )}
          </div>
          <div className="flex w-full">
            {nav.links?.map((links, index) => (
              <div
                key={index}
                className=" flex flex-1 flex-col h-max lg:gap-6 gap-2 lg:p-4 px-3"
              >
                <p className="text-lg capitalize">{links.title}</p>
                <div className="flex flex-col  flex-wrap lg:gap-4 gap-2 text-sm   ">
                  {links.list.map((link, index) => (
                    <a
                      key={index}
                      href="/startups"
                      className="text-slate-600 capitalize group font-semibold hover:text-black"
                    >
                      {link} <ArrowRightIcon />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </button>
    );
  };

  return (
    <div
      className={`mx-auto w-full max-w-6xl  border-slate-300 sticky top-0 overflow-hidden  lg:overflow-visible z-10  lg:p-0  bg-${
        navOpen ? "white" : "[#f7e8d4]/50"
      }`}
    >
      <div
        className={`border-b border-x  border-[#d28b28]/500 mx-auto border-slate-300 w-full  backdrop-blur lg:px-8 py-3 lg:py-0 text-black max-w-5xl flex flex-col lg:flex-row lg:justify-between h-${
          navOpen ? "screen" : "16"
        }  transition-all  lg:h-max lg:items-center gap-5`}
      >
        <div className="flex justify-between w-full lg:w-auto px-3 lg:px-0 items-center">
          <img
            src="/bujeti.svg"
            alt=""
            className="h-10 p-2 px-4 rounded bg-[#bfff0b]"
          />
          <div
            onClick={() => setNavOpen(!navOpen)}
            className="lg:hidden flex flex-col gap-1"
          >
            <div className="w-6 h-1 bg-slate-700 "></div>
            <div className="w-6 h-1 bg-slate-700 "></div>
            <div className="w-6 h-1 bg-slate-700 "></div>
          </div>
        </div>
        <nav className="flex  lg:p-0 flex-col lg:flex-row lg:h-full lg:gap-8 gap-5 text-md">
          {navDetails.map((nav, index) => (
            <NavMenu key={index} nav={nav} index={index} />
            // <>link</>
          ))}
        </nav>

        <div className="flex flex-col lg:flex-row lg:gap-8 gap-5 p-1 w-[90%] mx-auto lg:w-max">
          <button className="capitalize bg-white text-black py-2 px-6 rounded-xl border-4 border-black/20  ">
            log in
          </button>
          <button className="capitalize bg-[#bfff0b]  text-black py-2 px-6 rounded-xl border-4 border-black/20 ">
            try it today
          </button>
        </div>
      </div>
    </div>
  );
};
