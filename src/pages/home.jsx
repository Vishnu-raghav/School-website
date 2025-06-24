import { Link } from "react-router-dom";
import Hero from "../component/Hero";
import Img5 from "../assets/img5.jpg";
import Top121 from "../assets/top121.png";
import Top122 from "../assets/top122.png";
import Top123 from "../assets/top123.png";
import SmartClass from "../assets/SC.jpg";
import Transport from "../assets/trans.jpg";
import Kindergarten from "../assets/Kindergarden.jpg";
import Lab from "../assets/Lab.jpg";
import Block from "../assets/Block.jpg";
import Mess from "../assets/Mess.jpg";
import { motion } from "framer-motion";
import "../App.css";

const toppers = [
  { name: "Dev Singh", class: "12th", score: "86.2%", image: Top121 },
  { name: "Payal", class: "12th", score: "86%", image: Top122 },
  { name: "Gaurav", class: "12th", score: "84.2%", image: Top123 },
];

const infrastructure = [
  { title: "School Transport", image: Transport },
  { title: "Smart Classrooms", image: SmartClass },
  { title: "Mess", image: Mess },
  { title: "Kindergarten Block", image: Kindergarten },
  { title: "Science Lab", image: Lab },
  { title: "Main School Block", image: Block },
];

function Home() {
  return (
    <div>
      <Hero />

      {/* Why Us Section */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <img src={Img5} alt="Why KPS" className="w-full h-auto rounded-2xl shadow-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-blue-300">
              Why Krishna Public School?
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Krishna Public School focuses on holistic student development,
              academic excellence, state-of-the-art facilities, and a nurturing
              environment that empowers young minds to grow, innovate, and lead.
            </p>
            <Link to="/about">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition duration-300 shadow-md hover:shadow-blue-300">
                Read More
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Toppers Section */}
      <section className="w-full py-16 px-6 bg-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-blue-200">
            Meet Our Toppers
          </h2>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>

            <div className="infinite-scroll">
              {Array(2).fill(toppers).flat().map((topper, index) => (
                <div
                  key={index}
                  className="min-w-[250px] bg-white rounded-2xl shadow-lg p-6 hover:shadow-blue-300 transition duration-300"
                >
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-blue-500"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {topper.name}
                  </h3>
                  <p className="text-blue-700">{topper.class} Topper</p>
                  <p className="text-gray-600 mt-1 font-medium">{topper.score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="w-full py-20 px-6 bg-gradient-to-br from-[#e0f2ff] to-[#f0f9ff]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 underline decoration-blue-400"
          >
            Academic Infrastructure
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-blue-700 text-lg mb-12 max-w-2xl mx-auto"
          >
            We provide top-class facilities that support quality education and holistic development of every student.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {infrastructure.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-[1.02]"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-blue-800 group-hover:text-blue-600 transition">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;