import React from "react";

export const Footer = () => {
  return (
    <div className="w-screen flex justify-between p-12 gap-5 py-20 text-xs border-t border-[#D28B28]/70">
      <div className="flex flex-col text-sm gap-8 max-w-[250px]">
        <img src="/bujeti.svg" alt="" className="h-10 w-max" />
        <p>Plot 1B, Block 129, Jide Sawyerr Drive, Lekki Phase 1, Lagos.</p>
        <p>Talk to a product expert today, use our chat box,email us</p>
      </div>
      <div className="flex flex-col gap-4 capitalize ">
        <p className="text-base font-semibold">products</p>
        <div className="flex flex-col gap-3 ">
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            expense management
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            corporate cards
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            bank payments
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            reimbursements
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            reporting & insights
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            fund collection
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            bank sync
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 capitalize">
        <p className="text-base font-semibold">solutions</p>
        <div className="flex flex-col gap-3 ">
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            for startups
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            for employees
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            for finance teams
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            for travel & hospitality
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            for technology
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            for healthcare
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            for marketing
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            for restaurants
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            for non-profit
          </a>
        </div>
      </div>{" "}
      <div className="flex flex-col gap-4 capitalize">
        <p className="text-base font-semibold">company</p>
        <div className="flex flex-col gap-3 ">
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            about us
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            contact us
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            careers
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            pricing
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 capitalize">
        <p className="text-base font-semibold">resources</p>
        <div className="flex flex-col gap-3 ">
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            FAQ
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            blog
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            help center
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            terms of use
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            privacy policy
          </a>
        </div>
      </div>{" "}
      <div className="flex flex-col gap-4 capitalize">
        <p className="text-base font-semibold">using bujeti</p>
        <div className="flex flex-col gap-3 ">
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            linkedin
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            X.com
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            instagram
          </a>
          <a
            href="/"
            className="text-slate-700 hover:text-black hover:font-semibold"
          >
            youtube
          </a>
        </div>
      </div>
    </div>
  );
};
