import { useState } from "react";

export const LoaderButton = () => {
  const [buttonState, setButtonState] = useState("normal");
  const [jokeData, setJokeData] = useState(null);

  const fetchJoke = async () => {
    setButtonState("loading");
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/programming/ranom"
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
        return "rgb(37 99 235)";
      case "loading":
        return "70%";
      case "success":
        return "rgb(22 163 74)";
      case "error":
        return "rgb(220 38 38)";
      default:
        return "rgb(37 99 235)";
    }
  };

  const progress = getWidth(buttonState);
  const color = getColor(buttonState);

  return (
    <div className="h-screen w-screen flex bg-gray-400 justify-center items-center">
      <button
        disabled={buttonState === "loading"}
        onClick={() => fetchJoke()}
        className=" bg-white h-20 px-20 shadow rounded-lg font-mono  text-xl font-bold   relative overflow-hidden"
      >
        <span className="z-10 text-blue-600 relative">progress button</span>
        <div
          style={{
            width: progress,
            backgroundColor: color,
          }}
          className="absolute bottom-0 left-0  rounded-full   h-1 transition-width duration-700 flex items-center "
        ></div>
      </button>
      <div
        style={{ opacity: buttonState === "error" ? 1 : 0 }}
        className="absolute top-10 text-xl bg-white rounded-2xl p-4 transition-all font-mono"
      >
        ❌ api call unsuccessfull!
      </div>
      {/* {buttonState === "success" && } */}
    </div>
  );
};
