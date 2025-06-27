import { Link } from "react-router-dom";
import Hero from "../component/Hero";
import TopperCarousel from "../component/TopperCarousel .jsx"; // ✅ Import kiya
import Img5 from "../assets/newone.jpg";
import Top121 from "../assets/12T-1.png";
import Top122 from "../assets/12T-2.png";
import Top123 from "../assets/12T-3.png";
import Top124 from "../assets/12T-4.png";
import Top125 from "../assets/12T-5.png";

import Top101 from "../assets/10T-1.png";
import Top102 from "../assets/10T-2.png";
import Top103 from "../assets/10T-3.png";
import Top104 from "../assets/10T-4.png";
import Top105 from "../assets/10T-5.png";

import SmartClass from "../assets/SC.jpg";
import Kindergarten from "../assets/Kindergarden.jpg";
import Lab from "../assets/computer-lab.jpg";
import Block from "../assets/BB.jpg";
import Mess from "../assets/Mess.jpg";
import FooterImg from "../assets/f-2.jpg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../App.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const toppers = [
  { name: "Aman Kumar", class: "12th", score: "95%", image: Top121 },
  { name: "Pratiksha Jha", class: "12th", score: "94%", image: Top122 },
  { name: "Ashish Kumar", class: "12th", score: "93.2%", image: Top123 },
  { name: "Roshni Meena", class: "12th", score: "92.6%", image: Top124 },
  { name: "Chandni Kumari", class: "12th", score: "90.6%", image: Top125 },
  { name: "Abhishek", class: "10th", score: "93%", image: Top101 },
  { name: "Pradyumna", class: "10th", score: "92%", image: Top102 },
  { name: "Rohit", class: "10th", score: "91.6%", image: Top103 },
  { name: "Kamlesh", class: "10th", score: "91%", image: Top104 },
  { name: "Ragini", class: "10th", score: "90.6%", image: Top105 },
];

const stats = [
  { label: "Students Enrolled", value: 900, suffix: "+" },
  { label: "Board Toppers", value: 40, suffix: "+" },
  { label: "Certified Teachers", value: 30, suffix: "+" },
  { label: "Years of Excellence", value: 22, suffix: "+" },
];

const infrastructure = [
  { title: "Smart Classrooms", image: SmartClass },
  { title: "Canteen", image: Mess },
  { title: "Kindergarten Block", image: Kindergarten },
  { title: "Computer Lab", image: Lab },
  { title: "Main School Block", image: Block },
];

function Home() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Krishna Public School | Top CBSE School in Faridabad | Admissions Open 2025</title>
        <meta
          name="description"
          content="Krishna Public School, the best CBSE school in Faridabad, offers smart classes, experienced teachers, safe transport, and overall student development. Enroll now for 2025–26 session."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://krishnapublicschool.net/" />
      </Helmet>

      {/* Top Strip */}
      <div className="bg-blue-700 text-white py-3 text-sm text-center font-medium animate-pulse px-4">
        🧑‍🏫 Certified Teachers |💡 Smart Classes | 🏆 90%+ Results | 🌟 Personality Development
      </div>

      <Hero />

      {/* Award */}
      <div className="bg-yellow-100 py-3 text-center text-blue-900 font-medium tracking-wide px-4">
        🏅 Nationally Recognized School | 🥇 Best in City – 2024 | 🎓 100% Board Results
      </div>

      {/* CTA */}
      <section className="bg-red-100 py-8 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-red-700">
          🎯 Hurry! Admissions Closing Soon
        </h2>
        <p className="text-gray-800 mt-2">Few seats left for session 2025–26.</p>
        <Link to="/admission">
          <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
            🚀 Enroll Now
          </button>
        </Link>
      </section>

      {/* Why Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img
              src={Img5}
              alt="Why Krishna Public School"
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Why Krishna Public School?
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              We focus on holistic development, academic excellence, and nurturing the creativity of every child.<br />
              <span className="text-blue-700 font-semibold">Best school in Faridabad</span>
            </p>
            <Link to="/about">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-md">
                Read More
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Track Record */}
      <section
        ref={ref}
        className="py-20 px-4 bg-gradient-to-br from-white to-blue-50 text-center relative"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-14">
          📈 Our Track Record
          <span className="block w-20 h-1 bg-blue-400 mt-3 mx-auto rounded-full"></span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl border border-blue-100 p-8"
            >
              <p className="text-4xl font-extrabold text-blue-700 min-h-[60px]">
                {inView && <CountUp end={stat.value} duration={2} />}
                {stat.suffix}
              </p>
              <p className="mt-3 text-lg font-medium text-gray-700">{stat.label}</p>
              <div className="mt-4 h-1 w-12 bg-blue-500 mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Topper Carousel */}
      <TopperCarousel toppers={toppers} />

      {/* Infrastructure */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#dff4ff] via-[#eef9ff] to-[#f5fcff]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Academic Infrastructure
          </h2>
          <p className="text-blue-700 text-lg mb-12 max-w-2xl mx-auto">
            We provide top-class facilities to ensure quality education and holistic development.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {infrastructure.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-md">
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-bold text-blue-800 mb-1">{item.title}</h3>
                  <div className="w-12 h-1 bg-blue-500 rounded-full mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="bg-blue-50 py-14 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">👨‍🏫 Message from Our Principal</h2>
          <p className="text-gray-700 text-lg italic">
            “Every child is a spark of potential. We nurture that spark into brilliance.”
          </p>
          <p className="mt-4 font-semibold text-blue-700">– Mr. Sunny Kumar Sharma, Principal</p>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative bg-cover bg-center py-20 px-4 text-white"
        style={{ backgroundImage: `url(${FooterImg})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">📚 Invest in Your Child’s Future</h2>
          <p className="text-lg mb-6">Be part of a nurturing journey toward excellence.</p>
          <Link to="/admission">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8 py-3 rounded-full shadow-lg">
              📝 Apply for Admission
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;



