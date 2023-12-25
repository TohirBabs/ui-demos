// import { useState } from "react";

import FeaturesIcon from "./icons/Features";

const Features = () => {
  const featureList = [
    {
      title: "expense management",
      body: "Manage your company&#39;s expenses by organizing transactions, tracking vendors, and implementing spending policies.",
      cta: "organize your expenses",
      image: "expense.webp",
    },
    {
      title: "corporate cards",
      body: "  Generate physical, single-use, and multi-use virtual multi-currency cards for your team to spend flexibly without needing cash.",
      cta: "  explore bujeti cards",
      image: "cards.webp",
    },
    {
      title: "cash accounts",
      body: " Manage your primary bank account and sub-accounts to make payments, collect payments, and withdraw funds.",
      cta: "learn about accounts",
      image: "account.webp",
    },
    {
      title: "bank payments",
      body: "Manage your financial transactions, make single and batch payments, and set approval rules.",
      cta: "explore bank payments",
      image: "payment.webp",
    },
    {
      title: "reimbursements",
      body: " Keep your employees happy by reimbursing them for out-of-pocket expenses in just a few clicks.",
      cta: "explore fast reimbursements",
      image: "reimbursement.webp",
    },
    {
      title: "fund collection",
      body: " Secure payment gateway to collect payments from customers anywhere, anytime.",
      cta: "start collecting payments",
      image: "fund.webp",
    },
    {
      title: "bank sync",
      body: " Connect your accounts, track your spending, and manage your budget from one easy-to-use dashboard.",
      cta: "explore bank sync",
      image: "sync.webp",
    },
    {
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
          </div>{" "}
          <div className="border-b  border-slate-300">
            your finances effectively
          </div>
        </h2>
        <p className="lg:text-lg text-sm lg:w-[70%] w-[88%] text-slate-900">
          Introducing Bujeti, a complete suite of finance tools designed to
          enhance your productivity, streamline operations, and drive business
          growth.
        </p>
      </div>
      <div className="flex lg:border-t border-slate-300 flex-col items-end gap-10 relative w-full max-w-6xl">
        <div className="lg:grid lg:grid-cols-12 flex flex-col gap-5 lg:gap-10 w-full max-w-6xl lg:p-10 p-3 mx-auto">
          <div className="rounded-3xl flex flex-col justify-between overflow-hidden text-left bg-[#e9e9e7]  lg:col-span-7 ">
            <div className="lg:w-[70%] text-slate-900 lg:p-9 p-3">
              <p className="text-2xl capitalize font-semibold">
                corporate cards
              </p>
              <p className="text-sm py-1">
                Generate physical, single-use, and multi-use virtual
                multi-currency cards for your team to spend flexibly without
                needing cash.
              </p>
            </div>
            <img src="/cards.webp" alt="" className="" />
          </div>
          <div className="rounded-3xl overflow-hidden text-left bg-[#ebe8de]  lg:col-span-5 ">
            <div className="w-[90%] lg:p-9 p-3 text-slate-900 p-4">
              <p className="text-2xl capitalize font-semibold">
                expense management
              </p>
              <p className="text-sm py-1">
                Manage your company&#39;s expenses by organizing transactions,
                tracking vendors, and implementing spending policies.
              </p>
            </div>
            <img src="/expense.webp" alt="" className="" />
          </div>
          <div className="rounded-3xl overflow-hidden text-left bg-[#fcfbfc]  lg:col-span-5 ">
            <div className="w-[90%] lg:p-9 p-3 text-slate-900 p-4">
              <p className="text-2xl capitalize font-semibold">cash accounts</p>
              <p className="text-sm py-1">
                Manage your primary bank account and sub-accounts to make
                payments, collect payments, and withdraw funds
              </p>
            </div>
            <img src="/account.webp" alt="" className="" />
          </div>
          <div className="rounded-3xl flex flex-col justify-between overflow-hidden text-left bg-[#f2f5f1]  lg:col-span-7 ">
            <div className="lg:w-[70%] text-slate-900 lg:p-9 p-3">
              <p className="text-2xl capitalize font-semibold">bank payments</p>
              <p className="text-sm py-1">
                Manage your financial transactions, make single and batch
                payments, and set approval rules.
              </p>
            </div>
            <img src="/payment.webp" alt="" className="" />
          </div>
          <div className="rounded-3xl flex flex-col justify-between overflow-hidden text-left bg-[#e9e9e7]  lg:col-span-7 ">
            <div className="lg:w-[70%] text-slate-900 lg:p-9 p-3">
              <p className="text-2xl capitalize font-semibold">
                reimbursements
              </p>
              <p className="text-sm py-1">
                Keep your employees happy by reimbursing them for out-of-pocket
                expenses in just a few clicks.
              </p>
            </div>
            <img src="/reimbursement.webp" alt="" className="" />
          </div>
          <div className="rounded-3xl overflow-hidden text-left bg-[#f8ede8]  lg:col-span-5 ">
            <div className="w-[90%] lg:p-9 p-3 text-slate-900 p-4">
              <p className="text-2xl capitalize font-semibold">
                fund collection
              </p>
              <p className="text-sm py-1">
                {" "}
                Secure payment gateway to collect payments from customers
                anywhere, anytime.
              </p>
            </div>
            <img src="/fund.webp" alt="" className="" />
          </div>
          <div className="rounded-3xl overflow-hidden text-left bg-[#f2f5f1]  lg:col-span-5 ">
            <div className="w-[90%] lg:p-9 p-3 text-slate-900 p-4">
              <p className="text-2xl capitalize font-semibold">bank sync</p>
              <p className="text-sm py-1">
                Connect your accounts, track your spending, and manage your
                budget from one easy-to-use dashboard.
              </p>
            </div>
            <img src="/sync.webp" alt="" className="" />
          </div>
          <div className="rounded-3xl flex flex-col justify-between overflow-hidden text-left bg-[#d6e3e8]  lg:col-span-7 ">
            <div className="lg:w-[70%] text-slate-900 lg:p-9 p-3">
              <p className="text-2xl capitalize font-semibold">
                reports & insights
              </p>
              <p className="text-sm py-1">
                Track your business activities, analyze performance, optimize
                your operations, and ultimately succeed in achieving your goals.
              </p>
            </div>
            <img src="/report.webp" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
