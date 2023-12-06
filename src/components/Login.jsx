import { useState } from "react";

export const Login = () => {
  const [buttonState, setButtonState] = useState("normal");
  const [jokeData, setJokeData] = useState(null);

  const fetchJoke = async () => {
    setButtonState("loading");
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/programming/radom"
      );
      const result = await response.json();
      setJokeData(result);

      setButtonState("success");
      // toast.success("API call successful!");
    } catch (error) {
      console.error("Error fetching data:", error);
      // toast.error("Error fetching data. Please try again.");
      setButtonState("error");
    }
  };
  const getWidth = (buttonState) => {
    switch (buttonState) {
      case "normal":
        return "0%";
      case "loading":
        return "70%";
      case "success":
        return "100%";
      case "error":
        return "0%";
      default:
        return "0%";
    }
  };

  const getColor = (buttonState) => {
    switch (buttonState) {
      case "normal":
        return "rgb(255 255 235)";
      case "loading":
        return "70%";
      case "success":
        return "rgb(22 163 74)";
      case "error":
        return "rgb(220 38 38)";
      default:
        return "rgb(255 255 235)";
    }
  };

  const progress = getWidth(buttonState);
  const color = getColor(buttonState);
  return (
    <div className="flex flex-col font-dm items-center justify-between gap-10 text-sm relative p-1 pt-0 w-screen h-screen text-center pb-32 overflow-hidden  top side-lay noscroll">
      <div
        style={{ opacity: buttonState === "error" ? 1 : 0 }}
        className="absolute top-10 text-xl shadow-lg border bg-white rounded-md p-4 transition-all font-mono"
      >
        ❌ error: login unsuccessfull! 👎🏼
        {/* ✅ login successful 👍🏻 */}
      </div>
      <div className="form-imgs">
        <img
          className="absolute top-[40%] left-10"
          src="/form-img1.png"
          alt=""
        />
        <img
          className="absolute top-[20%] right-10"
          src="/form-img2.png"
          alt=""
        />
      </div>

      <img className="w-16" src="/form-logo.png" alt="" />

      <h1 className="font-semibold text-3xl">Login to your account</h1>
      <p className="max-w-[300px]">
        Kindly provide your Email address to login to your southsidefood
        account.
      </p>
      <form action="" className="flex flex-col items-center my-5 gap-3 w-[40%]">
        <div className="relative  text-left w-full  ">
          <label className="absolute top-1 left-3">Email Address</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="outline-[#f59024]  text-base rounded-lg border focus:border-[#f59024] p-1 px-3 pt-7 w-full"
          />
        </div>
        <div className="relative  text-left w-full  ">
          <label className="absolute top-1 left-3">Password</label>
          <input
            type="password"
            placeholder="******"
            className="outline-[#f59024]  text-base rounded-lg border focus:border-[#f59024] p-1 px-3 pt-7 w-full"
          />
        </div>

        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember Me</label>
          </div>
          <div className="text-[#f59024]">forgot password?</div>
        </div>
      </form>

      {/* <Link href="/jon doe/account"> */}

      <button
        disabled={buttonState === "loading"}
        onClick={() => fetchJoke()}
        className="flex justify-center mt-3 bg-[#f59024] w-[40%] p-4 shadow-md rounded-lg font-mono    relative overflow-hidden"
      >
        <span className="z-10 text-white  relative">log in</span>
        <div
          style={{
            width: progress,
            backgroundColor: color,
          }}
          className="absolute bottom-0 left-0  rounded-full   h-1 transition-width duration-700 flex items-center "
        ></div>
      </button>
      {/* </Link> */}

      <div className="bottom flex">
        <p>Don&#39;t have an account?</p>

        <a href="" className="text-[#f59024]">
          Sign Up
        </a>
      </div>
    </div>
  );
};
