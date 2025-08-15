import { useRef } from "react";

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
      <div className="bg-white size-full border-6 rounded-2xl border-pink-600">
        {item.name}
      </div>
    </section>
  );
}

export default Info;
