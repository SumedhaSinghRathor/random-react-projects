import { useEffect, useState } from "react";
import ImgSet from "./ImgSet";

function Extra({ selectExtra, onClose }) {
  const [showExtra, setShowExtra] = useState(false);

  useEffect(() => {
    setShowExtra(selectExtra !== null);
  }, [selectExtra]);

  return (
    <div
      className={`fixed top-0 right-0 bg-gray-300 flex flex-col justify-between h-full w-md transition-transform duration-300 rounded-l-lg p-2 ${
        showExtra ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center gap-4">
        <img
          src={selectExtra?.img}
          className="size-9"
          alt={selectExtra?.title}
        />
        <h1 className="text-3xl font-bold">{selectExtra?.title}</h1>
      </div>
      <p className="text-sm">{selectExtra?.desc}</p>
      {selectExtra?.carousel && <ImgSet imgset={selectExtra?.carousel} />}
      <div>
        <h2 className="font-semibold underline mb-1">
          Information about the project
        </h2>
        <div className="flex flex-col gap-1 self-end">
          {Object.keys(selectExtra || {})
            .filter(
              (key) => Array.isArray(selectExtra[key]) && key !== "carousel",
            )
            .map((key) => (
              <div key={key} className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold capitalize text-sm">{key}:</span>
                {selectExtra[key]?.map((item, i) => (
                  <div
                    key={i}
                    className="text-xs bg-cyan-100 px-2 py-0.5 text-blue-500 rounded-full font-semibold hover:text-white hover:bg-blue-500 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
      <i
        className="bx bx-x absolute top-2 right-2 text-3xl cursor-pointer"
        onClick={onClose}
      />
    </div>
  );
}

export default Extra;
