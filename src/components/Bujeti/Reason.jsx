import { BarChartUpIcon } from "./icons/BarChartUp";
import { BookmarkCheckIcon } from "./icons/BookmarkCheck";
import { CoinsHand } from "./icons/CoinsHand";
import { FileIcon } from "./icons/File";
import { LineChartUpIcon } from "./icons/LineChartUp";
import { TableIcon } from "./icons/Table";
import { UsersIcon } from "./icons/Users";

export const Reason = () => {
  const forList = [
    {
      icon: <LineChartUpIcon />,
      title: "for finance managers",
      text: "Track costs with precision for financial control.",
    },
    {
      icon: <BarChartUpIcon />,
      title: "for Ceos",
      text: "Drive growth, increase profitability, and improve the bottom-line.",
    },
    {
      icon: <TableIcon />,
      title: "for accountants",
      text: "Make tasks easier and reports clearer with our expense management software.",
    },
    {
      icon: <BookmarkCheckIcon />,
      title: "for employees",
      text: " Simplified expenses to enjoy faster reimbursements.",
    },
    {
      icon: <UsersIcon />,
      title: "for team managers",
      text: "   Allocate resources to your team members and stay on budget.",
    },

    {
      icon: <FileIcon />,
      title: "for CFOs",
      text: "Master finances, stay up-to-date with the latest regulations and ensure compliance.",
    },
    {
      icon: <CoinsHand />,
      title: "for COOs",
      text: "Streamline expenses to ensure efficient and cost-effective operations.",
    },
  ];

  const ForCards = ({ card }) => {
    return (
      <div className=" flex flex-col max-w-[320px] w-full bg-white/20 cursor-pointer  rounded-lg p-4 pr-8  lg:gap-3 gap-2">
        <div className="flex gap-3 items-center">
          {card.icon}
          <p className="text-[#bfff0b] text-lg font-bold capitalize">
            {card.title}
          </p>
        </div>

        <p className="text-sm">{card.text}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-[#1C1917] max-w-6xl mx-auto lg:flex-row  lg:gap-10 gap-4 lg:py-10 p-10 text-white justify-between items-center">
      <div className=" flex lg:w-[380px] flex-col gap-5">
        <div className="flex w-max gap-2 items-center rounded-full border border-slate-300 p-1  px-3">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.96294 1.08457L4.90299 1.0844C4.69428 1.08356 4.43716 1.08252 4.21061 1.16498C3.84026 1.29978 3.54851 1.59152 3.41372 1.96187C3.36045 2.10822 3.34203 2.26732 3.33589 2.41789L2.31571 2.41789C2.17568 2.41787 2.03926 2.41786 1.92321 2.42578C1.79629 2.43444 1.64581 2.45475 1.48978 2.51938C1.16307 2.65471 0.903509 2.91427 0.768184 3.24098C0.703555 3.39701 0.683239 3.54749 0.67458 3.67441C0.666662 3.79046 0.666675 3.92688 0.666689 4.06691L0.666657 4.50961C0.66637 5.03987 0.666157 5.43364 0.757555 5.77474C1.00413 6.69499 1.72293 7.41378 2.64317 7.66036C2.89687 7.72834 3.17971 7.74564 3.52617 7.74992C4.03808 9.47183 5.51699 10.7775 7.33329 11.0373V11.7512H7.037C5.35969 11.7512 3.99996 13.1109 3.99996 14.7883C3.99996 15.3201 4.43109 15.7512 4.96292 15.7512H11.037C11.5688 15.7512 12 15.3201 12 14.7883C12 13.1109 10.6402 11.7512 8.96292 11.7512H8.66663V11.0373C10.4829 10.7775 11.9619 9.47184 12.4738 7.74992C12.8203 7.74564 13.1031 7.72834 13.3568 7.66036C14.2771 7.41378 14.9958 6.69499 15.2424 5.77474C15.3338 5.43364 15.3336 5.03987 15.3333 4.50961L15.3333 4.0669C15.3333 3.92687 15.3333 3.79046 15.3254 3.67441C15.3167 3.54749 15.2964 3.39701 15.2318 3.24098C15.0965 2.91427 14.8369 2.65471 14.5102 2.51938C14.3542 2.45475 14.2037 2.43444 14.0768 2.42578C13.9607 2.41786 13.8243 2.41787 13.6843 2.41789L12.6641 2.41789C12.6579 2.26732 12.6395 2.10822 12.5862 1.96187C12.4514 1.59152 12.1597 1.29978 11.7893 1.16498C11.5628 1.08252 11.3057 1.08356 11.097 1.0844L11.037 1.08457H4.96294ZM3.33331 4.28456C3.33331 4.09787 3.33331 4.00453 3.29698 3.93323C3.26502 3.87051 3.21402 3.81951 3.1513 3.78755C3.08 3.75122 2.98666 3.75122 2.79997 3.75122L2.49565 3.75122C2.31954 3.75122 2.23148 3.75122 2.16209 3.78522C2.10187 3.81473 2.05009 3.86387 2.01748 3.92247C1.97991 3.99 1.97545 4.07525 1.96654 4.24575C1.94554 4.64771 1.94768 5.06475 2.04546 5.42965C2.16875 5.88977 2.52814 6.24917 2.98826 6.37246C3.06745 6.39368 3.16162 6.40519 3.33331 6.41131V4.28456ZM12.6666 4.28674C12.6666 4.09936 12.6666 4.00568 12.7032 3.93423C12.7353 3.87138 12.7865 3.82035 12.8495 3.78849C12.9211 3.75226 13.0148 3.75264 13.2021 3.75341L13.5009 3.75463C13.6763 3.75535 13.764 3.7557 13.8331 3.78976C13.8931 3.81934 13.9445 3.86835 13.977 3.9268C14.0144 3.99411 14.019 4.07909 14.028 4.24906C14.0494 4.6516 14.0491 5.07681 13.9545 5.42965C13.8312 5.88977 13.4718 6.24917 13.0117 6.37246C12.9325 6.39368 12.8383 6.40519 12.6666 6.41131V4.28674Z"
              fill="white"
            />
          </svg>
          <p className="text-white text-xs lg:text-sm font-semibold">why us?</p>
        </div>
        <h2 className="text-[1.7rem] lg:text-4xl font-semibold lg:leading-[1.4] text-[#bfff0b]  ">
          Bujeti is your financial sidekick
        </h2>
        <p className=" lg:max-w-md ">
          Simplify your financial management with Bujeti and enjoy seamless
          expense solutions for your business.
        </p>
      </div>

      <div className="flex flex-1 flex-wrap lg:max-h-[70vh] rounded-xl   my-3 gap-2 ">
        {forList.map((list, index) => (
          <ForCards key={index} card={list} />
        ))}
      </div>
    </div>
  );
};
