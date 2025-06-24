// import Campus1 from "../assets/campus.jpg";
// import Campus2 from "../assets/campus2.jpg";
// import Campus3 from "../assets/campus3.jpg";
// import Class1 from "../assets/CR1.jpg";
// import Class2 from "../assets/CR1.jpg";
// import Event1 from "../assets/E1.jpg";
// import Event2 from "../assets/E2.jpg";
// import Event3 from "../assets/E3.jpg";
// import Event4 from "../assets/E4.jpg";
// import Sport1 from "../assets/S1.jpg";
// import Sport2 from "../assets/s2.jpg";
// import Lab1 from "../assets/L1.jpg";
// import Lab2 from "../assets/CL1.JPEG";
// import Lab3 from "../assets/CompL.jpg";

// const sections = [
//   {
//     title: "🏫 Campus Life",
//     images: [Campus1, Campus2, Campus3],
//   },
//   {
//     title: "📚 Classroom & Smart Classes",
//     images: [Class1, Class2],
//   },
//   {
//     title: "🎉 Events & Celebrations",
//     images: [Event1, Event2, Event3, Event4],
//   },
//   {
//     title: "🏅 Sports & Activities",
//     images: [Sport1, Sport2],
//   },
//   {
//     title: "🧪 Science & Computer Labs",
//     images: [Lab1, Lab2, Lab3],
//   },
// ];

// function Gallery() {
//   return (
//     <div className="w-full px-4 py-12 bg-gradient-to-b from-white to-blue-50">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-14 text-center underline decoration-blue-300 underline-offset-8">
//           📷 School Gallery
//         </h1>

//         {sections.map((section, i) => (
//           <div key={i} className="mb-16">
//             <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-6 border-l-4 border-blue-500 pl-4">
//               {section.title}
//             </h2>

//             <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
//               {section.images.map((img, j) => (
//                 <div key={j} className="w-full overflow-hidden rounded-xl shadow-md">
//                   <img
//                     src={img}
//                     alt={`gallery-${i}-${j}`}
//                     className="w-full object-cover rounded-xl"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Gallery;





// import Campus1 from "../assets/campus.jpg";
// import Campus2 from "../assets/campus2.jpg";
// import Campus3 from "../assets/campus3.jpg";
// import Class1 from "../assets/CR1.jpg";
// import Class2 from "../assets/CR1.jpg";
// import Event1 from "../assets/E1.jpg";
// import Event2 from "../assets/E2.jpg";
// import Event3 from "../assets/E3.jpg";
// import Event4 from "../assets/E4.jpg";
// import Sport1 from "../assets/S1.jpg";
// import Sport2 from "../assets/s2.jpg";
// import Lab1 from "../assets/L1.jpg";
// import Lab2 from "../assets/CL1.JPEG";
// import Lab3 from "../assets/CompL.jpg";
// import "../App.css";

// const sections = [
//   {
//     title: "🏫 Campus Life",
//     images: [Campus1, Campus2, Campus3],
//   },
//   {
//     title: "📚 Classroom & Smart Classes",
//     images: [Class1, Class2],
//   },
//   {
//     title: "🎉 Events & Celebrations",
//     images: [Event1, Event2, Event3, Event4],
//   },
//   {
//     title: "🏅 Sports & Activities",
//     images: [Sport1, Sport2],
//   },
//   {
//     title: "🧪 Science & Computer Labs",
//     images: [Lab1, Lab2, Lab3],
//   },
// ];

// function Gallery() {
//   return (
//     <div className="w-full px-4 py-12 bg-gradient-to-b from-[#e6f0ff] via-white to-[#d6e6f9]">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-14 text-center underline decoration-blue-300 underline-offset-8">
//           📷 School Gallery
//         </h1>

//         {sections.map((section, i) => (
//           <div key={i} className="mb-16">
//             <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4 border-l-4 border-blue-500 pl-4">
//               {section.title}
//             </h2>

//             <div className="overflow-x-auto scrollbar-hide">
//               <div className="flex space-x-4 pb-4">
//                 {section.images.map((img, j) => (
//                   <div
//                     key={j}
//                     className="min-w-[250px] max-w-[300px] rounded-xl overflow-hidden shadow-md"
//                   >
//                     <img
//                       src={img}
//                       alt={`gallery-${i}-${j}`}
//                       className="w-full h-48 object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Gallery;





import { useState } from "react";
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

  return (
    <div className="w-full px-6 py-12 bg-gradient-to-b from-[#e6f0ff] via-white to-[#d6e6f9] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-10 underline decoration-blue-300">
          📸 Gallery Showcase
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full font-medium border-2 transition duration-200 ${
                activeTab === category
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-blue-700 border-blue-300 hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories[activeTab].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md border border-blue-100"
            >
              <img
                src={img}
                alt={`img-${activeTab}-${index}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
