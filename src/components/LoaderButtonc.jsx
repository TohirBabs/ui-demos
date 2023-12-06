import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoaderButton = () => {
  const [buttonState, setButtonState] = useState("normal");
  const [jokeData, setJokeData] = useState(null);

  const fetchJoke = async () => {
    setButtonState("loading");
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/programming/random"
      );
      const result = await response.json();
      setJokeData(result);

      setButtonState("success");
      toast.success("API call successful!");
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error fetching data. Please try again.");
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

  const progress = getWidth(buttonState);

  return (
    <div className="h-screen w-screen flex bg-gray-200 justify-center items-center">
      <div className=""></div>
      <button
        disabled={buttonState === "loading"}
        onClick={() => fetchJoke()}
        className=" bg-blue-700 h-20 px-20 rounded-full font-mono text-white text-xl font-bold   relative overflow-hidden"
      >
        <div
          style={{
            width: progress,
          }}
          className="absolute left-0 text-white top-0 bg-gray-200 opacity-50 h-full transition-width duration-700 flex items-center rounded-full"
        ></div>
        <span className="z-10 text-white relative">loader button</span>
      </button>
      <ToastContainer />
    </div>
  );
};
