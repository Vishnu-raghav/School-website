// // 🔄 React component without animation
// import Campus1 from "../assets/campus.jpg";
// import Campus2 from "../assets/campus2.jpg";
// import Campus3 from "../assets/campus3.jpg";

// import Class1 from "../assets/CR1.jpg";
// import Class2 from "../assets/CR1.jpg";
// import Class3 from "../assets/CR1.jpg";

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
//     images: [Class1, Class2,Class3],
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
//       <div className="max-w-7xl mx-auto text-center">
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-14 underline decoration-blue-300 underline-offset-8">
//           📷 School Gallery
//         </h1>

//         {sections.map((section, i) => (
//           <div
//             key={i}
//             className="mb-20 rounded-xl bg-white/70 backdrop-blur-lg shadow-xl p-6 md:p-10 transition duration-300"
//           >
//             <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-8 text-left border-l-4 border-blue-500 pl-4">
//               {section.title}
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {section.images.map((img, j) => (
//                 <div
//                   key={j}
//                   className="overflow-hidden rounded-xl shadow-md"
//                 >
//                   <img
//                     src={img}
//                     alt={`gallery-${i}-${j}`}
//                     className="w-full h-64 object-cover"
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

const sections = [
  {
    title: "🏫 Campus Life",
    images: [Campus1, Campus2, Campus3],
  },
  {
    title: "📚 Classroom & Smart Classes",
    images: [Class1, Class2],
  },
  {
    title: "🎉 Events & Celebrations",
    images: [Event1, Event2, Event3, Event4],
  },
  {
    title: "🏅 Sports & Activities",
    images: [Sport1, Sport2],
  },
  {
    title: "🧪 Science & Computer Labs",
    images: [Lab1, Lab2, Lab3],
  },
];

function Gallery() {
  return (
    <div className="w-full px-4 py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-14 text-center underline decoration-blue-300 underline-offset-8">
          📷 School Gallery
        </h1>

        {sections.map((section, i) => (
          <div key={i} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-6 border-l-4 border-blue-500 pl-4">
              {section.title}
            </h2>

            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
              {section.images.map((img, j) => (
                <div key={j} className="w-full overflow-hidden rounded-xl shadow-md">
                  <img
                    src={img}
                    alt={`gallery-${i}-${j}`}
                    className="w-full object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
