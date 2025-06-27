import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TopperCarousel = ({ toppers }) => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -250 : 250;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    checkScroll();
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <section className="py-12 px-4 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center relative">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8">
          Meet Our Toppers
        </h2>

        {/* Arrows */}
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-1 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow p-2 rounded-full"
          >
            <FaChevronLeft className="text-blue-600 text-lg" />
          </button>
        )}

        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow p-2 rounded-full"
          >
            <FaChevronRight className="text-blue-600 text-lg" />
          </button>
        )}

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-3 md:gap-5 overflow-x-auto scroll-smooth no-scrollbar px-6"
        >
          {toppers.map((topper, i) => (
            <div
              key={i}
              className="min-w-[150px] md:min-w-[220px] bg-white rounded-2xl shadow-lg p-4 hover:-translate-y-1.5 transition duration-300"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-blue-600 shadow-md">
                <img
                  src={topper.image}
                  alt={topper.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-blue-900 leading-tight">
                {topper.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">Class {topper.class}</p>
              <p className="text-base font-semibold text-blue-600 mt-1">{topper.score}</p>

              <div className="mt-3 w-8 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopperCarousel;
