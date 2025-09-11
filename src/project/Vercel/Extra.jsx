import { useEffect, useState } from "react";
import ImgSet from "./ImgSet";

function Extra({ selectExtra, onClose }) {
  const [showExtra, setShowExtra] = useState(false);

  useEffect(() => {
    setShowExtra(selectExtra !== null);
  }, [selectExtra]);

  return (
    <div
      className={`fixed top-0 right-0 bg-gray-300 flex flex-col gap-2 h-full w-md transition-transform duration-300 rounded-l-lg p-2 ${
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
      <i
        className="bx bx-x absolute top-2 right-2 text-3xl cursor-pointer"
        onClick={onClose}
      />
    </div>
  );
}

export default Extra;
