import { useState } from "react";

function ImgSet({ imgset }) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? 0 : curr - 1));

  const next = () =>
    setCurr((curr) =>
      curr === imgset.length - 1 ? imgset.length - 1 : curr + 1
    );

  return (
    <div className="w-full aspect-video relative border-2 border-black rounded-lg text-white overflow-clip">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {imgset.map((item, index) => (
          <img
            src={item}
            key={index}
            alt={`slide-${index}`}
            className="w-full h-full object-cover shrink-0"
          />
        ))}
      </div>
      <div
        className={`w-full flex p-2 justify-between absolute bottom-5/12 ${
          imgset.length === 1 ? "hidden" : ""
        }`}
      >
        <i
          className="bx bx-chevron-left text-2xl bg-red-400 rounded-full"
          onClick={prev}
        />
        <i
          className="bx bx-chevron-right text-2xl bg-red-400 rounded-full"
          onClick={next}
        />
      </div>
    </div>
  );
}

export default ImgSet;
