import { useState } from "react";
import ButtonDisplay from "./ButtonDisplay";
import Display from "./Display";

function Calculator() {
  const [input, setInput] = useState("");
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const formatted = input
          .replaceAll(/×/g, "*")
          .replaceAll(/÷/g, "/")
          .replaceAll(/–/g, "-");

        const result = eval(formatted);

        setExpression(input);
        setInput(result.toString());
      } catch (error) {
        setExpression("");
        setInput(error);
      }
    } else if (value === "C") {
      setInput("");
      setExpression("");
      return;
    } else if (value === "+/-") {
      setInput((prev) => (prev ? (parseFloat(prev) * -1).toString() : ""));
    } else if (value === "%") {
      setInput((prev) => (prev ? (parseFloat(prev) / 100).toString() : ""));
    } else {
      setInput((prev) => prev + value);
    }

    const operators = new Set(["+", "–", "×", "÷"]);

    if (operators.includes(value)) {
      if (input === "" && value !== "-") return;
      const lastChar = input.slice(-1);
      if (operators.has(lastChar)) {
        setInput((prev) => prev.slice(0, -1) + value);
        return;
      }
    }
  };

  return (
    <section
      className="w-full h-screen flex justify-center items-center bg-[#D9D2C2] overflow-clip"
      style={{ fontFamily: "Inconsolata, sans-serif" }}
    >
      <div className="aspect-5/8 w-80 bg-[#202022] rounded-2xl p-7 flex flex-col gap-3 shadow-2xl scale-90 select-none">
        <Display value={input || "0"} expression={expression} />
        <ButtonDisplay onButtonClick={handleButtonClick} />
      </div>
    </section>
  );
}

export default Calculator;
