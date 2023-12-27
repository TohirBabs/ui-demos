import { useState } from "react";
import FeaturesIcon from "./icons/Features";
import { PlusCircle } from "./icons/PlusCircle";

export const FAQ = () => {
  const [open, setopen] = useState(-1);

  const faqs = [
    {
      question: "what is Bujeti?",
      answer:
        " Bujeti is a comprehensive financial management platform designed for African businesses. Our platform simplifies expense management, provides corporate banking solutions, and offers real-time financial insights.",
    },
    {
      question: "What problems does Bujeti address?",
      answer:
        "Bujeti addresses challenges such as paper-based workflows, manual financial processes, and disconnected systems. We aim to unlock success for your business by optimizing cash flow, enhancing budgeting and forecasting, ensuring compliance, preventing resource misallocation, and supporting your scaling endeavors.",
    },
    {
      question: "Which industries does Bujeti cover?",
      answer:
        "Bujeti caters to a diverse range of industries, including Agriculture, Technology, Travel & Hospitality, Logistics, Healthcare, Manufacturing, Real Estate, Construction, Retail, Media, and Entertainment.",
    },
    {
      question: "Who are the primary users of Bujeti?",
      answer:
        "Bujeti serves as the financial sidekick for CEOs, CFOs, COOs, Finance Managers, Accountants, Team Managers, and Team members/Employees.",
    },
    {
      question: "What can I do on Bujeti?",
      answer:
        "Bujeti provides features like Cash Management, Expenses Workflows, and Payments, including Multicurrency payout, Payables Management, Bank Transfer, Batch Payment, Bills Payment, and Corporate Cards.",
    },
    {
      question: "What does it cost to use Bujeti?",
      answer:
        "All new users get a 3-month free access with unlimited features. This includes exclusive access to the customer support Slack Channel, early access to new features, priority for features requests, cross-communication benefits, and an exclusive referral package. For more information, see our pricing page.",
    },
    {
      question: "How can I get started with Bujeti?",
      answer:
        "You can create an account in just 2 minutes here. If you need some hand-holding, or would like to see a demo, fill this form here. Additionally, you can reach us via email at contact@bujeti.com.",
    },
    {
      question: "Why should I trust Bujeti with my money?",
      answer:
        "We do not hold any funds directly. Funds are held by our CBN-regulated bank partners. We are also backed by high-profile investors like Y Combinator, Entrée Capital, Voltron Capital, and others. Finally, Africa’s industry leaders and businesses like you trust us. You should too.",
    },
  ];
  const Question = ({ faq, index }) => {
    return (
      <div className=" flex-col flex lg:text-lg items-center w-full h-full p-3  border-b transition-all overflow-hidden ">
        <button
          onClick={() => (open === index ? setopen(-1) : setopen(index))}
          className="lg:text-lg w-full py-2 flex justify-between text-left font-semibold"
        >
          <p>{faq.question}</p>
          <div
            style={{
              transform: open === index ? "rotate(45deg)" : "rotate(0deg)",
            }}
            className="transition-all"
          >
            <PlusCircle />
          </div>
        </button>
        <p
          style={{ height: open === index ? "100%" : "0px" }}
          className="text-black  overflow-hidden  transition-all duration-500"
        >
          {faq.answer}
        </p>
      </div>
    );
  };
  return (
    <div className="mx-auto w-[98%] bg-white py-20 max-w-6xl text-black flex flex-col justify-center  items-center">
      <div className="  lg:py-20 py-8  flex flex-col  items-center">
        <div className="flex gap-2 items-center rounded-full p-1 bg-white px-3">
          <FeaturesIcon />
          <p className="text-slate-900 text-xs lg:text-sm font-semibold">
            frequently asked questions
          </p>
        </div>
        <h2 className="text-[1.7rem] lg:text-5xl text-[#D28B28]  text-center flex flex-col  w-full font-semibold lg:leading-[1.4]">
          Have any questions?
        </h2>
        <p className="lg:text-lg text-sm lg:w-[70%] text-center w-[88%] text-slate-900">
          Financial management is a universal challenge for businesses of all
          sizes. Dive deeper into our FAQs to find solutions.
        </p>
      </div>

      <div className="flex justify-center  w-full border max-w-2xl flex-col items-center">
        {faqs.map((faq, index) => (
          <Question faq={faq} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};
