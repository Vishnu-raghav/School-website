// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
// import SchoolImg from "../assets/schl.jpg";
// import DefaultAvatar from "../assets/img_avatar.png";
// import { FaBullseye, FaEye, FaLightbulb } from "react-icons/fa";
// import axiosInstance from "../api/axiosInstance.js"; 
// function About() {
//   const [principalImage, setPrincipalImage] = useState(null);
//   const [directorImage, setDirectorImage] = useState(null);

//   useEffect(() => {
//     const fetchStaticImages = async () => {
//       try {
//         const res = await axiosInstance.get("/static");
//         const images = res.data.data;

//         const principal = images.find(
//           (img) => img.section?.toLowerCase() === "principleimage"
//         );
//         const director = images.find(
//           (img) => img.section?.toLowerCase() === "directorimage"
//         );

//         setPrincipalImage(principal?.imageUrl);
//         setDirectorImage(director?.imageUrl);
//       } catch (err) {
//         console.error("Error loading leadership images:", err);
//       }
//     };

//     fetchStaticImages();
//   }, []);

//   const leaders = [
//     {
//       name: "Principal's Message",
//       image: principalImage || DefaultAvatar,
//       message:
//         "Education here is about building responsible individuals ready to lead the world with values and vision.",
//     },
//     {
//       name: "Director's Message",
//       image: directorImage || DefaultAvatar,
//       message:
//         "We empower students to become innovative thinkers, confident communicators, and ethical leaders.",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 overflow-hidden">
//       <Helmet>
//         <title>About Krishna Public School - Vision, Leadership & Mission</title>
//         <meta
//           name="description"
//           content="Krishna Public School fosters leadership, values, and academic excellence in Faridabad. Meet our principal, chairman, and director."
//         />
//         <meta
//           name="keywords"
//           content="Krishna Public School, CBSE school Faridabad, school leadership, principal's message, director, chairman, school vision"
//         />
//         <link rel="canonical" href="https://krishnapublicschool.net/About" />
//         <meta property="og:title" content="About Krishna Public School - Vision & Mission" />
//         <meta
//           property="og:description"
//           content="Learn about Krishna Public School's leadership, educational philosophy, and mission for holistic student development."
//         />
//         <meta property="og:image" content="https://krishnapublicschool.net/og-school.jpg" />
//         <meta property="og:url" content="https://krishnapublicschool.net/About" />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="About Krishna Public School" />
//         <meta
//           name="twitter:description"
//           content="Meet our leadership and explore Krishna Public School's commitment to quality education and values."
//         />
//         <meta name="twitter:image" content="https://krishnapublicschool.net/og-school.jpg" />
//         <script type="application/ld+json">{`
//           {
//             "@context": "https://schema.org",
//             "@type": "EducationalOrganization",
//             "name": "Krishna Public School",
//             "url": "https://krishnapublicschool.net",
//             "logo": "https://krishnapublicschool.net/logo.png",
//             "sameAs": ["https://www.facebook.com/krishnapublicschool"],
//             "address": {
//               "@type": "PostalAddress",
//               "streetAddress": "Sarswati Colony Sehatpur",
//               "addressLocality": "Faridabad",
//               "addressRegion": "Haryana",
//               "postalCode": "121003",
//               "addressCountry": "IN"
//             },
//             "description": "Krishna Public School fosters academic excellence, leadership, and holistic development through value-based education.",
//             "founder": "Krishna Educational Trust"
//           }
//         `}</script>
//       </Helmet>

//       {/* About Section */}
//       <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial={{ x: -80, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-4xl font-bold text-blue-900 mb-6">
//             About Krishna Public School
//           </h1>
//           <p className="text-lg leading-relaxed text-gray-700">
//             At Krishna Public School, we nurture young minds with care,
//             purpose, and dedication. With experienced educators and modern
//             infrastructure, we emphasize holistic development through
//             academics, ethics, and creativity.
//           </p>
//         </motion.div>

//         <motion.img
//           src={SchoolImg}
//           alt="Front view of Krishna Public School campus"
//           initial={{ x: 80, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="w-full h-auto rounded-2xl shadow-lg"
//         />
//       </section>

//       {/* Leadership Section */}
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <h2 className="text-3xl md:text-4xl font-semibold text-center text-blue-800 mb-12">
//           💼 Leadership Messages
//         </h2>
//         <div className="grid md:grid-cols-2 gap-10">
//           {leaders.map((leader, index) => (
//             <motion.div
//               key={index}
//               initial={{ y: 40, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="bg-white/40 backdrop-blur-xl rounded-xl shadow-xl p-6 border border-blue-100 hover:shadow-blue-200 transition-all"
//             >
//               <img
//                 src={leader.image}
//                 alt={`Portrait of ${leader.name} at Krishna Public School`}
//                 className="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 mb-4 object-cover"
//               />
//               <h3 className="text-xl text-center font-semibold text-blue-800 mb-2">
//                 {leader.name}
//               </h3>
//               <p className="text-center text-gray-700 text-sm leading-relaxed">
//                 {leader.message}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Mission Vision Aim */}
//       <section className="bg-white py-20 px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center">
//           <motion.div
//             initial={{ y: 40, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="bg-blue-50 rounded-2xl p-8 shadow hover:shadow-blue-200"
//           >
//             <FaBullseye className="text-3xl text-blue-700 mb-4 mx-auto" />
//             <h3 className="text-xl font-bold text-blue-800 mb-2">Our Mission</h3>
//             <p className="text-gray-600 text-sm">
//               Deliver value-based education that fosters academic excellence,
//               creativity, and integrity.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ y: 40, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-blue-50 rounded-2xl p-8 shadow hover:shadow-blue-200"
//           >
//             <FaEye className="text-3xl text-blue-700 mb-4 mx-auto" />
//             <h3 className="text-xl font-bold text-blue-800 mb-2">Our Vision</h3>
//             <p className="text-gray-600 text-sm">
//               To become a leading educational institution producing global
//               citizens with strong values.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ y: 40, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="bg-blue-50 rounded-2xl p-8 shadow hover:shadow-blue-200"
//           >
//             <FaLightbulb className="text-3xl text-blue-700 mb-4 mx-auto" />
//             <h3 className="text-xl font-bold text-blue-800 mb-2">Our Aim</h3>
//             <p className="text-gray-600 text-sm">
//               Create a nurturing environment where every student is empowered to
//               dream, believe, and achieve.
//             </p>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default About;





import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import SchoolImg from "../assets/schl.jpg";
// import PrincipalImg from "../assets/principal.jpg"; 
// import DirectorImg from "../assets/director.jpg";   
import { FaBullseye, FaEye, FaLightbulb } from "react-icons/fa";

function About() {
  const leaders = [
    {
      name: "Principal's Message",
      // image: PrincipalImg,
      message:
        "Education here is about building responsible individuals ready to lead the world with values and vision.",
    },
    {
      name: "Director's Message",
      // image: DirectorImg,
      message:
        "We empower students to become innovative thinkers, confident communicators, and ethical leaders.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 overflow-hidden">
      <Helmet>
        <title>About Krishna Public School - Vision, Leadership & Mission</title>
        <meta
          name="description"
          content="Krishna Public School fosters leadership, values, and academic excellence in Faridabad. Meet our principal, chairman, and director."
        />
        <link rel="canonical" href="https://krishnapublicschool.net/About" />
        {/* Other SEO tags same as before */}
      </Helmet>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            About Krishna Public School
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            At Krishna Public School, we nurture young minds with care,
            purpose, and dedication. With experienced educators and modern
            infrastructure, we emphasize holistic development through
            academics, ethics, and creativity.
          </p>
        </motion.div>

        <motion.img
          src={SchoolImg}
          alt="Front view of Krishna Public School campus"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </section>

      {/* Leadership Section */}
<section className="max-w-7xl mx-auto px-6 py-24">
  <h2 className="text-3xl md:text-4xl font-semibold text-center text-blue-800 mb-12">
    💼 Leadership Messages
  </h2>
  <div className="grid md:grid-cols-2 gap-10">
    {leaders.map((leader, index) => (
      <motion.div
        key={index}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="bg-white/60 backdrop-blur-xl rounded-xl shadow-xl p-6 border border-blue-100 hover:shadow-blue-200 transition-all"
      >
        <h3 className="text-xl text-center font-semibold text-blue-800 mb-2">
          {leader.name}
        </h3>
        <p className="text-center text-gray-700 text-sm leading-relaxed">
          {leader.message}
        </p>
      </motion.div>
    ))}
  </div>
</section>

      {/* Mission Vision Aim */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 rounded-2xl p-8 shadow hover:shadow-blue-200"
          >
            <FaBullseye className="text-3xl text-blue-700 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-blue-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              Deliver value-based education that fosters academic excellence,
              creativity, and integrity.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-blue-50 rounded-2xl p-8 shadow hover:shadow-blue-200"
          >
            <FaEye className="text-3xl text-blue-700 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-blue-800 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              To become a leading educational institution producing global
              citizens with strong values.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-blue-50 rounded-2xl p-8 shadow hover:shadow-blue-200"
          >
            <FaLightbulb className="text-3xl text-blue-700 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-blue-800 mb-2">Our Aim</h3>
            <p className="text-gray-600 text-sm">
              Create a nurturing environment where every student is empowered to
              dream, believe, and achieve.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
