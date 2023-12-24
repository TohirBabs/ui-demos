import { useState } from "react";

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
      <div
        style={{ height: open == index ? "180px" : "64px" }}
        className="p-4 rounded-xl flex-col flex gap-4 border transition-all h-16 overflow-hidden"
      >
        <button
          onClick={() => (open === index ? setopen(-1) : setopen(index))}
          className="flex justify-between items-center"
        >
          <p className="text-lg">{faq.question}</p>
          <div
            style={{
              transform: open == index ? "rotate(0deg)" : "rotate(90deg)",
            }}
            className=""
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.63605 18.364L18.364 5.63604M18.364 5.63604V14.1213M18.364 5.63604H9.87869"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        <p className="text-slate-900">{faq.answer}</p>
      </div>
    );
  };
  return (
    <div className="w-screen my-20">
      <div className="mx-auto w-[95%] text-[#D28B28] max-w-3xl  flex flex-col justify-center gap-5  items-center">
        <div className="flex gap-2 items-center">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.66675 1.75163C3.66675 1.38344 3.36827 1.08496 3.00008 1.08496C2.63189 1.08496 2.33341 1.38344 2.33341 1.75163V2.75163H1.33341C0.965225 2.75163 0.666748 3.0501 0.666748 3.41829C0.666748 3.78648 0.965225 4.08496 1.33341 4.08496H2.33341V5.08496C2.33341 5.45315 2.63189 5.75163 3.00008 5.75163C3.36827 5.75163 3.66675 5.45315 3.66675 5.08496V4.08496H4.66675C5.03494 4.08496 5.33341 3.78648 5.33341 3.41829C5.33341 3.0501 5.03494 2.75163 4.66675 2.75163H3.66675V1.75163Z"
              fill="#bfff0b"
            ></path>
            <path
              d="M3.66675 11.7516C3.66675 11.3834 3.36827 11.085 3.00008 11.085C2.63189 11.085 2.33341 11.3834 2.33341 11.7516V12.7516H1.33341C0.965225 12.7516 0.666748 13.0501 0.666748 13.4183C0.666748 13.7865 0.965225 14.085 1.33341 14.085H2.33341V15.085C2.33341 15.4531 2.63189 15.7516 3.00008 15.7516C3.36827 15.7516 3.66675 15.4531 3.66675 15.085V14.085H4.66675C5.03494 14.085 5.33341 13.7865 5.33341 13.4183C5.33341 13.0501 5.03494 12.7516 4.66675 12.7516H3.66675V11.7516Z"
              fill="#bfff0b"
            ></path>
            <path
              d="M9.28898 2.17897C9.18995 1.92151 8.94259 1.75163 8.66675 1.75163C8.3909 1.75163 8.14354 1.92151 8.04452 2.17897L6.8884 5.18488C6.68813 5.70558 6.6252 5.85563 6.53912 5.97669C6.45274 6.09816 6.34661 6.20429 6.22514 6.29066C6.10408 6.37674 5.95403 6.43968 5.43334 6.63995L2.42743 7.79606C2.16997 7.89509 2.00008 8.14245 2.00008 8.41829C2.00008 8.69414 2.16997 8.9415 2.42743 9.04052L5.43334 10.1966C5.95403 10.3969 6.10408 10.4598 6.22514 10.5459C6.34661 10.6323 6.45274 10.7384 6.53912 10.8599C6.6252 10.981 6.68813 11.131 6.8884 11.6517L8.04452 14.6576C8.14354 14.9151 8.3909 15.085 8.66675 15.085C8.9426 15.085 9.18995 14.9151 9.28898 14.6576L10.4451 11.6517C10.6454 11.131 10.7083 10.981 10.7944 10.8599C10.8808 10.7384 10.9869 10.6323 11.1084 10.5459C11.2294 10.4598 11.3795 10.3969 11.9002 10.1966L14.9061 9.04052C15.1635 8.9415 15.3334 8.69414 15.3334 8.41829C15.3334 8.14245 15.1635 7.89509 14.9061 7.79606L11.9002 6.63994C11.3795 6.43968 11.2294 6.37674 11.1084 6.29066C10.9869 6.20429 10.8808 6.09816 10.7944 5.97669C10.7083 5.85563 10.6454 5.70558 10.4451 5.18488L9.28898 2.17897Z"
              fill="#bfff0b"
            ></path>
          </svg>
          <p className="text-slate-900 font-semibold">
            frequently asked questions
          </p>
        </div>
        <h2 className="text-5xl  font-semibold leading-[1.5]">
          Have any questions?
        </h2>
        <p className="text-center w-[90%] text-slate-900">
          Financial management is a universal challenge for businesses of all
          sizes. <br />
          Dive deeper into our FAQs to find solutions.
        </p>
        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, index) => (
            <Question faq={faq} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};