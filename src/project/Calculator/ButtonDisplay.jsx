import "./Calculator.css";

function ButtonDisplay({ onButtonClick }) {
  const buttons = [
    { label: "C", type: "misc", className: "aspect-square" },
    { label: "+/-", type: "misc", className: "aspect-square" },
    { label: "%", type: "misc", className: "aspect-square" },
    { label: "÷", type: "operation", className: "aspect-square" },
    { label: "7", type: "number", className: "aspect-square" },
    { label: "8", type: "number", className: "aspect-square" },
    { label: "9", type: "number", className: "aspect-square" },
    { label: "×", type: "operation", className: "aspect-square" },
    { label: "4", type: "number", className: "aspect-square" },
    { label: "5", type: "number", className: "aspect-square" },
    { label: "6", type: "number", className: "aspect-square" },
    { label: "–", type: "operation", className: "aspect-square" },
    { label: "1", type: "number", className: "aspect-square" },
    { label: "2", type: "number", className: "aspect-square" },
    { label: "3", type: "number", className: "aspect-square" },
    { label: "+", type: "operation", className: "aspect-square" },
    { label: "0", type: "number", className: "col-span-2" },
    { label: ".", type: "number", className: "aspect-square" },
    { label: "=", type: "operation", className: "aspect-square" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 text-white text-3xl">
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          className={`rounded-3xl ${btn.type} ${btn.className || ""}`}
          onClick={() => onButtonClick(btn.label)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

export default ButtonDisplay;
