import { Link } from "react-router-dom";
import Hero from "../component/Hero";
import Img5 from "../assets/img5.jpg";
import Top121 from "../assets/top121.png";
import Top122 from "../assets/top122.png";
import Top123 from "../assets/top123.png";
import SmartClass from "../assets/SC.jpg";
import Transport from "../assets/trans.jpg";
import Kindergarten from "../assets/Kindergarden.jpg";
import Lab from "../assets/LLL.WEBP";
import Block from "../assets/BB.jpg";
import Mess from "../assets/Mess.jpg";
import FooterImg from "../assets/f-2.jpg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../App.css";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const toppers = [
  { name: "Dev Singh", class: "12th", score: "86.2%", image: Top121 },
  { name: "Payal", class: "12th", score: "86%", image: Top122 },
  { name: "Gaurav", class: "12th", score: "84.2%", image: Top123 },
];

const stats = [
  { label: "Students Enrolled", value: 1500, suffix: "+" },
  { label: "Board Toppers", value: 60, suffix: "+" },
  { label: "Certified Teachers", value: 80, suffix: "+" },
  { label: "Years of Excellence", value: 20, suffix: "+" },
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
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Krishna Public School | Best School Near Me in Faridabad | Top CBSE School</title>
        <meta
          name="description"
          content="Looking for the best school near you? Krishna Public School in Faridabad offers CBSE education, smart classes, safe transport, and holistic development. Admissions open for 2025–26."
        />
        <meta
          name="keywords"
          content="school near me, Krishna Public School, best school in Faridabad, CBSE school Faridabad, top school near me, private school Faridabad"
        />
        <meta property="og:image" content="/preview.jpg" />
        <link rel="canonical" href="https://krishnapublicschool.net/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "School",
            "name": "Krishna Public School",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sarswati colonyr",
              "addressLocality": "Haryana",
              "addressRegion": "HR",
              "postalCode": "121003",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "26.4499",
              "longitude": "80.3319"
            },
            "hasMap": "https://goo.gl/maps/xyz",
            "telephone": "9711208294",
            "email": "vishnur1225@gmail.com",
            "url": "https://krishnapublicschool.net/"
          }
        `}</script>
      </Helmet>

      {/* Top Strip */}
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

      {/* Why Us
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="w-full md:w-1/2">
            <img src={Img5} alt="Why Krishna Public School - best school near me in Kanpur" className="w-full h-auto rounded-2xl shadow-lg" />
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
      </section> */}
      

      
{/* Why Us - Image left se, Text right se animate */}
<section className="py-16 px-4 bg-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    {/* Image: Left se animate */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="w-full md:w-1/2"
    >
      <img
        src={Img5}
        alt="Why Krishna Public School - best school near me in Kanpur"
        className="w-full h-auto rounded-2xl shadow-lg"
        loading="lazy"
      />
    </motion.div>

    {/* Text: Right se animate */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="w-full md:w-1/2 text-center md:text-left"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
        Why Krishna Public School?
      </h2>
      <p className="text-gray-700 text-lg mb-6">
        Hum focus karte hain holistic development, academic excellence aur har bachche ki creativity ko nurture karne par.<br />
        <span className="text-blue-700 font-semibold">Best school near me in Kanpur</span> ka experience yahin milega!
      </p>
      <Link to="/about">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-md transition-all duration-200">
          Read More
        </button>
      </Link>
    </motion.div>
  </div>
</section>


      {/* Track Record */}
      <section
        ref={ref}
        className="py-20 px-4 bg-gradient-to-br from-white to-blue-50 text-center relative overflow-hidden"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-14 relative inline-block">
          📈 Our Track Record
          <span className="block w-20 h-1 bg-blue-400 mt-3 mx-auto rounded-full"></span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl border border-blue-100 p-8"
            >
              <p className="text-5xl font-extrabold text-blue-700 min-h-[60px]">
                <span className="inline-block min-w-[100px] text-center">
                  {inView && <CountUp end={stat.value} duration={2} />}
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-3 text-lg font-medium text-gray-700">{stat.label}</p>
              <div className="mt-4 h-1 w-12 bg-blue-500 mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
        {/* Decorative background blobs */}
        <div className="absolute top-10 left-0 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      </section>

      {/* Toppers - Infinite Auto Scroll */}
      <section className="py-16 px-4 bg-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
            Meet Our Toppers
          </h2>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
            <div className="whitespace-nowrap overflow-hidden">
              <div className="infinite-scroll-wrapper">
                {[...Array(3)].flatMap(() =>
                  toppers.map((topper, i) => (
                    <div
                      key={i + Math.random()}
                      className="inline-block w-64 mx-4 bg-white rounded-3xl shadow-lg p-6 transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
                    >
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-600 shadow-md">
                        <img
                          src={topper.image}
                          alt={topper.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-1">
                        {topper.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-1">
                        {topper.class} Topper
                      </p>
                      <p className="text-lg font-semibold text-blue-600">
                        {topper.score}
                      </p>
                      <div className="mt-4 w-10 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#dff4ff] via-[#eef9ff] to-[#f5fcff]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 relative inline-block">
            <span className="relative z-10">Academic Infrastructure</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-blue-400 rounded-full"></span>
          </h2>
          <p className="text-blue-700 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            We provide top-class facilities to ensure quality education and holistic development for every child.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {infrastructure.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-md"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title + " - Krishna Public School, school near me in Kanpur"}
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="p-5 text-left">
                  <h3 className="text-xl font-bold text-blue-800 mb-1">{item.title}</h3>
                  <div className="w-12 h-1 bg-blue-500 rounded-full mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="bg-blue-50 py-14 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">👨‍🏫 Message from Our Principal</h2>
          <p className="text-gray-700 text-lg italic">
            “Every child is a spark of potential. At Krishna Public School, we nurture that spark into brilliance.”
          </p>
          <p className="mt-4 font-semibold text-blue-700">– Mr. S. Verma, Principal</p>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* Final CTA */}
      <section className="relative bg-cover bg-center py-20 px-4 text-white" style={{ backgroundImage: `url(${FooterImg})` }}>
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








