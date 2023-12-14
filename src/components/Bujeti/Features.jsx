import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Features = () => {
  const [visibleSection, setVisibleSection] = useState(0);

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

  const FeatureSection = ({ feature, sectionId }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          entry.isIntersecting && setVisibleSection(sectionId);
        },
        { rootMargin: "0px", threshold: 0.5 } // Adjust threshold as needed
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
    console.log(visibleSection);

    return (
      <section
        ref={sectionRef}
        id={sectionId}
        className="text-left w-[90vw]  h-[100vh] flex-col flex gap-10 py-20"
      >
        <h2 className="text-5xl capitalize max-w-xs  font-semibold leading-[1.3]">
          {feature.title}
        </h2>
        <p className=" w-[35%] text-slate-900">{feature.body}</p>
        <button className=" w-max  py-2 px-6 rounded-xl border-4 bg-gray-300/10 backdrop-blur-sm">
          {feature.cta}
        </button>
      </section>
    );
  };
  const SectionImage = () => {
    return (
      <img
        src={featureList[visibleSection].image} // Change 'placeholder-image-url' to your placeholder image URL
        alt="Section Image"
        className="h-[70vh] w-full object-cover "
      />
    );
  };

  return (
    <div className="w-screen  ">
      <div className="w-screen min-h-[850vh] h-full absolute -z-10  ">
        <div className=" absolute w-screen h-full  flex flex-col justify-between">
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
          <div className="h-[1px] bg-[#D28B28]"></div>
        </div>
        <div className=" absolute w-screen h-full flex  justify-between">
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
          <div className="w-[1px] bg-[#D28B28]"></div>
        </div>
        <div className="absolute w-screen h-full to-white/80 from-white bg-gradient-to-br"></div>
      </div>
      <div className=" text-center text-[#D28B28]  flex flex-col gap-5 items-center py-20 ">
        <div className=" text-center text-[#D28B28] mx-auto w-[95%] max-w-4xl  flex flex-col gap-5 items-center">
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
                fill="#D28B28"
              ></path>
              <path
                d="M3.66675 11.7516C3.66675 11.3834 3.36827 11.085 3.00008 11.085C2.63189 11.085 2.33341 11.3834 2.33341 11.7516V12.7516H1.33341C0.965225 12.7516 0.666748 13.0501 0.666748 13.4183C0.666748 13.7865 0.965225 14.085 1.33341 14.085H2.33341V15.085C2.33341 15.4531 2.63189 15.7516 3.00008 15.7516C3.36827 15.7516 3.66675 15.4531 3.66675 15.085V14.085H4.66675C5.03494 14.085 5.33341 13.7865 5.33341 13.4183C5.33341 13.0501 5.03494 12.7516 4.66675 12.7516H3.66675V11.7516Z"
                fill="#D28B28"
              ></path>
              <path
                d="M9.28898 2.17897C9.18995 1.92151 8.94259 1.75163 8.66675 1.75163C8.3909 1.75163 8.14354 1.92151 8.04452 2.17897L6.8884 5.18488C6.68813 5.70558 6.6252 5.85563 6.53912 5.97669C6.45274 6.09816 6.34661 6.20429 6.22514 6.29066C6.10408 6.37674 5.95403 6.43968 5.43334 6.63995L2.42743 7.79606C2.16997 7.89509 2.00008 8.14245 2.00008 8.41829C2.00008 8.69414 2.16997 8.9415 2.42743 9.04052L5.43334 10.1966C5.95403 10.3969 6.10408 10.4598 6.22514 10.5459C6.34661 10.6323 6.45274 10.7384 6.53912 10.8599C6.6252 10.981 6.68813 11.131 6.8884 11.6517L8.04452 14.6576C8.14354 14.9151 8.3909 15.085 8.66675 15.085C8.9426 15.085 9.18995 14.9151 9.28898 14.6576L10.4451 11.6517C10.6454 11.131 10.7083 10.981 10.7944 10.8599C10.8808 10.7384 10.9869 10.6323 11.1084 10.5459C11.2294 10.4598 11.3795 10.3969 11.9002 10.1966L14.9061 9.04052C15.1635 8.9415 15.3334 8.69414 15.3334 8.41829C15.3334 8.14245 15.1635 7.89509 14.9061 7.79606L11.9002 6.63994C11.3795 6.43968 11.2294 6.37674 11.1084 6.29066C10.9869 6.20429 10.8808 6.09816 10.7944 5.97669C10.7083 5.85563 10.6454 5.70558 10.4451 5.18488L9.28898 2.17897Z"
                fill="#D28B28"
              ></path>
            </svg>
            <p className="text-slate-900 font-semibold">Features</p>
          </div>
          <h2 className="text-5xl  font-semibold leading-[1.5]">
            All you need to run your finances effectively
          </h2>
          <p className="text-lg w-[90%] text-slate-900">
            Introducing Bujeti, a complete suite of finance tools designed to
            enhance your productivity, streamline operations, and drive business
            growth.
          </p>
        </div>
        <div className="flex flex-col items-end gap-10 py-20 relative w-screen">
          <div className="sticky top-[10vh] right-0 w-[50%] rounded-l-3xl overflow-hidden shadow-lg">
            <SectionImage />
          </div>

          <div className="relative -top-[75vh]">
            {featureList.map((feature, index) => (
              <FeatureSection key={index} feature={feature} sectionId={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
