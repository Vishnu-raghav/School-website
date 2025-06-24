import { motion } from "framer-motion";
import SchoolImg from "../assets/schl.jpg";
import PrincipalImg from "../assets/prin.jpg";
import DirectorImg from "../assets/dir.jpg";
import ChairmanImg from "../assets/chair.jpg";

function About() {
  return (
    <div className="w-full px-6 py-12 bg-white text-gray-800 overflow-x-hidden">
      {/* About Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 py-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            About Krishna Public School
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Krishna Public School is committed to shaping bright futures through
            quality education, discipline, and character-building. With state-of-the-art
            infrastructure and an experienced faculty, we focus on nurturing every
            student's unique talents and academic excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <img
            src={SchoolImg}
            alt="School Building"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </motion.div>
      </section>

      {/* Leadership Messages Animated Flow */}
      <section className="max-w-7xl mx-auto py-20 space-y-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <img
            src={PrincipalImg}
            alt="Principal"
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
          />
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Principal's Message</h3>
            <p className="text-gray-700 text-lg">
              At Krishna Public School, we believe that education is not just about books but about building responsible individuals ready to lead the world with values and vision.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row-reverse items-center gap-10"
        >
          <img
            src={ChairmanImg}
            alt="Chairman"
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
          />
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Chairman's Message</h3>
            <p className="text-gray-700 text-lg">
              It is our goal to offer an environment where each child feels valued and inspired to reach their full potential in academics and beyond.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <img
            src={DirectorImg}
            alt="Director"
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
          />
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Director's Message</h3>
            <p className="text-gray-700 text-lg">
              We strive to empower students to become innovative thinkers, confident communicators, and ethical leaders.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission, Vision, Aim */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[{
            title: "Our Mission",
            content: "To deliver value-based education that fosters academic excellence, creativity, and integrity."
          }, {
            title: "Our Vision",
            content: "To become a leading educational institution producing global citizens equipped with strong values."
          }, {
            title: "Our Aim",
            content: "To provide a nurturing environment where every student is empowered to dream, believe, and achieve."
          }].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow p-6 hover:shadow-blue-200"
            >
              <h4 className="text-xl font-bold text-blue-800 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
