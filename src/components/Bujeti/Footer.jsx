export const Footer = () => {
  const linkList = [
    {
      title: "products",
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
      title: "solutions",
      list: [
        "for startups",
        "for employees",
        "for finance teams",
        "for travel & hospitality",
        "for technology",
        "for healthcare",
        "for marketing",
        "for restaurants",
        "for non-profits",
      ],
    },
    {
      title: "company",
      list: ["about us", "contact us", "careers", "pricing"],
    },
    {
      title: "resources",
      list: ["  FAQ ", "blog", "help center", "terms of use", "privacy policy"],
    },
    {
      title: "using bujeti",
      list: ["linkedin", "x.com", "instagram", "youtube"],
    },
  ];
  return (
    <div className=" flex flex-wrap lg:justify-between bg-[#D28B28] text-white lg:p-12 p-5 lg:gap-5 gap-10 lg:py-20 py-10 text-xs lg:rounded-t-[3rem] rounded-t-[2rem]">
      <div className="flex flex-col text-sm gap-8 max-w-[250px]">
        <div className="flex justify-between w-full lg:w-auto lg:px-0 items-center">
          <img
            src="/bujeti.svg"
            alt=""
            className="h-10 p-2 px-4 rounded bg-[#bfff0b]"
          />
        </div>
        <p>Plot 1B, Block 129, Jide Sawyerr Drive, Lekki Phase 1, Lagos.</p>
        <p>Talk to a product expert today, use our chat box,email us</p>
      </div>
      {linkList.map((links, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 capitalize min-w-[150px]"
        >
          <p className="text-base font-semibold text-black">{links.title}</p>
          <div className="flex flex-col gap-3 ">
            {links.list.map((link, index) => (
              <a
                key={index}
                href="/"
                className="text-slate-200 hover:text-white hover:font-semibold"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
