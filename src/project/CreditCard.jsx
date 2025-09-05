import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img1.svg";

function CreditCard() {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [shineX, setShineX] = useState(50);
  const [shineY, setShineY] = useState(50);
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped((prev) => !prev);
  }

  function handleMouseMove(event) {
    if (!event.currentTarget) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const middleX = rect.left + rect.width / 2;
    const middleY = rect.top + rect.height / 2;

    const offsetX = ((event.clientX - middleX) / (rect.width / 2)) * 20;
    const offsetY = ((event.clientY - middleY) / (rect.height / 2)) * -20;

    setRotation({ rotateX: offsetY, rotateY: offsetX });

    const posXPercent = ((event.clientX - rect.left) / rect.width) * 100;
    const posYPercent = ((event.clientY - rect.top) / rect.height) * 100;
    setShineX(posXPercent);
    setShineY(posYPercent);
  }

  function handleMouseLeave() {
    setRotation({ rotateX: 0, rotateY: 0 });
    setShineX(-50);
    setShineY(-50);
  }

  return (
    <section
      className="w-screen h-screen flex justify-center items-center bg-blue-300"
      style={{ fontFamily: "Instrument Sans" }}
    >
      <div
        className="w-82 h-52 relative rounded-2xl"
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="w-full h-full relative transform-3d"
          animate={{
            rotateY: isFlipped ? -180 : 0,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          onClick={handleFlip}
        >
          <motion.div
            className="w-full h-full relative transform-3d"
            animate={rotation}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(0deg)",
              }}
              className="CC-front w-full h-full absolute bg-blue-900 rounded-2xl p-5 text-white flex flex-col justify-between overflow-clip select-none shadow-2xl transform-3d"
            >
              <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-2xl blur-lg mix-blend-screen z-2"
                style={{
                  transition: "background-position 0.1s ease-out",
                  background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255, 255, 255, 0.1), transparent 60%)`,
                }}
              />
              <div className="design absolute -top-1 -right-1 w-40 aspect-[4/3] bg-blue-700 rounded-bl-4xl blur-[2px]">
                <div className="absolute top-0 right-0 w-32 aspect-[4/3] bg-blue-600 rounded-bl-3xl" />
                <div className="absolute top-0 right-0 w-24 aspect-[4/3] bg-blue-500 rounded-bl-2xl" />
                <div className="absolute top-0 right-0 w-16 aspect-[4/3] bg-blue-400 rounded-bl-xl" />
              </div>
              <div className="flex justify-between z-1">
                <img src={img1} className="size-7" alt="logo" />
                <p className="uppercase font-bold text-2xl flex items-center leading-5">
                  visa
                </p>
              </div>
              <div className="flex flex-col gap-2 z-1">
                <div className="font-bold text-2xl">4455 4562 7710 2507</div>
                <div className="flex justify-between">
                  <div>
                    <div className="text-xs">Card Holder Name</div>
                    <div className="text-sm font-bold">John Carter</div>
                  </div>
                  <div>
                    <div className="text-xs">Expiry Date</div>
                    <div className="text-sm font-bold">02/30</div>
                  </div>
                  <div>
                    <div className="text-xs">CVV</div>
                    <div className="text-sm font-bold">478</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
              className="CC-back w-full h-full absolute bg-blue-900 rounded-2xl text-white flex flex-col justify-between overflow-clip select-none shadow-2xl transform-3d"
            >
              <div className="design absolute -top-1 -left-1 -z-1 w-40 aspect-[4/3] bg-blue-700 rounded-br-4xl blur-[2px]">
                <div className="absolute top-0 left-0 w-32 aspect-[4/3] bg-blue-600 rounded-br-3xl" />
                <div className="absolute top-0 left-0 w-24 aspect-[4/3] bg-blue-500 rounded-br-2xl" />
                <div className="absolute top-0 left-0 w-16 aspect-[4/3] bg-blue-400 rounded-br-xl" />
              </div>
              <div className="w-full h-10 bg-black mt-5" />
              <div className="flex justify-end items-center mt-8 mx-5">
                <div className="w-40 h-10 bg-white rounded-sm flex justify-end items-center px-3 shadow-inner">
                  <p className="font-mono text-sm tracking-widest text-gray-800">
                    478
                  </p>
                </div>
              </div>
              <div className="mt-auto mb-3 px-5 text-xs text-gray-300 italic">
                Authorized Signature – Not Valid Unless Signed
              </div>
              <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-2xl blur-lg mix-blend-screen"
                style={{
                  transition: "background-position 0.1s ease-out",
                  background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255, 255, 255, 0.1), transparent 60%)`,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CreditCard;
