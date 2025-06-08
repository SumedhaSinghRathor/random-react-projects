import React from "react";
import img1 from "../assets/img1.svg";

function CreditCard() {
  return (
    <section
      className="w-screen h-screen flex justify-center items-center bg-blue-300"
      style={{ fontFamily: "Instrument Sans" }}
    >
      <div className="w-82 h-52 relative bg-blue-900 rounded-2xl p-5 text-white flex flex-col justify-between overflow-clip select-none">
        <div className="design absolute -top-1 -right-1 w-40 aspect-[4/3] bg-blue-700 rounded-bl-4xl blur-[2px]">
          <div className="absolute top-0 right-0 w-32 aspect-[4/3] bg-blue-600 rounded-bl-3xl"></div>
          <div className="absolute top-0 right-0 w-24 aspect-[4/3] bg-blue-500 rounded-bl-2xl"></div>
          <div className="absolute top-0 right-0 w-16 aspect-[4/3] bg-blue-400 rounded-bl-xl"></div>
        </div>
        <div className="flex justify-between z-10">
          <img src={img1} className="size-7" alt="logo" />
          <p className="uppercase font-bold text-2xl flex items-center leading-5">
            visa
          </p>
        </div>
        <div className="flex flex-col gap-2 z-10">
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
    </section>
  );
}

export default CreditCard;
