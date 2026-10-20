import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Card({ info, onClick, isSelected, cardRef }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (!isSelected) setFlipped(false);
  }, [isSelected]);

  return (
    <div
      ref={cardRef}
      className={`aspect-2/3 perspective-distant relative rounded-lg duration-200 ${
        isSelected && "opacity-0"
      }`}
      onMouseEnter={() => {
        if (!isSelected) setFlipped(true);
      }}
      onMouseLeave={() => setFlipped(false)}
      onClick={onClick}
    >
      <div
        className={`w-full h-full duration-700 transform-3d bg-pink-600 rounded-lg ${
          (flipped || isSelected) && "rotate-x-180"
        }`}
      >
        <div className="absolute inset-0 backface-hidden flex items-center justify-center p-4">
          <p className="text-center font-semibold select-none">{info.title}</p>
        </div>

        <div className="absolute inset-0 h-full w-full overflow-hidden bg-gray-100 backface-hidden rotate-x-180 rounded-lg">
          <motion.img
            src={info.cover}
            alt={info.title}
            className="w-full h-full object-fill"
            transition={{
              layout: {
                type: "spring",
                stiffness: 260,
                damping: 28,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
