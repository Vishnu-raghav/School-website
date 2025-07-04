// import { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination, Autoplay } from 'swiper/modules';
// import { motion } from 'framer-motion';
// import axiosInstance from '../api/axiosInstance.js';

// function Hero() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchHeroImages = async () => {
//       try {
//         const res = await axiosInstance.get('/static/section?section=HeroSection');
//         setImages(res.data.data || []);
//       } catch (err) {
//         console.error('Failed to fetch hero images:', err);
//       }
//     };

//     fetchHeroImages();
//   }, []);

//   return (
//     <div className="w-full   h-[75vh] sm:h-[90vh] md:h-[93vh]">
//       <Swiper
//         key={images.length}
//         modules={[Pagination, Autoplay]}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         loop={true}
//         className="h-full"
//       >
//         {images.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div className="w-full h-full">
//               <img
//                 src={img.imageUrl}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0  bg-gradient-to-t from-black/70 to-black/10 flex items-center justify-center px-4">
//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1 }}
//                   className="text-center px-2"
//                 >
//                   <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-2 sm:mb-4 leading-tight">
//                     Krishna Public School
//                   </h1>
//                   <p className="text-sm sm:text-lg md:text-2xl text-blue-100 drop-shadow-md mb-4 sm:mb-6">
//                     Think today, Change tomorrow
//                   </p>
//                 </motion.div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


// export default Hero;




import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import Hero1 from '../assets/h-3.jpg';
import Hero2 from '../assets/h-1.jpg';
import Hero3 from '../assets/h-66.jpg';

const heroImages = [Hero1, Hero2, Hero3];

function Hero() {
  return (
    <div className="w-full h-[75vh] sm:h-[90vh] md:h-[93vh]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {heroImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
                    Think today, Change tomorrow
                  </p>
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
