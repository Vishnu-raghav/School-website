import { useEffect, useState } from "react";
import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";

const Popup = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer1 = setTimeout(() => setShowFirst(true), 100);
    const timer2 = setTimeout(() => setShowSecond(true), 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (!showFirst && !showSecond) {
      document.body.style.overflow = "auto";
    }
  }, [showFirst, showSecond]);

  if (!showFirst && !showSecond) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm overflow-hidden flex justify-center items-center px-2 sm:px-4">
      {/* Desktop View */}
      <div className="hidden md:flex gap-8 max-w-7xl w-full justify-center items-center py-12">
        {showFirst && (
          <div className="relative bg-white border border-gray-300 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.3)] w-full md:w-[48%]">
            <button
              onClick={() => setShowFirst(false)}
              className="absolute top-2 right-4 z-20 text-3xl text-gray-700"
            >
              &times;
            </button>
            <img
              src={poster1}
              alt="Poster 1"
              className="w-full h-[80vh] object-contain rounded-b-2xl"
            />
          </div>
        )}
        {showSecond && (
          <div className="relative bg-white border border-gray-300 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.3)] w-full md:w-[48%]">
            <button
              onClick={() => setShowSecond(false)}
              className="absolute top-2 right-4 z-20 text-3xl text-gray-700"
            >
              &times;
            </button>
            <img
              src={poster2}
              alt="Poster 2"
              className="w-full h-[80vh] object-contain rounded-b-2xl"
            />
          </div>
        )}
      </div>

      {/* Mobile View (Overlap) */}
      <div className="relative flex md:hidden w-full max-w-md justify-center items-center py-8">
        {showFirst && (
          <div className="absolute inset-0 z-10 flex justify-center items-center">
            <div className="relative bg-white border border-gray-300 rounded-2xl shadow-lg w-[95%]">
              <button
                onClick={() => setShowFirst(false)}
                className="absolute top-2 right-4 z-20 text-3xl text-gray-700"
              >
                &times;
              </button>
              <img
                src={poster1}
                alt="Poster 1"
                className="w-full h-[85vh] object-contain rounded-b-2xl"
              />
            </div>
          </div>
        )}
        {showSecond && (
          <div className="absolute inset-0 z-20 flex justify-center items-center">
            <div className="relative bg-white border border-gray-300 rounded-2xl shadow-lg w-[95%]">
              <button
                onClick={() => setShowSecond(false)}
                className="absolute top-2 right-4 z-20 text-3xl text-gray-700"
              >
                &times;
              </button>
              <img
                src={poster2}
                alt="Poster 2"
                className="w-full h-[85vh] object-contain rounded-b-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
