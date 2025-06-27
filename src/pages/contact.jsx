import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Map from "../component/Map.jsx";
import { useLoading } from "../context/LoadingContext";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();
  const { setIsLoading } = useLoading();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_n5cw0kg",
        "template_ma511ie",
        form.current,
        "oAawwwXpnjugqovvl"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-12 px-4 md:px-20">
      <Helmet>
        <title>Contact Krishna Public School - Get in Touch</title>
        <meta
          name="description"
          content="Contact Krishna Public School, Kanpur. Reach out via phone, email or send a message directly. Visit us on map and explore admission opportunities."
        />
        <meta
          name="keywords"
          content="Krishna Public School contact, school contact Kanpur, email Krishna school, school map location, school phone number"
        />
      </Helmet>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-blue-800 mb-12"
      >
        Get in Touch with Krishna Public School
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-2xl p-10 space-y-6 border border-blue-100"
        >
          <h3 className="text-2xl font-semibold text-blue-700">
            Send Us a Message
          </h3>

          <form ref={form} onSubmit={sendEmail} autoComplete="off" className="space-y-5">
            <div className="relative">
              <input
                type="text"
                name="from_name"
                placeholder=" "
                required
                autoComplete="off"
                className="w-full p-3 pt-4 border border-gray-300 rounded-lg peer focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <label className="absolute left-3 top-0.5 text-[13px] text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0.5 peer-focus:text-[13px] peer-focus:text-blue-600">
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="user_email"
                placeholder=" "
                required
                autoComplete="off"
                className="w-full p-3 pt-4 border border-gray-300 rounded-lg peer focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <label className="absolute left-3 top-0.5 text-[13px] text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0.5 peer-focus:text-[13px] peer-focus:text-blue-600">
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows="5"
                placeholder=" "
                required
                autoComplete="off"
                className="w-full p-3 pt-4 border border-gray-300 rounded-lg peer focus:ring-2 focus:ring-blue-400 outline-none resize-none"
              ></textarea>
              <label className="absolute left-3 top-0.5 text-[13px] text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0.5 peer-focus:text-[13px] peer-focus:text-blue-600">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg transition-all"
            >
              Submit
            </button>
          </form>
        </motion.section>

        {/* Contact Info + Map */}
        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {[
            { title: "Address", value: "Sehatpur, Faridabad, Haryana – 121003" },
            { title: "Phone", value: "+91-9911733387, +91-9958403241" },
            { title: "Email", value: "Kps5358@gmail.com" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-blue-100 p-5 rounded-xl shadow-md hover:scale-[1.02] transition-all"
            >
              <h4 className="text-lg font-semibold text-blue-800">{item.title}</h4>
              <p className="text-blue-900">{item.value}</p>
            </div>
          ))}

          <div className="rounded-xl overflow-hidden shadow-xl border h-[300px] md:h-[400px]">
            <Map />
          </div>
        </motion.aside>
      </div>
    </div>
  );
}

export default Contact;
