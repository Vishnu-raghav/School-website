// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import Map from "../component/Map.jsx";
// import { useLoading } from "../context/LoadingContext"; // import karo


// function Contact() {
//   const form = useRef();
//   const { setIsLoading } = useLoading(); // context se loading setter


//  const sendEmail = (e) => {
//   e.preventDefault();
//   setIsLoading(true); // ⏳ Start loader

//   emailjs
//     .sendForm(
//       "service_n5cw0kg",
//       "template_ma511ie",
//       form.current,
//       "oAawwwXpnjugqovvl"
//     )
//     .then(() => {
//       alert("Message sent successfully!");
//       form.current.reset();
//     })
//     .catch(() => {
//       alert("Failed to send message. Please try again.");
//     })
//     .finally(() => {
//       setIsLoading(false); // ✅ Hide loader
//     });
// };


//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-12 px-4 md:px-20">
//       <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
//         Get in Touch with Krishna Public School
//       </h2>

//       <div className="grid md:grid-cols-2 gap-10 items-start">
//         {/* Contact Card */}
//         <div className="bg-white shadow-2xl rounded-2xl p-10 space-y-6 border border-blue-100">
//           <h3 className="text-2xl font-semibold text-blue-700">📬 Send Us a Message</h3>
//           <form ref={form} onSubmit={sendEmail} className="space-y-4">
//             <input
//               type="text"
//               name="from_name"
//               placeholder="👤 Full Name"
//               className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
//               required
//             />
//             <input
//               type="email"
//               name="user_email"
//               placeholder="✉️ Email Address"
//               className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="📝 Your message..."
//               rows="5"
//               className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-medium transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* Info + Map */}
//         <div className="space-y-6">
//           <div className="bg-blue-100 p-6 rounded-xl shadow-md">
//             <h4 className="text-lg font-semibold text-blue-800">📍 Address</h4>
//             <p className="text-blue-900">
//               Krishna Nagar, Kanpur, Uttar Pradesh, India – 208001
//             </p>
//           </div>

//           <div className="bg-blue-100 p-6 rounded-xl shadow-md">
//             <h4 className="text-lg font-semibold text-blue-800">📞 Phone</h4>
//             <p className="text-blue-900">+91 98765 43210</p>
//           </div>

//           <div className="bg-blue-100 p-6 rounded-xl shadow-md">
//             <h4 className="text-lg font-semibold text-blue-800">✉️ Email</h4>
//             <p className="text-blue-900">contact@krishnapublicschool.edu.in</p>
//           </div>

//           <div className="rounded-xl overflow-hidden shadow-xl">
//             <Map />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;






import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Map from "../component/Map.jsx";
import { useLoading } from "../context/LoadingContext";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
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
        toast.success("🎉 Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        toast.error("❌ Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-12 px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-blue-800 mb-12"
      >
        ✉️ Get in Touch with Krishna Public School
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-2xl p-10 space-y-6 border border-blue-100"
        >
          <h3 className="text-2xl font-semibold text-blue-700">📬 Send Us a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="relative">
              <input
                type="text"
                name="from_name"
                placeholder=" "
                required
                className="w-full p-3 border border-gray-300 rounded-lg peer focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                👤 Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="user_email"
                placeholder=" "
                required
                className="w-full p-3 border border-gray-300 rounded-lg peer focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                ✉️ Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows="5"
                placeholder=" "
                required
                className="w-full p-3 border border-gray-300 rounded-lg peer focus:ring-2 focus:ring-blue-400 outline-none"
              ></textarea>
              <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                📝 Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg transition-all"
            >
              🚀 Submit
            </button>
          </form>
        </motion.div>

        {/* Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {[
            { icon: "📍", title: "Address", value: "Krishna Nagar, Kanpur, UP – 208001" },
            { icon: "📞", title: "Phone", value: "+91 98765 43210" },
            { icon: "✉️", title: "Email", value: "contact@krishnapublicschool.edu.in" },
          ].map((item, index) => (
            <div key={index} className="bg-blue-100 p-5 rounded-xl shadow-md hover:scale-[1.02] transition-all">
              <h4 className="text-lg font-semibold text-blue-800">{item.icon} {item.title}</h4>
              <p className="text-blue-900">{item.value}</p>
            </div>
          ))}

          <div className="rounded-xl overflow-hidden shadow-xl border h-[300px] md:h-[400px]">
            <Map />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;

