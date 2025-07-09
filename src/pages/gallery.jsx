import { useEffect, useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import axiosInstance from "../api/axiosInstance.js";

const sectionNames = ["Campus", "Event", "Sport"];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("Campus");
  const [fade, setFade] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);
  const imagesRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  // Fetch images for selected section
  const fetchImages = async (section) => {
    try {
      const res = await axiosInstance.get("/gallery/section", {
        params: { section },
      });
      setGalleryImages(res.data.data || []);
    } catch (err) {
      console.error("Failed to load gallery images", err);
    }
  };

  useEffect(() => {
    fetchImages(activeTab);
  }, [activeTab]);

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
    const nextIndex = (imageIndex + 1) % galleryImages.length;
    setImageIndex(nextIndex);
    setCurrentImage(galleryImages[nextIndex]?.imageUrl);
  }, [imageIndex, galleryImages]);

  const showPrev = useCallback(() => {
    const prevIndex = (imageIndex - 1 + galleryImages.length) % galleryImages.length;
    setImageIndex(prevIndex);
    setCurrentImage(galleryImages[prevIndex]?.imageUrl);
  }, [imageIndex, galleryImages]);

  useEffect(() => {
    if (galleryImages.length > 0 && modalOpen) {
      setCurrentImage(galleryImages[imageIndex]?.imageUrl);
    }
  }, [imageIndex, galleryImages, modalOpen]);

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
      <Helmet>
        <title>Gallery | Krishna Public School</title>
        <meta name="description" content="Campus, events, labs & sports gallery of Krishna Public School." />
        <link rel="canonical" href="https://www.krishnapublicschool.in/gallery" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {sectionNames.map((section) => (
            <button
              key={section}
              onClick={() => handleTabChange(section)}
              className={`px-5 py-2 rounded-full font-medium border-2 transition-all duration-300 hover:scale-105 ${
                activeTab === section
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-blue-700 border-blue-300 hover:bg-blue-100"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div
          ref={imagesRef}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {galleryImages.map((img, idx) => (
            <div
              key={img._id}
              onClick={() => openModal(img.imageUrl, idx)}
              className="relative group overflow-hidden rounded-xl shadow-md border border-blue-100 cursor-pointer"
            >
              <img
                src={img.imageUrl}
                alt={`Gallery ${img.section}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold text-lg">
                View
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && currentImage && (
          <div
            className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full"
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-3xl z-10"
              >
                &times;
              </button>

              <button
                onClick={showPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl z-10"
              >
                ‹
              </button>

              <img
                src={currentImage}
                alt="Enlarged gallery"
                className="max-h-[80vh] w-full object-contain rounded"
              />

              <button
                onClick={showNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl z-10"
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
