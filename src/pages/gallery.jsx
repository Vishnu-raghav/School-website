import { useEffect, useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";

import Campus1 from "../assets/campus.jpg";
import Campus2 from "../assets/campus2.jpg";
import Campus3 from "../assets/campus3.jpg";
import Class1 from "../assets/CR1.jpg";
import Class2 from "../assets/CR1.jpg";
import Event1 from "../assets/E1.jpg";
import Event2 from "../assets/E2.jpg";
import Event3 from "../assets/E3.jpg";
import Event4 from "../assets/E4.jpg";
import Sport1 from "../assets/S1.jpg";
import Sport2 from "../assets/s2.jpg";
import Lab1 from "../assets/L1.jpg";
import Lab2 from "../assets/CL1.JPEG";
import Lab3 from "../assets/CompL.jpg";

const categories = {
  Campus: [Campus1, Campus2, Campus3],
  Classroom: [Class1, Class2],
  Events: [Event1, Event2, Event3, Event4],
  Sports: [Sport1, Sport2],
  Labs: [Lab1, Lab2, Lab3],
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("Campus");
  const [fade, setFade] = useState(true);
  const imagesRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setFade(false);
    setTimeout(() => {
      setActiveTab(tab);
      setFade(true);
    }, 200);
  };

  const openModal = useCallback((img, index) => {
    setCurrentImage(img);
    setImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const showNext = useCallback(() => {
    const imgs = categories[activeTab];
    const nextIndex = (imageIndex + 1) % imgs.length;
    setImageIndex(nextIndex);
    setCurrentImage(imgs[nextIndex]);
  }, [activeTab, imageIndex]);

  const showPrev = useCallback(() => {
    const imgs = categories[activeTab];
    const prevIndex = (imageIndex - 1 + imgs.length) % imgs.length;
    setImageIndex(prevIndex);
    setCurrentImage(imgs[prevIndex]);
  }, [activeTab, imageIndex]);

  useEffect(() => {
    if (imagesRef.current) {
      imagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeTab]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showNext, showPrev, closeModal]);

  return (
    <div className="w-full px-6 py-12 bg-gradient-to-b from-[#e6f0ff] via-white to-[#d6e6f9] min-h-screen">
      {/* ✅ SEO Helmet */}
      <Helmet prioritizeSeoTags>
        <title>Gallery | Krishna Public School - Campus, Events, Labs</title>
        <meta
          name="description"
          content="Explore Krishna Public School's vibrant gallery featuring campus, classroom, lab, sports and event memories. View photos in full screen."
        />
        <meta
          name="keywords"
          content="Krishna Public School gallery, Faridabad school photos, campus pictures, school events, classroom images, lab gallery"
        />
        <link rel="canonical" href="https://www.krishnapublicschool.in/gallery" />
        <meta property="og:title" content="Krishna Public School - Photo Gallery" />
        <meta property="og:description" content="Discover Krishna Public School's visual journey through events, sports, and labs." />
        <meta property="og:image" content="https://cdn.pixabay.com/photo/2016/11/29/09/08/blur-1867321_1280.jpg" />
        <meta property="og:url" content="https://www.krishnapublicschool.in/gallery" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-10 underline decoration-blue-300">
          📸 Gallery Showcase
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => handleTabChange(category)}
              className={`px-5 py-2 rounded-full font-medium border-2 transition-all duration-300 hover:scale-105 ${
                activeTab === category
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-blue-700 border-blue-300 hover:bg-blue-100"
              }`}
              aria-pressed={activeTab === category}
              aria-label={`Show ${category} photos`}
              aria-controls={`gallery-${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Images */}
        <div
          id={`gallery-${activeTab}`}
          ref={imagesRef}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {categories[activeTab].map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md border border-blue-100 cursor-pointer"
              onClick={() => openModal(img, index)}
              role="button"
              aria-label={`Open ${activeTab} image ${index + 1}`}
            >
              <img
                loading="lazy"
                src={img}
                alt={`${activeTab} photo ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white font-semibold text-lg">
                View
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && (
          <div
            className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full"
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-3xl z-10"
                aria-label="Close image"
              >
                &times;
              </button>

              <button
                onClick={showPrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:scale-110 transition z-10"
                aria-label="Previous image"
              >
                ‹
              </button>

              <img
                src={currentImage}
                alt="Enlarged school memory"
                className="max-h-[80vh] w-full object-contain rounded"
              />

              <button
                onClick={showNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:scale-110 transition z-10"
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
