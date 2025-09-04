import { useState } from "react";
import info from "./fav.json";
import Info from "./Info";
import { AnimatePresence } from "framer-motion";

function Fav() {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? info.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === info.length - 1 ? 0 : curr + 1));

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section
      style={{ fontFamily: "Geist" }}
      className="w-screen h-screen bg-pink-200 flex justify-center items-center"
    >
      <div className="absolute flex items-center justify-between w-xl p-4">
        <i
          className="text-4xl bx bx-chevron-left rounded-full shadow-pink-600 bg-pink-400 text-black hover:bg-pink-500"
          onClick={prev}
        />
        <i
          className="text-4xl bx bx-chevron-right rounded-full shadow-pink-600 bg-pink-400 text-black hover:bg-pink-500"
          onClick={next}
        />
      </div>
      <div className="rounded-2xl border-2 border-black w-1/3 h-2/5 mx-auto bg-white hover:bg-purple-50 flex relative overflow-clip select-none">
        {info
          .toSorted((a, b) => a.released - b.released)
          .map((item, index) => (
            <div
              key={index}
              className="size-full flex flex-col justify-between text-center p-4 shrink-0 cursor-pointer transition-transform duration-500"
              style={{
                transform: `translateX(-${curr * 100}%)`,
              }}
              onClick={() => {
                setSelectedItem(item);
                setShowModal(true);
              }}
            >
              <div className="w-full flex justify-between items-center font-bold">
                <p className="bg-pink-400 rounded-full px-0.5">#{index + 1}</p>
                <p className="bg-pink-400 rounded-full px-2">{item.type}</p>
              </div>
              <div>
                <p className="text-3xl font-bold">{item.name}</p>
                <p className="ml-1 text-md">({item.released})</p>
              </div>
              <div>
                <p>by</p>
                <p className="text-2xl italic">{item.by}</p>
              </div>
            </div>
          ))}
      </div>
      <AnimatePresence>
        {showModal && (
          <Info onClose={() => setShowModal(false)} item={selectedItem} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Fav;
