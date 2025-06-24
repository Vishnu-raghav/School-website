import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img3.jpg';
import Img3 from '../assets/img4.jpg';

function Hero() {
  const images = [Img1, Img2, Img3];

  return (
    <div className="w-full h-[80vh]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />

              {/* 🌀 Blue Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t  from-black/70 to-black/10 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-center px-4"
                >
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
                    Krishna Public School
                  </h1>
                  <p className="text-lg md:text-2xl text-blue-100 drop-shadow-md mb-6">
                    Empowering young minds for a brighter future
                  </p>
                  <button className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full transition duration-300">
                    Explore More
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;

