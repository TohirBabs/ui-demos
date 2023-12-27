import FeaturesIcon from "./icons/Features";

const Features = () => {
  const featureList = [
    {
      theme: "#e9e9e7",
      title: "corporate cards",
      body: "  Generate physical, single-use, and multi-use virtual multi-currency cards for your team to spend flexibly without needing cash.",
      cta: "  explore bujeti cards",
      image: "cards.webp",
    },
    {
      theme: "#ebe8de",
      title: "expense management",
      body: "Manage your company&#39;s expenses by organizing transactions, tracking vendors, and implementing spending policies.",
      cta: "organize your expenses",
      image: "expense.webp",
    },
    {
      theme: "#fcfbfc",
      title: "cash accounts",
      body: " Manage your primary bank account and sub-accounts to make payments, collect payments, and withdraw funds.",
      cta: "learn about accounts",
      image: "account.webp",
    },
    {
      theme: "#f2f5f1",
      title: "bank payments",
      body: "Manage your financial transactions, make single and batch payments, and set approval rules.",
      cta: "explore bank payments",
      image: "payment.webp",
    },
    {
      theme: "#e9e9e7",
      title: "reimbursements",
      body: " Keep your employees happy by reimbursing them for out-of-pocket expenses in just a few clicks.",
      cta: "explore fast reimbursements",
      image: "reimbursement.webp",
    },
    {
      theme: "#f8ede8",
      title: "fund collection",
      body: " Secure payment gateway to collect payments from customers anywhere, anytime.",
      cta: "start collecting payments",
      image: "fund.webp",
    },
    {
      theme: "#f2f5f1",
      title: "bank sync",
      body: " Connect your accounts, track your spending, and manage your budget from one easy-to-use dashboard.",
      cta: "explore bank sync",
      image: "sync.webp",
    },
    {
      theme: "#d6e3e8",
      title: "reports & insights",
      body: "Track your business activities, analyze performance, optimize your operations, and ultimately succeed in achieving your goals.",
      cta: "get reports & insights",
      image: "report.webp",
    },
  ];

  return (
    <div className="bg-[#fafaf9] lg:text-center text-[#D28B28] mx-auto   lg:pt-32  pt-16 flex flex-col items-center border-x max-w-6xl border-y w-full  border-slate-300">
      <div className=" max-w-5xl border-x border-slate-300 lg:py-20 py-8 border-t  flex flex-col gap-5 items-center">
        <div className="flex gap-2 items-center rounded-full border border-slate-300 p-1 bg-white px-3">
          <FeaturesIcon />
          <p className="text-slate-900 text-xs lg:text-sm font-semibold">
            Features
          </p>
        </div>
        <h2 className="text-[1.7rem] lg:text-5xl text-center flex flex-col  w-full font-semibold lg:leading-[1.4]">
          <div className="lg:border-b border-slate-300">
            All you need to run
          </div>
          <div className="border-b border-slate-300">
            your finances effectively
          </div>
        </h2>
        <p className="lg:text-lg text-sm lg:w-[70%] w-[88%] text-slate-900">
          Introducing Bujeti, a complete suite of finance tools designed
          toenhance your productivity, streamline operations, and drive business
          growth.
        </p>
      </div>
      <div className="flex lg:border-t border-slate-300 flex-col items-end gap-10 relative w-full max-w-6xl">
        <div className="lg:grid lg:grid-cols-12 flex flex-col gap-5 lg:gap-10 w-full max-w-6xl lg:p-10 p-3 mx-auto">
          {featureList.map((feature, index) => (
            <div
              style={{
                background: `${feature.theme}`,
                gridColumn: `${
                  [0, 3, 4, 7].includes(index) ? "span 7" : "span 5"
                } `,
              }}
              key={index}
              className={`rounded-3xl flex flex-col justify-between overflow-hidden text-left  `}
            >
              <div
                className={`lg:w-[${
                  [0, 3, 4, 7].includes(index) ? "70%" : "90%"
                }] text-slate-900 lg:p-9 p-3`}
              >
                <p className="text-2xl capitalize font-semibold">
                  {feature.title}
                </p>
                <p className="text-sm py-1">{feature.body}</p>
              </div>
              <img src={feature.image} alt="" className="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
