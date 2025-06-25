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
import { Helmet } from "react-helmet";
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
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Krishna Public School | Best CBSE School in Kanpur | Admissions Open</title>
        <meta
          name="description"
          content="Krishna Public School in Kanpur is a top-rated CBSE school offering quality education, smart classes, transport, labs, and overall development. Admissions open for 2025–26."
        />
        <meta
          name="keywords"
          content="Krishna Public School, Best School in Kanpur, School Near Me, CBSE School, Admissions, Top School, Smart Class, Transport, Private School Kanpur"
        />
        <link rel="canonical" href="https://yourdomain.com/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "School",
            "name": "Krishna Public School",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Krishna Nagar",
              "addressLocality": "Kanpur",
              "addressRegion": "UP",
              "postalCode": "208001",
              "addressCountry": "IN"
            },
            "telephone": "9711208294",
            "email": "vishnur1225@gmail.com",
            "url": "https://yourdomain.com"
          }
        `}</script>
      </Helmet>

      {/* Strip */}
      <div className="bg-blue-700 text-white py-3 text-sm text-center font-medium animate-pulse px-4">
        🧑‍🏫 Certified Teachers | 💡 Smart Classes | 🚌 Safe Transport | 🏆 90%+ Results | 🌟 Personality Development
      </div>

      <Hero />

      {/* Award */}
      <div className="bg-yellow-100 py-3 text-center text-blue-900 font-medium tracking-wide animate-fade-in px-4">
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

      {/* Add your remaining JSX (Why Us, Stats, Toppers, Infrastructure, Principal Message, Testimonials, Final CTA) below */}
      {/* Keep alt="..." for each image and clean heading hierarchy */}
            {/* Why Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="w-full md:w-1/2">
            <img src={Img5} alt="Why KPS" className="w-full h-auto rounded-2xl shadow-lg" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Why Krishna Public School?
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              We focus on holistic development, academic excellence & nurturing innovation in every child.
            </p>
            <Link to="/about">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-md">
                Read More
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-white to-blue-50 text-center px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">📈 Our Track Record</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto gap-6">
          {[
            { label: "Students Enrolled", value: "1500+" },
            { label: "Board Toppers", value: "60+" },
            { label: "Certified Teachers", value: "80+" },
            { label: "Years of Excellence", value: "20+" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6 hover:scale-105 transition">
              <p className="text-4xl font-bold text-blue-700">{stat.value}</p>
              <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      
{/* Toppers - Infinite Auto Scroll */}
<section className="py-16 px-4 bg-blue-50 overflow-hidden">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
      Meet Our Toppers
    </h2>

    <div className="relative overflow-hidden">
      {/* Gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>

      {/*  Scrollable strip */}
      <div className="whitespace-nowrap overflow-hidden">
        <div className="infinite-scroll-wrapper">
          {[...Array(2)].flatMap(() =>
            toppers.map((topper, i) => (
              <div
                key={i + Math.random()}
                className="inline-block w-60 mx-4 bg-white rounded-2xl shadow p-6"
              >
                <img
                  src={topper.image}
                  alt={topper.name}
                  className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 object-cover mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {topper.name}
                </h3>
                <p className="text-blue-700">{topper.class} Topper</p>
                <p className="text-gray-600 font-medium">{topper.score}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Infrastructure */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#e0f2ff] to-[#f0f9ff]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 underline decoration-blue-400">
            Academic Infrastructure
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-blue-700 text-lg mb-12 max-w-2xl mx-auto">
            We provide top-class facilities for quality education and holistic development.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {infrastructure.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: idx * 0.15 }} className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-800">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*  Principal's Message */}
      <section className="bg-blue-50 py-14 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">👨‍🏫 Message from Our Principal</h2>
          <p className="text-gray-700 text-lg italic">
            “Every child is a spark of potential. At Krishna Public School, we nurture that spark into brilliance.”
          </p>
          <p className="mt-4 font-semibold text-blue-700">– Mr. S. Verma, Principal</p>
        </div>
      </section>

      {/*  Testimonials */}
      <section className="py-16 bg-white px-4">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">💬 What Parents Say</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <blockquote className="bg-blue-50 p-6 rounded-xl shadow-md">
            <p className="text-lg text-gray-700">"Teachers are caring. My child has grown in confidence and skills!"</p>
            <footer className="mt-3 text-right text-blue-600 font-semibold">– Ramesh, Parent</footer>
          </blockquote>
          <blockquote className="bg-blue-50 p-6 rounded-xl shadow-md">
            <p className="text-lg text-gray-700">"Best decision ever! My daughter loves smart classes and activities."</p>
            <footer className="mt-3 text-right text-blue-600 font-semibold">– Meena, Parent</footer>
          </blockquote>
        </div>
      </section>

      {/*  Final CTA */}
      <section className="relative bg-cover bg-center py-20 px-4 text-white" style={{ backgroundImage: `url(${Lab})` }}>
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">📚 Invest in Your Child’s Future</h2>
          <p className="text-lg mb-6">Be part of a nurturing journey toward excellence at Krishna Public School.</p>
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
