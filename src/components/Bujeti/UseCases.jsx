import { MedalIcon } from "./icons/Medal";
import React, { useState, useEffect } from "react";

export const UseCases = () => {
  const casesList = [
    {
      img: "agriculture.webp",
      title: "Agriculture",
      text: "Handle equipment, feed, and labor expenses with ease on Bujeti.",
    },
    {
      img: "technology.webp",
      title: "technology",
      text: "Bujeti is for fast-paced tech companies that want to effortlessly manage expenses, and focus on innovation, not paperwork.",
    },
    {
      img: "hospitality.webp",

      title: "travel and hospitality",
      text: "Bujeti helps you take control of your expenses, so you can give your guests the best experience without breaking the bank.",
    },
    {
      img: "logistics.webp",
      title: "logistics",
      text: "Track transportation costs and handle surprises with confidence.",
    },
    {
      img: "healthcare.webp",
      title: "healthcare",
      text: "Bujeti makes managing medical expenses a breeze so you can focus on patient care.",
    },

    {
      img: "manufacturing.webp",
      title: "manufacturing",
      text: "Manage production costs and adapt to supply chain changes effortlessly.",
    },
    {
      img: "real-estate.webp",
      title: "real estate",
      text: "Maintain your properties without breaking a sweat. Take charge of expenses and tenant management effortlessly with Bujeti.",
    },
    {
      img: "construction.webp",
      title: "construction",
      text: "Bujeti helps you streamline project costs, so you can build with confidence.",
    },
    {
      img: "retail.webp",
      title: "retail",
      text: "Keep track of inventory and marketing expenses like a pro on Bujeti.",
    },
  ];

  const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % casesList.length);
      }, 5000);

      return () => clearInterval(interval);
    }, []);
    return casesList.map((usecase, index) => (
      <div
        key={index}
        className={`absolute  top-0 left-0  w-full h-full transition-opacity duration-1000 ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={usecase.img}
          alt={`Image ${index + 1}`}
          className=" h-full lg:w-[72rem] opacity-30  object-cover"
        />
      </div>
    ));
  };

  const CardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % casesList.length);
      }, 5000);

      return () => clearInterval(interval);
    }, []);
    return casesList.map((usecase, index) => (
      <div
        key={index}
        className={`absolute transition-opacity mx-auto w-full duration-1000 ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mx-auto flex justify-center">
          <div className=" flex flex-col w-full lg:w-[600px]  text-center items-center justify-center  cursor-pointer  rounded-lg p-4 lg:px-20  lg:gap-6 gap-2">
            <div className="flex gap-3 justify-center items-center">
              {/* {card.icon} */}
              <p className="text-[#D28B28] text-4xl font-bold capitalize">
                {usecase.title}
              </p>
            </div>

            <p className="lg:text-2xl lg:max-w-lg">{usecase.text}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="relative overflow-hidden  max-w-6xl h-[90vh] mx-auto bg-black  lg:gap-10 p-6 gap-4 lg:py-10  text-white ">
      <div className=" flex z-10 relative  flex-col  items-center lg:gap-32 gap-[30vh] ">
        <div className="">
          <div className="flex w-max gap-2 items-center mx-auto rounded-full border border-slate-300 p-1  px-3">
            <MedalIcon />
            <p className="text-white text-xs lg:text-sm font-semibold">
              use cases
            </p>
          </div>
          <h2 className="text-[1.7rem] lg:text-4xl font-semibold text-center font-poppins lg:leading-[1.4] pt-10   ">
            The financial management solution <br />
            for every industry.
          </h2>
        </div>
        <div className="relative w-full ">
          <CardCarousel />
        </div>
      </div>
      <ImageCarousel />
    </div>
  );
};
