import { useEffect } from "react";
import { useState } from "react";

const Grove = () => {
  const [height, setHeight] = useState("0vh");

  // useEffect to set the width to 100% after component mounts
  useEffect(() => {
    // Set the width to 100% after a delay (for animation)
    const timeout = setTimeout(() => {
      setHeight('96vh');
      console.log("done")
    }, 1000); // Adjust the delay as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);


  return (
    <div className=" bg-[#fff]  font-poppins relative">
      
      <div className="w-screen p-3">
        <div className={`relative h-full max-w-7xl mx-auto text-black`}>
          <div className="absolute left-[20%]  bg-[#fff] mt-[10vh] h-[25vh] flex items-left justify-center flex-col text-left  px-10 text-[3rem] font-medium capitalize rounded-3xl rounded-br-[0rem]">
            {/* <div className="absolute top-0 -right-12 z-10  w-12 h-6 bg-transparent rounded-tl-3xl shadow-[-2rem_0px_0px_0px_#fff]"></div> */}
            {/* <div className="absolute top-0 -left-12 z-10  w-12 h-6 bg-transparent rounded-tr-3xl shadow-[2rem_0px_0px_0px_#fff]"></div> */}
            <div className="absolute bottom-0 -right-12 z-10  w-12 h-6 bg-transparent rounded-bl-3xl shadow-[-2rem_0px_0px_0px_#fff]"></div>
            <p className="leading-[4rem] ">nurturing nature,</p>
            <p className="leading-[4rem]">harvesting excellence</p>
          </div>
          <div className="absolute left-[30%] max-w-[50vw] top-[35vh] bg-[#fff] h-[25vh]   p-8 rounded-bl-3xl rounded-tr-3xl ">
            {/* <div className="absolute top-0 -right-12 z-10  w-12 h-6 bg-transparent rounded-tl-3xl shadow-[-2rem_0px_0px_0px_#fff]"></div> */}
            <div className="absolute top-0 -left-12 z-10  w-12 h-6 bg-transparent rounded-tr-3xl shadow-[1.5rem_0px_0px_0px_#fff]"></div>
            <div className="absolute bottom-0 -right-12 z-10  w-12 h-6 bg-transparent rounded-bl-3xl shadow-[-2rem_0px_0px_0px_#fff]"></div>
            <p className="leading-[1.7rem] ">
              At HarvestGrove, we are passionate about agriculture and committed
              to providing the highest quality produce and services to our
              customers. With a legacy of farming excellence spanning 10 years,
            </p>
          </div>
          <div className="absolute right-0 w-[50%] top-[60vh] bg-[#fff]   p-5 pt-8 text-sm rounded-bl-3xl  ">
            {/* <div className="absolute top-0 -right-12 z-10  w-12 h-6 bg-transparent rounded-tl-3xl shadow-[-2rem_0px_0px_0px_#fff]"></div> */}
            <div className="absolute top-0 -left-12 z-10  w-12 h-6 bg-transparent rounded-tr-3xl shadow-[2rem_0px_0px_0px_#fff]"></div>
            <div className="absolute -top-12 right-0 z-10  w-6 h-12 bg-transparent rounded-br-3xl shadow-[0rem_2rem_0px_0px_#fff]"></div>
            <div className="absolute -bottom-12 right-0 z-10  w-6 h-12 bg-transparent rounded-tr-3xl shadow-[0rem_-2rem_0px_0px_#fff]"></div>
            <div className="flex p-2 rounded-full border border-gray-400 w-max gap-3">
              <div className="flex relative w-20 items-center">
                <img src="/avt1.png" alt="" className="w-12 h-12 " />
                <img
                  src="/avt2.png"
                  alt=""
                  className="w-12 h-12   absolute left-6"
                />
                <img
                  src="/avt3.png"
                  alt=""
                  className="w-12 h-12   absolute left-12"
                />
              </div>
              <div className="px-3">
                <p className="font-semibold text-2xl">200k</p>
                <p className="capitalize text-xs">happy customers</p>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] absolute top-[40vh] left-5  rounded-3xl p-2">
            <img src="/cardimg.png" alt="" className="rounded-2xl w-[300px]" />
            <div className="flex flex-col gap-2 py-3 p-2">
              <div className="bg-gray-200 h-3 rounded"></div>
              <div className="bg-gray-200 h-3 rounded w-[90%]"></div>
              <div className="bg-gray-200 h-3 rounded w-[80%]"></div>
            </div>
            <div className="flex items-center p-2 gap-2 border-t">
              <img src="/avtcard.png" alt="" className="rounded-2xl" />
              <div className="capitalize">
                <p className=" font-bold text-sm">recce eunice</p>
                <p className="text-xs">rural roots ranch</p>
              </div>
            </div>
          </div>
          <img
            src="/bg.png"
            alt=""
            className={`rounded-3xl  w-full object-cover  mx-auto transition-all duration-1000 ease-in-out h-[${height}]`}
          />
        </div>
      </div>
      
    </div>
  );
};

export default Grove;
