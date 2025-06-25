import { motion } from "framer-motion";
import SchoolImg from "../assets/schl.jpg";
import PrincipalImg from "../assets/prin.jpg";
import DirectorImg from "../assets/dir.jpg";
import ChairmanImg from "../assets/chair.jpg";
import { FaBullseye, FaEye, FaLightbulb } from "react-icons/fa";

function About() {
  const leaders = [
    {
      name: "Principal's Message",
      image: PrincipalImg,
      message:
        "Education here is about building responsible individuals ready to lead the world with values and vision.",
    },
    {
      name: "Chairman's Message",
      image: ChairmanImg,
      message:
        "We offer a space where each child feels valued and inspired to grow to their fullest potential.",
    },
    {
      name: "Director's Message",
      image: DirectorImg,
      message:
        "We empower students to become innovative thinkers, confident communicators, and ethical leaders.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 overflow-hidden">

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            About Krishna Public School
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At Krishna Public School, we nurture young minds with care, purpose, and dedication.
            With experienced educators and advanced infrastructure, we emphasize holistic development through academics, ethics, and creativity.
          </p>
        </motion.div>

        <motion.img
          src={SchoolImg}
          alt="School"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-3xl md:text-4xl font-semibold text-center text-blue-800 mb-12">
          💼 Leadership Messages
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/40 backdrop-blur-xl rounded-xl shadow-xl p-6 border border-blue-100 hover:shadow-blue-200 transition-all"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 mb-4 object-cover"
              />
              <h4 className="text-xl text-center font-semibold text-blue-800 mb-2">
                {leader.name}
              </h4>
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
            <h5 className="text-xl font-bold text-blue-800 mb-2">Our Mission</h5>
            <p className="text-gray-600 text-sm">
              Deliver value-based education that fosters academic excellence, creativity, and integrity.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-blue-50 rounded-2xl p-8 shadow hover:shadow-blue-200"
          >
            <FaEye className="text-3xl text-blue-700 mb-4 mx-auto" />
            <h5 className="text-xl font-bold text-blue-800 mb-2">Our Vision</h5>
            <p className="text-gray-600 text-sm">
              To become a leading educational institution producing global citizens with strong values.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-blue-50 rounded-2xl p-8 shadow hover:shadow-blue-200"
          >
            <FaLightbulb className="text-3xl text-blue-700 mb-4 mx-auto" />
            <h5 className="text-xl font-bold text-blue-800 mb-2">Our Aim</h5>
            <p className="text-gray-600 text-sm">
              Create a nurturing environment where every student is empowered to dream, believe, and achieve.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
