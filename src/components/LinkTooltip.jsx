import { useState } from "react";

function LinkTooltip({ infoText, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-container flex flex-col gap-5 items-center justify-center relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      <div
        className={`tooltip w-2xs bg-black p-4 rounded-2xl absolute transition-all duration-300 top-65 right-5 ${
          showTooltip ? "" : "opacity-0"
        }`}
      >
        <img src={infoText} alt="symbol" />
      </div>
    </div>
  );
}

export default LinkTooltip;
