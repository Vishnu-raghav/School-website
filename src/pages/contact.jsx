import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Map from "../component/Map.jsx";
import { useLoading } from "../context/LoadingContext"; // import karo


function Contact() {
  const form = useRef();
  const { setIsLoading } = useLoading(); // context se loading setter


 const sendEmail = (e) => {
  e.preventDefault();
  setIsLoading(true); // ⏳ Start loader

  emailjs
    .sendForm(
      "service_n5cw0kg",
      "template_ma511ie",
      form.current,
      "oAawwwXpnjugqovvl"
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch(() => {
      alert("Failed to send message. Please try again.");
    })
    .finally(() => {
      setIsLoading(false); // ✅ Hide loader
    });
};


  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-12 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
        Get in Touch with Krishna Public School
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Card */}
        <div className="bg-white shadow-2xl rounded-2xl p-10 space-y-6 border border-blue-100">
          <h3 className="text-2xl font-semibold text-blue-700">📬 Send Us a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="from_name"
              placeholder="👤 Full Name"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="✉️ Email Address"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="📝 Your message..."
              rows="5"
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-medium transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Info + Map */}
        <div className="space-y-6">
          <div className="bg-blue-100 p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-blue-800">📍 Address</h4>
            <p className="text-blue-900">
              Krishna Nagar, Kanpur, Uttar Pradesh, India – 208001
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-blue-800">📞 Phone</h4>
            <p className="text-blue-900">+91 98765 43210</p>
          </div>

          <div className="bg-blue-100 p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-blue-800">✉️ Email</h4>
            <p className="text-blue-900">contact@krishnapublicschool.edu.in</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
