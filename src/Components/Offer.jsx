import React, { useState } from "react";
import Popup from "./Popup";

export const Offer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="fixed left-[-41px] top-[48%] translate-y-[50%] z-10">
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-[#000] text-white p-2 text-sm rotate-90 inline-block font-bold tracking-widest rounded-b-none"
        >
          Get 50% off!
        </button>
      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <div className="text-center">
          <img src="/assets/ramadan/download (4).png" alt="" className="mt-3" />
          <h2 className="text-2xl font-bold mb-4  mt-3">Special Offer!</h2>
          <div class="mt-5 flex items-center justify-center">
            <input
              type="email"
              name=""
              id=""
              class="border-t-none border-b-2 border-b-black w-[80%] focus:ring-0 focus:outline-none p-1"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
      </Popup>
    </>
  );
};
