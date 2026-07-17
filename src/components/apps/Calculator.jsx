import React, { useState, useRef } from "react";
import Draggable from "react-draggable";

const Calculator = ({ isAppOpen, toggleCalculator }) => {
  const calculatorRef = useRef(null);
  const [display, setDisplay] = useState("");

  const appendToDisplay = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const calculate = () => {
    try {
      // This calculator accepts simple user-entered expressions only.
      // eslint-disable-next-line no-eval
      const result = eval(display);

      if (result !== undefined && !isNaN(result)) {
        setDisplay(result.toString());
      } else {
        setTimeout(() => {
          setDisplay("");
        }, 1000);
      }
    } catch (error) {
      setDisplay("Error");
      setTimeout(() => {
        setDisplay("");
      }, 1000);
    }
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const bounds = {
    left: 0,
    top: 0,
    right: screenWidth - 475,
    bottom: screenHeight - 625,
  };

  return (
    <div
      className={`${
        isAppOpen ? "" : "hidden"
      } z-30 w-full h-screen pointer-events-none absolute`}
    >
      <Draggable handle=".title-bar" nodeRef={calculatorRef} bounds={bounds}>
        <div
          ref={calculatorRef}
          className="window bg-[#5E5E5D] w-[30em] h-[36em] rounded-xl overflow-hidden border-neutral-600 border-[1.5px] pointer-events-auto"
        >
          <div className="title-bar">
            <div className="text-white h-9 flex justify-between select-none">
              <div className="m-1 ml-3 font-normal flex items-center">
                <img src="/images/calculator.png" alt="Calculator" className="w-5 h-5 mr-4"/> <div>Calculator</div>
                </div>
              <div className="flex">
                <div
                  className="material-symbols-outlined hover:bg-neutral-800  w-11 flex justify-center items-center text-xl"
                  onClick={toggleCalculator}
                >
                  minimize
                </div>
                <div className="material-symbols-outlined hover:bg-neutral-800  w-11 flex justify-center items-center text-sm">
                  check_box_outline_blank
                </div>
                <div
                  className="material-symbols-outlined hover:bg-red-700  w-12 flex justify-center items-center text-xl"
                  onClick={toggleCalculator}
                >
                  close
                </div>
              </div>
            </div>
          </div>
          <div className="content text-white select-none bg-neutral-900 text-center flex justify-center">
            <div className="top-[10px] bg-neutral-900 mx-auto p-10 shadow-lg text-white h-screen">
              <input
                type="text"
                value={display}
                className="w-full mb-10 px-4 py-3 text-3xl rounded-lg bg-transparent shadow-inner text-right"
                placeholder="0"
                disabled
              />
              <div className="grid grid-cols-4 gap-[0.25rem] text-2xl font-light">
                <button
                  onClick={clearDisplay}
                  className="px-6 py-4 text-center bg-gray-300 rounded-[3px] hover:bg-opacity-60 focus:outline-none bg-opacity-65"
                >
                  C
                </button>
                <button
                  onClick={() => appendToDisplay("*2")}
                  className="px-6 py-4 text-center bg-gray-300 rounded-[3px] hover:bg-opacity-60 focus:outline-none bg-opacity-65"
                >
                  x&#178;
                </button>
                <button
                  onClick={() => appendToDisplay("%")}
                  className="px-6 py-4 text-center bg-gray-300 rounded-[3px] hover:bg-opacity-60 focus:outline-none bg-opacity-65"
                >
                  %
                </button>
                <button
                  onClick={() => appendToDisplay("/")}
                  className="px-6 py-4 text-center bg-yellow-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  &divide;
                </button>
                <button
                  onClick={() => appendToDisplay("7")}
                  className="px-6 py-4 text-center bg-neutral-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  7
                </button>
                <button
                  onClick={() => appendToDisplay("8")}
                  className="px-6 py-4 text-center bg-neutral-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  8
                </button>
                <button
                  onClick={() => appendToDisplay("9")}
                  className="px-6 py-4 text-center bg-neutral-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  9
                </button>
                <button
                  onClick={() => appendToDisplay("*")}
                  className="px-6 py-4 text-center bg-yellow-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  x
                </button>
                <button
                  onClick={() => appendToDisplay("4")}
                  className="px-6 py-4 text-center bg-neutral-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  4
                </button>
                <button
                  onClick={() => appendToDisplay("5")}
                  className="px-6 py-4 text-center bg-neutral-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  5
                </button>
                <button
                  onClick={() => appendToDisplay("6")}
                  className="px-6 py-4 text-center bg-neutral-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  6
                </button>
                <button
                  onClick={() => appendToDisplay("-")}
                  className="px-6 py-4 text-center bg-yellow-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  -
                </button>
                <button
                  onClick={() => appendToDisplay("1")}
                  className="px-6 py-4 text-center bg-neutral-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  1
                </button>
                <button
                  onClick={() => appendToDisplay("2")}
                  className="px-6 py-4 text-center bg-neutral-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  2
                </button>
                <button
                  onClick={() => appendToDisplay("3")}
                  className="px-6 py-4 text-center bg-neutral-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  3
                </button>
                <button
                  onClick={() => appendToDisplay("+")}
                  className="px-6 py-4 text-center bg-yellow-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  +
                </button>
                <button
                  onClick={() => appendToDisplay("0")}
                  className="px-6 py-4 text-center bg-neutral-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none col-span-2"
                >
                  0
                </button>
                <button
                  onClick={() => appendToDisplay(".")}
                  className="px-6 py-4 text-center bg-neutral-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  .
                </button>
                <button
                  onClick={calculate}
                  className="px-6 py-4 text-center bg-yellow-600 rounded-[3px] hover:bg-opacity-60 focus:outline-none"
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Calculator;
