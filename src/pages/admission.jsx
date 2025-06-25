// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { useLoading } from "../context/LoadingContext"; // path change mat bhoolna


// function Admission() {
//   const form = useRef();
//   const { setIsLoading } = useLoading();

//   const [status, setStatus] = useState(null); // success | error

//   const handleSubmit = (e) => {
//   e.preventDefault();
//   setIsLoading(true); // ⏳ loader on

//   emailjs
//     .sendForm(
//       "service_n5cw0kg",
//       "template_ma511ie",
//       form.current,
//       "oAawwwXpnjugqovvl"
//     )
//     .then(() => {
//       setStatus("success");
//       form.current.reset();
//       setTimeout(() => setStatus(null), 4000);
//     })
//     .catch(() => {
//       setStatus("error");
//       setTimeout(() => setStatus(null), 4000);
//     })
//     .finally(() => {
//       setIsLoading(false); // ✅ loader off
//     });
// };


//   return (
//     <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen py-12 px-4 md:px-20">
//       <div className="text-center mb-12">
//         <h1 className="text-5xl font-bold text-blue-800 mb-2">🎓 Admissions Open</h1>
//         <p className="text-gray-700 text-lg max-w-2xl mx-auto">
//           Apply to Krishna Public School – nurturing excellence since day one.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-12">
//         {/* ℹ️ Admission Info */}
//         <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-200">
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4">📌 Admission Details</h2>
//           <ul className="text-blue-900 space-y-3 text-[16px]">
//             <li>✅ Classes: Nursery to Class 10</li>
//             <li>📅 Dates: 1st March – 31st May</li>
//             <li>🎂 Min Age: 3 years (Nursery)</li>
//             <li>📄 Documents:
//               <ul className="list-disc ml-5 text-gray-700">
//                 <li>Birth Certificate</li>
//                 <li>2 Photos (Passport Size)</li>
//                 <li>Aadhar Card</li>
//                 <li>Previous Report Card</li>
//               </ul>
//             </li>
//             <li>💰 Fee Structure: Available at office</li>
//             <li>📍 Address: Krishna Nagar, Kanpur</li>
//             <li>📞 Contact: +91 98765 43210</li>
//           </ul>
//         </div>

//         {/* 📝 Admission Form */}
//         <form
//           ref={form}
//           onSubmit={handleSubmit}
//           className="bg-white rounded-2xl shadow-xl p-8 border border-blue-200 space-y-4"
//         >
//           <h2 className="text-2xl font-semibold text-blue-700 mb-2">📝 Admission Form</h2>

//           {status === "success" && (
//             <p className="bg-green-100 text-green-800 px-4 py-2 rounded-xl border border-green-300">
//               ✅ Form submitted successfully! We'll contact you soon.
//             </p>
//           )}
//           {status === "error" && (
//             <p className="bg-red-100 text-red-800 px-4 py-2 rounded-xl border border-red-300">
//               ❌ Something went wrong. Please try again.
//             </p>
//           )}

//           <input
//             type="text"
//             name="student_name"
//             placeholder="👦 Student's Full Name"
//             required
//             className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="text"
//             name="class"
//             placeholder="🏷 Class Applying For"
//             required
//             className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="date"
//             name="dob"
//             placeholder="📅 Date of Birth"
//             required
//             className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="text"
//             name="parent_name"
//             placeholder="👨‍👩‍👧 Parent's Name"
//             required
//             className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="✉️ Parent's Email"
//             required
//             className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="📞 Contact Number"
//             required
//             className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             name="message"
//             rows="4"
//             placeholder="💬 Any additional info (optional)"
//             className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-medium transition"
//           >
//             📤 Submit Application
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Admission;

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import { useLoading } from "../context/LoadingContext";

function Admission() {
  const form = useRef();
  const { setIsLoading } = useLoading();
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
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
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus(null), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(null), 4000);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen py-12 px-4 md:px-20">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Admission - Krishna Public School | Apply Online</title>
        <meta
          name="description"
          content="Apply online for admission to Krishna Public School, Kanpur. Open from Nursery to Class 10. Safe transport, smart classrooms, and value-based education."
        />
        <meta
          name="keywords"
          content="Krishna Public School Admission, School Near Me, Kanpur School, Apply Online, Nursery Admission, CBSE School Kanpur"
        />
      </Helmet>

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-800 mb-2">🎓 Admissions Open</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Apply to Krishna Public School – nurturing excellence since day one.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* ℹ️ Admission Info */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-blue-200" aria-label="Admission Details">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">📌 Admission Details</h2>
          <ul className="text-blue-900 space-y-3 text-[16px]">
            <li>✅ Classes: Nursery to Class 10</li>
            <li>📅 Dates: 1st March – 31st May</li>
            <li>🎂 Min Age: 3 years (Nursery)</li>
            <li>
              📄 Documents:
              <ul className="list-disc ml-5 text-gray-700">
                <li>Birth Certificate</li>
                <li>2 Photos (Passport Size)</li>
                <li>Aadhar Card</li>
                <li>Previous Report Card</li>
              </ul>
            </li>
            <li>💰 Fee Structure: Available at office</li>
            <li>📍 Address: Krishna Nagar, Kanpur</li>
            <li>📞 Contact: +91 98765 43210</li>
          </ul>
        </section>

        {/* 📝 Admission Form */}
        <article className="bg-white rounded-2xl shadow-xl p-8 border border-blue-200 space-y-4" aria-label="Admission Form">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">📝 Admission Form</h2>

          {status === "success" && (
            <p className="bg-green-100 text-green-800 px-4 py-2 rounded-xl border border-green-300">
              ✅ Form submitted successfully! We'll contact you soon.
            </p>
          )}
          {status === "error" && (
            <p className="bg-red-100 text-red-800 px-4 py-2 rounded-xl border border-red-300">
              ❌ Something went wrong. Please try again.
            </p>
          )}

          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="student_name"
              placeholder="👦 Student's Full Name"
              autoComplete="name"
              required
              className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400 mb-3"
            />
            <input
              type="text"
              name="class"
              placeholder="🏷 Class Applying For"
              required
              className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400 mb-3"
            />
            <input
              type="date"
              name="dob"
              required
              className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400 mb-3"
            />
            <input
              type="text"
              name="parent_name"
              placeholder="👨‍👩‍👧 Parent's Name"
              autoComplete="name"
              required
              className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400 mb-3"
            />
            <input
              type="email"
              name="email"
              placeholder="✉️ Parent's Email"
              autoComplete="email"
              required
              className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400 mb-3"
            />
            <input
              type="tel"
              name="phone"
              placeholder="📞 Contact Number"
              autoComplete="tel"
              required
              className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400 mb-3"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="💬 Any additional info (optional)"
              className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400 mb-3"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-medium transition"
            >
              📤 Submit Application
            </button>
          </form>
        </article>
      </div>
    </div>
  );
}

export default Admission;
