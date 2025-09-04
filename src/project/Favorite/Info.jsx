import { useRef } from "react";
import { motion } from "framer-motion";

function Info({ onClose, item }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) onClose();
  };

  return (
    <section
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 flex justify-center items-center p-8 bg-pink-300/45 backdrop-blur-sm"
      style={{ fontFamily: "Geist" }}
    >
      <motion.div
        className="bg-white size-full border-6 rounded-2xl border-pink-600 overflow-clip p-4 flex flex-col"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0, transition: { duration: 0.3 } }}
      >
        <div className="w-full h-1/2 flex gap-4">
          <img src={item.img} alt={item.name} className="w-auto h-full" />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">
              <a href={item.link} className="hover:underline">
                {item.name}
              </a>{" "}
              <span className="text-lg">({item.released})</span>
            </h1>
            <h2 className="text-xl">by {item.by}</h2>
            <p className="text-sm">{item.summary}</p>
          </div>
        </div>
        <div className="w-full h-1/2"></div>
      </motion.div>
    </section>
  );
}

export default Info;
