// import { useRef, useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import { Helmet } from "react-helmet-async";
// import { useLoading } from "../context/LoadingContext.jsx";
// import axiosInstance from "../api/axiosInstance.js";

// function Admission() {
//   const form = useRef();
//   const { setIsLoading } = useLoading();
//   const [status, setStatus] = useState(null);
//   const [contactInfo, setContactInfo] = useState(null);

//   useEffect(() => {
//     const fetchContactInfo = async () => {
//       try {
//         const res = await axiosInstance.get("/contact");
//         setContactInfo(res.data.data);
//       } catch (error) {
//         console.error("Failed to fetch contact info", error);
//       }
//     };

//     fetchContactInfo();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     emailjs
//       .sendForm(
//         "service_n5cw0kg",
//         "template_ma511ie",
//         form.current,
//         "oAawwwXpnjugqovvl"
//       )
//       .then(() => {
//         setStatus("success");
//         form.current.reset();
//         setTimeout(() => setStatus(null), 4000);
//       })
//       .catch(() => {
//         setStatus("error");
//         setTimeout(() => setStatus(null), 4000);
//       })
//       .finally(() => setIsLoading(false));
//   };

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-14 px-4 md:px-20">
//       <Helmet>
//         <title>Admissions - Krishna Public School, Kanpur | Apply Online</title>
//         <meta
//           name="description"
//           content="Apply online for admission to Krishna Public School in Kanpur. Classes from Nursery to 10th. Safe transport, smart classes, and caring teachers."
//         />
//         <meta
//           name="keywords"
//           content="Krishna Public School Admission, Apply Online, Kanpur School, Nursery Admission, CBSE Kanpur"
//         />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content="Admission - Krishna Public School, Kanpur" />
//         <meta property="og:description" content="Online admission open for classes Nursery to 10th at Krishna Public School, Kanpur." />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://krishnapublicschool.in/admission" />
//         <meta property="og:image" content="/logo192.png" />
//         <meta name="twitter:card" content="summary_large_image" />
//       </Helmet>

//       {/* Header */}
//       <header className="text-center mb-12">
//         <h1 className="text-5xl font-bold text-blue-800 mb-2">Admissions Open</h1>
//         <p className="text-gray-700 text-lg max-w-2xl mx-auto">
//           Enroll your child today into a nurturing and excellence-driven environment.
//         </p>
//       </header>

//       <main className="grid md:grid-cols-2 gap-12 items-start">
//         {/* Admission Info */}
//         <section
//           className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-blue-200"
//           aria-label="Admission Details"
//         >
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4">Admission Details</h2>
//           <ul className="space-y-3 text-blue-900 text-[16px]">
//             <li><strong>Classes:</strong> Nursery to Class 10+2</li>
//             <li><strong>Admission Period:</strong> 1st April – 31st July</li>
//             <li><strong>Minimum Age:</strong> 3 years for Nursery</li>
//             <li>
//               <strong>Required Documents:</strong>
//               <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
//                 <li>Birth Certificate</li>
//                 <li>2 Passport Size Photos</li>
//                 <li>Aadhar Card</li>
//                 <li>Previous Report Card</li>
//               </ul>
//             </li>
//             <li><strong>Fee Structure:</strong> Available at Office</li>
//             <li>
//               <strong>Address:</strong>{" "}
//               {contactInfo?.address || "Sehatpur, Faridabad"}
//             </li>
//             <li>
//               <strong>Contact:</strong>{" "}
//               {contactInfo?.phone
//                 ? `+91-${contactInfo.phone}`
//                 : "+91-9911733387, +91-9958403241"}
//             </li>
//             <li>
//               <strong>Email:</strong>{" "}
//               {contactInfo?.email || "kps5358@gmail.com"}
//             </li>
//           </ul>
//         </section>

//         {/* Admission Form */}
//         <section
//           className="bg-white rounded-2xl shadow-2xl p-8 border border-blue-100 space-y-4"
//           aria-label="Admission Form"
//         >
//           <h2 className="text-2xl font-semibold text-blue-700 mb-2">Online Admission Form</h2>

//           {status && (
//             <p className={`px-4 py-2 rounded-xl border font-medium ${
//               status === "success"
//                 ? "bg-green-100 text-green-800 border-green-300"
//                 : "bg-red-100 text-red-800 border-red-300"
//             }`}>
//               {status === "success"
//                 ? "Form submitted successfully! We'll contact you soon."
//                 : "Something went wrong. Please try again."}
//             </p>
//           )}

//           <form
//             ref={form}
//             onSubmit={handleSubmit}
//             autoComplete="off"
//             className="space-y-4"
//           >
//             {[
//               { name: "student_name", label: "Student's Full Name", type: "text" },
//               { name: "class", label: "Class Applying For", type: "text" },
//               { name: "dob", label: "Date of Birth", type: "date" },
//               { name: "parent_name", label: "Parent's Name", type: "text" },
//               { name: "phone", label: "Contact Number", type: "tel" },
//             ].map((field) => (
//               <div key={field.name} className="relative">
//                 <input
//                   type={field.type}
//                   name={field.name}
//                   id={field.name}
//                   placeholder=" "
//                   required
//                   autoComplete="off"
//                   className="w-full p-3 pt-4 border border-gray-300 rounded-lg peer focus:ring-2 focus:ring-blue-400 outline-none"
//                 />
//                 <label
//                   htmlFor={field.name}
//                   className="absolute left-3 top-0.5 text-sm text-gray-500 transition-all 
//                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
//                     peer-focus:top-0.5 peer-focus:text-sm peer-focus:text-blue-600"
//                 >
//                   {field.label}
//                 </label>
//               </div>
//             ))}

//             <div className="relative">
//               <textarea
//                 name="message"
//                 id="message"
//                 rows="4"
//                 placeholder=" "
//                 autoComplete="off"
//                 className="w-full p-3 pt-4 border border-gray-300 rounded-lg peer focus:ring-2 focus:ring-blue-400 outline-none resize-none"
//               ></textarea>
//               <label
//                 htmlFor="message"
//                 className="absolute left-3 top-0.5 text-sm text-gray-500 transition-all 
//                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
//                   peer-focus:top-0.5 peer-focus:text-sm peer-focus:text-blue-600"
//               >
//                 Any additional information (optional)
//               </label>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-medium transition-all"
//             >
//               Submit Application
//             </button>
//           </form>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default Admission;




import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoading } from "../context/LoadingContext.jsx";
import axiosInstance from "../api/axiosInstance.js";

function Admission() {
  const form = useRef();
  const { setIsLoading } = useLoading();
  const [status, setStatus] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await axiosInstance.get("/contact");
        setContactInfo(res.data.data);
      } catch (error) {
        console.error("Failed to fetch contact info", error);
      }
    };

    fetchContactInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(form.current);
      formData.append("formType", "admission");

      await axiosInstance.post("/form/submit", formData);

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("Admission form submission failed", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-14 px-4 md:px-20">
      <Helmet>
        <title>Admissions - Krishna Public School, Kanpur | Apply Online</title>
        <meta
          name="description"
          content="Apply online for admission to Krishna Public School in Kanpur. Classes from Nursery to 10th. Safe transport, smart classes, and caring teachers."
        />
        <meta
          name="keywords"
          content="Krishna Public School Admission, Apply Online, Kanpur School, Nursery Admission, CBSE Kanpur"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Admission - Krishna Public School, Kanpur" />
        <meta
          property="og:description"
          content="Online admission open for classes Nursery to 10th at Krishna Public School, Kanpur."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krishnapublicschool.in/admission" />
        <meta property="og:image" content="/logo192.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-800 mb-2">Admissions Open</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Enroll your child today into a nurturing and excellence-driven environment.
        </p>
      </header>

      <main className="grid md:grid-cols-2 gap-12 items-start">
        {/* Admission Info */}
        <section
          className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-blue-200"
          aria-label="Admission Details"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Admission Details</h2>
          <ul className="space-y-3 text-blue-900 text-[16px]">
            <li><strong>Classes:</strong> Nursery to Class 10+2</li>
            <li><strong>Admission Period:</strong> 1st April – 31st July</li>
            <li><strong>Minimum Age:</strong> 3 years for Nursery</li>
            <li>
              <strong>Required Documents:</strong>
              <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1">
                <li>Birth Certificate</li>
                <li>2 Passport Size Photos</li>
                <li>Aadhar Card</li>
                <li>Previous Report Card</li>
              </ul>
            </li>
            <li><strong>Fee Structure:</strong> Available at Office</li>
            <li>
              <strong>Address:</strong> {contactInfo?.address || "Sehatpur, Faridabad"}
            </li>
            <li>
              <strong>Contact:</strong>{" "}
              {contactInfo?.phone ? `+91-${contactInfo.phone}` : "+91-9911733387, +91-9958403241"}
            </li>
            <li>
              <strong>Email:</strong> {contactInfo?.email || "kps5358@gmail.com"}
            </li>
          </ul>
        </section>

        {/* Admission Form */}
        <section
          className="bg-white rounded-2xl shadow-2xl p-8 border border-blue-100 space-y-4"
          aria-label="Admission Form"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Online Admission Form</h2>

          {status && (
            <p
              className={`px-4 py-2 rounded-xl border font-medium ${
                status === "success"
                  ? "bg-green-100 text-green-800 border-green-300"
                  : "bg-red-100 text-red-800 border-red-300"
              }`}
            >
              {status === "success"
                ? "Form submitted successfully! We'll contact you soon."
                : "Something went wrong. Please try again."}
            </p>
          )}

          <form
            ref={form}
            onSubmit={handleSubmit}
            autoComplete="off"
            className="space-y-4"
          >
            {[
              { name: "student_name", label: "Student's Full Name", type: "text" },
              { name: "class", label: "Class Applying For", type: "text" },
              { name: "dob", label: "Date of Birth", type: "date" },
              { name: "parent_name", label: "Parent's Name", type: "text" },
              { name: "phone", label: "Contact Number", type: "tel" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  placeholder=" "
                  required
                  autoComplete="off"
                  className="w-full p-3 pt-4 border border-gray-300 rounded-lg peer focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <label
                  htmlFor={field.name}
                  className="absolute left-3 top-0.5 text-sm text-gray-500 transition-all 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                    peer-focus:top-0.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  {field.label}
                </label>
              </div>
            ))}

            <div className="relative">
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder=" "
                autoComplete="off"
                className="w-full p-3 pt-4 border border-gray-300 rounded-lg peer focus:ring-2 focus:ring-blue-400 outline-none resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 top-0.5 text-sm text-gray-500 transition-all 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                  peer-focus:top-0.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Any additional information (optional)
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-medium transition-all"
            >
              Submit Application
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Admission;
