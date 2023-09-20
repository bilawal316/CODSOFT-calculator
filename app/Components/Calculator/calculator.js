"use client";
import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  return (
    <div className="border bg-black p-4 rounded-lg">
      <div className="border mb-2 text-center text-black" style={{ backgroundColor: "lightblue", minHeight: "2rem" }}>
        {display}
      </div>
      <div className=" grid grid-cols-4 gap-2">
        <button className="calculatorButton" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="calculatorButton" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="calculatorButton" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="calculatorButton" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="calculatorButton" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="calculatorButton" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="calculatorButton" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="calculatorButton" onClick={() => handleClick("-")}>
          -
        </button>
        <button className="calculatorButton" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="calculatorButton" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="calculatorButton" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="calculatorButton" onClick={() => handleClick("*")}>
          *
        </button>
        <button className="calculatorButton" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="calculatorButton" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="calculatorButton bg-green-500" onClick={calculateResult}>
          =
        </button>
        <button className="calculatorButton bg-red-500 " onClick={clearDisplay}>
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;
