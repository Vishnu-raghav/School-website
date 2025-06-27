import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import Img1 from '../assets/h-1.jpg';
import Img2 from '../assets/h-3.jpg';
import Img3 from '../assets/h-6.jpg';

function Hero() {
  const images = [
    { src: Img1, alt: 'School front building image' },
    { src: Img2, alt: 'Students engaged in classroom learning' },
    { src: Img3, alt: 'Annual sports event at school' },
  ];

  return (
    <div className="w-full h-[75vh] sm:h-[90vh] md:h-[93vh]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Overlay with Animated Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 flex items-center justify-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-center px-2"
                >
                  <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-2 sm:mb-4 leading-tight">
                    Krishna Public School
                  </h1>
                  <p className="text-sm sm:text-lg md:text-2xl text-blue-100 drop-shadow-md mb-4 sm:mb-6">
                    Empowering young minds for a brighter future
                  </p>
                  <a
                    href="#about"
                    className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full transition duration-300 text-sm sm:text-base"
                  >
                    Explore More
                  </a>
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

