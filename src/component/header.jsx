// import { useState, useEffect } from "react";
// import CustomNavLink from "./CustomNavLink.jsx";
// import axiosInstance from "../api/axiosInstance.js";

// function Header() {
//   const [open, setOpen] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [contact, setContact] = useState({ phone: "", email: "" });

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";

//     const escHandler = (e) => {
//       if (e.key === "Escape") setOpen(false);
//     };

//     window.addEventListener("keydown", escHandler);
//     return () => window.removeEventListener("keydown", escHandler);
//   }, [open]);

//   useEffect(() => {
//     const adminStatus = localStorage.getItem("isAdmin");
//     setIsAdmin(adminStatus === "true");
//   }, []);

//   // Fetch contact info from API
//   useEffect(() => {
//     const fetchContact = async () => {
//       try {
//         const res = await axiosInstance.get("/contact");
//         const { phone, email } = res.data.data;
//         setContact({ phone, email });
//       } catch (err) {
//         console.error("Failed to fetch contact data:", err);
//       }
//     };
//     fetchContact();
//   }, []);

//   return (
//     <>
//       <header className="backdrop-blur-lg bg-white/70 border-b border-gray-200 px-4 sm:px-6 md:px-12 py-4 shadow z-5">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
//           {/* Logo + Title */}
//           <div className="flex items-center gap-4">
//             <img
//               src="https://images.timesnowhindi.com/photo/msid-107571279/thumbsize-46756,107571279.jpg"
//               alt="School Logo"
//               className="h-16 w-16 object-cover rounded-full ring-2 ring-blue-400 shadow"
//             />
//             <div>
//               <h1 className="text-2xl font-bold text-blue-900 font-serif">
//                 Krishna Public School
//               </h1>
//               <p className="text-gray-600 text-sm">Sehatpur, Faridabad</p>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="hidden md:grid sm:grid-cols-2 gap-4 text-sm text-gray-800">
//             <div className="flex items-center gap-4 bg-blue-50 px-4 py-3 rounded shadow hover:bg-blue-100 hover:shadow-lg hover:rotate-[1deg] transition-all duration-300">
//               <div className="h-10 w-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full shadow-sm">
//                 <i className="fa-solid fa-phone text-sm animate-bounce"></i>
//               </div>
//               <div>
//                 <p className="font-semibold text-blue-900 text-base">Call Us</p>
//                 <p className="text-sm text-gray-700">{contact.phone}</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 bg-blue-50 px-4 py-3 rounded shadow hover:bg-blue-100 hover:shadow-lg hover:rotate-[1deg] transition-all duration-300">
//               <div className="h-10 w-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full shadow-sm">
//                 <i className="fa-solid fa-envelope text-sm animate-bounce"></i>
//               </div>
//               <div>
//                 <p className="font-semibold text-blue-900 text-base">Email</p>
//                 <p className="text-sm break-all text-gray-700">{contact.email}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Navigation Bar */}
//       <nav className="sticky top-0 z-40 bg-blue-950 text-white shadow-md">
//         <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-3">
//           <div className="flex items-center gap-6">
//             <button
//               className="md:hidden focus:outline-none"
//               onClick={() => setOpen(true)}
//               aria-label="Open menu"
//               aria-controls="mobile-drawer"
//               aria-expanded={open}
//             >
//               <i className="fa-solid fa-bars text-xl"></i>
//             </button>

//             {/* Desktop Nav */}
//             <div className="hidden md:flex gap-6 font-medium text-sm">
//               <CustomNavLink to="/" className="hover:text-yellow-300 transition">Home</CustomNavLink>
//               <CustomNavLink to="/About" className="hover:text-yellow-300 transition">About Us</CustomNavLink>
//               <CustomNavLink to="/Gallery" className="hover:text-yellow-300 transition">Gallery</CustomNavLink>
//               <CustomNavLink to="/Admission" className="hover:text-yellow-300 transition">Admission</CustomNavLink>
//               <CustomNavLink to="/mandatory-disclosure" className="hover:text-yellow-300 transition">Disclosure</CustomNavLink>
//               <CustomNavLink to="/Career" className="hover:text-yellow-300 transition">Career</CustomNavLink>
//               <CustomNavLink to="/Contact" className="hover:text-yellow-300 transition">Contact Us</CustomNavLink>
//             </div>
//           </div>

//           {/* CTA & Admin */}
//           <div className="flex items-center gap-4">
//             <CustomNavLink to="/Admission" title="Apply Now">
//               <button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:scale-105 hover:shadow-lg transition-all px-4 py-1.5 text-sm font-semibold rounded-full text-white">
//                 🎓 Apply Now
//               </button>
//             </CustomNavLink>

//             {isAdmin ? (
//               <CustomNavLink to="/admin/dashboard" title="Admin Dashboard">
//                 <button className="p-2 rounded-full bg-blue-800 hover:bg-blue-700 text-white text-xl shadow hover:scale-110 transition">
//                   <i className="fa-solid fa-user-shield"></i>
//                 </button>
//               </CustomNavLink>
//             ) : (
//               <CustomNavLink to="/admin/login" title="Admin Login">
//                 <button className="p-2 rounded-full bg-blue-800 hover:bg-blue-700 text-white text-xl shadow hover:scale-110 transition">
//                   <i className="fa-solid fa-lock"></i>
//                 </button>
//               </CustomNavLink>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40"
//           onClick={() => setOpen(false)}
//           aria-hidden="true"
//         ></div>
//       )}

//       {/* Mobile Drawer */}
//       <div
//         id="mobile-drawer"
//         className={`fixed top-0 right-0 h-full w-64 bg-blue-950 text-white transition-transform duration-300 z-50 ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//         role="dialog"
//         aria-modal="true"
//       >
//         <div className="flex justify-between items-center p-4 border-b border-blue-700">
//           <h2 className="text-lg font-bold">Menu</h2>
//           <button onClick={() => setOpen(false)} aria-label="Close menu">
//             <i className="fa-solid fa-xmark text-2xl"></i>
//           </button>
//         </div>
//         <ul className="flex flex-col gap-4 p-4 text-sm">
//           <CustomNavLink to="/" onClick={() => setOpen(false)} className="hover:text-yellow-200">Home</CustomNavLink>
//           <CustomNavLink to="/About" onClick={() => setOpen(false)} className="hover:text-yellow-200">About</CustomNavLink>
//           <CustomNavLink to="/Gallery" onClick={() => setOpen(false)} className="hover:text-yellow-200">Gallery</CustomNavLink>
//           <CustomNavLink to="/Admission" onClick={() => setOpen(false)} className="hover:text-yellow-200">Admission</CustomNavLink>
//           <CustomNavLink to="/mandatory-disclosure" onClick={() => setOpen(false)} className="hover:text-yellow-200">Disclosure</CustomNavLink>
//           <CustomNavLink to="/Contact" onClick={() => setOpen(false)} className="hover:text-yellow-200">Contact</CustomNavLink>
//           <CustomNavLink to="/Career" onClick={() => setOpen(false)} className="hover:text-yellow-300 transition">Career</CustomNavLink>

//           {isAdmin ? (
//             <CustomNavLink to="/admin/dashboard" onClick={() => setOpen(false)} className="hover:text-yellow-200">Admin Dashboard</CustomNavLink>
//           ) : (
//             <CustomNavLink to="/admin/login" onClick={() => setOpen(false)} className="hover:text-yellow-200">Admin Login</CustomNavLink>
//           )}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Header;













// import "../App.css";
// import { useState, useEffect } from "react";
// import CustomNavLink from "./CustomNavLink.jsx";
// import axiosInstance from "../api/axiosInstance.js";

// function Header() {
//   const [open, setOpen] = useState(false);
//   const [contact, setContact] = useState({ phone: "", email: "" });
//   const [showNav, setShowNav] = useState(false);

//   // Handle Escape key close for mobile nav
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//     const escHandler = (e) => e.key === "Escape" && setOpen(false);
//     window.addEventListener("keydown", escHandler);
//     return () => window.removeEventListener("keydown", escHandler);
//   }, [open]);

//   // Fetch contact data
//   useEffect(() => {
//     const fetchContact = async () => {
//       try {
//         const res = await axiosInstance.get("/contact");
//         const { phone, email } = res.data.data;
//         setContact({ phone, email });
//       } catch (err) {
//         console.error("Failed to fetch contact data:", err);
//       }
//     };
//     fetchContact();
//   }, []);

//   // SCROLL DETECTION LOGIC (main part)
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;
//       if (currentScroll > 150) {
//         setShowNav(true);
//       } else {
//         setShowNav(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Top Header Bar */}
//       <header className="backdrop-blur-lg bg-white/70 border-b border-gray-200 px-4 sm:px-6 md:px-12 py-4 shadow z-30">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
//           <div className="flex items-center gap-4">
//             <img
//               src="https://images.timesnowhindi.com/photo/msid-107571279/thumbsize-46756,107571279.jpg"
//               alt="School Logo"
//               className="h-16 w-16 object-cover rounded-full ring-2 ring-blue-400 shadow"
//             />
//             <div>
//               <h1 className="text-2xl font-bold text-blue-900 font-serif">Krishna Public School</h1>
//               <p className="text-gray-600 text-sm">Sehatpur, Faridabad</p>
//             </div>
//           </div>

//           <div className="hidden md:grid sm:grid-cols-2 gap-4 text-sm text-gray-800">
//             {/* Phone */}
//             <div className="flex items-center gap-4 bg-blue-50 px-4 py-3 rounded shadow hover:bg-blue-100 hover:shadow-lg transition-all duration-300">
//               <div className="h-10 w-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full">
//                 <i className="fa-solid fa-phone text-sm animate-bounce"></i>
//               </div>
//               <div>
//                 <p className="font-semibold text-blue-900 text-base">Call Us</p>
//                 <p className="text-sm text-gray-700">{contact.phone}</p>
//               </div>
//             </div>
//             {/* Email */}
//             <div className="flex items-center gap-4 bg-blue-50 px-4 py-3 rounded shadow hover:bg-blue-100 hover:shadow-lg transition-all duration-300">
//               <div className="h-10 w-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full">
//                 <i className="fa-solid fa-envelope text-sm animate-bounce"></i>
//               </div>
//               <div>
//                 <p className="font-semibold text-blue-900 text-base">Email</p>
//                 <p className="text-sm break-all text-gray-700">{contact.email}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Sticky NAVBAR */}
//       {showNav && (
//         <nav className="fixed top-0 z-50 w-full bg-blue-950 text-white shadow-md transition-transform duration-300 animate-slideDown">
//           <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-3">
//             <div className="flex items-center gap-6">
//               <button className="md:hidden" onClick={() => setOpen(true)}>
//                 <i className="fa-solid fa-bars text-xl"></i>
//               </button>
//               <div className="hidden md:flex gap-6 font-medium text-sm">
//                 <CustomNavLink to="/" className="hover:text-yellow-300">Home</CustomNavLink>
//                 <CustomNavLink to="/About" className="hover:text-yellow-300">About Us</CustomNavLink>
//                 <CustomNavLink to="/Gallery" className="hover:text-yellow-300">Gallery</CustomNavLink>
//                 <CustomNavLink to="/Admission" className="hover:text-yellow-300">Admission</CustomNavLink>
//                 <CustomNavLink to="/mandatory-disclosure" className="hover:text-yellow-300">Disclosure</CustomNavLink>
//                 <CustomNavLink to="/Career" className="hover:text-yellow-300">Career</CustomNavLink>
//                 <CustomNavLink to="/Contact" className="hover:text-yellow-300">Contact Us</CustomNavLink>
//               </div>
//             </div>
//             <CustomNavLink to="/Admission">
//               <button className="bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-1.5 text-sm font-semibold rounded-full hover:scale-105 transition">
//                 🎓 Apply Now
//               </button>
//             </CustomNavLink>
//           </div>
//         </nav>
//       )}

//       {/* Overlay */}
//       {open && (
//         <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-blue-950 text-white transition-transform duration-300 z-50 ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center p-4 border-b border-blue-700">
//           <h2 className="text-lg font-bold">Menu</h2>
//           <button onClick={() => setOpen(false)}>
//             <i className="fa-solid fa-xmark text-2xl"></i>
//           </button>
//         </div>
//         <ul className="flex flex-col gap-4 p-4 text-sm">
//           <CustomNavLink to="/" onClick={() => setOpen(false)}>Home</CustomNavLink>
//           <CustomNavLink to="/About" onClick={() => setOpen(false)}>About</CustomNavLink>
//           <CustomNavLink to="/Gallery" onClick={() => setOpen(false)}>Gallery</CustomNavLink>
//           <CustomNavLink to="/Admission" onClick={() => setOpen(false)}>Admission</CustomNavLink>
//           <CustomNavLink to="/mandatory-disclosure" onClick={() => setOpen(false)}>Disclosure</CustomNavLink>
//           <CustomNavLink to="/Contact" onClick={() => setOpen(false)}>Contact</CustomNavLink>
//           <CustomNavLink to="/Career" onClick={() => setOpen(false)}>Career</CustomNavLink>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Header;







// import "../App.css";

// import { useState, useEffect } from "react";
// import CustomNavLink from "./CustomNavLink.jsx";
// import axiosInstance from "../api/axiosInstance.js";

// function Header() {
//   const [open, setOpen] = useState(false);
//   const [contact, setContact] = useState({ phone: "", email: "" });

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//     const escHandler = (e) => e.key === "Escape" && setOpen(false);
//     window.addEventListener("keydown", escHandler);
//     return () => window.removeEventListener("keydown", escHandler);
//   }, [open]);

//   useEffect(() => {
//     const fetchContact = async () => {
//       try {
//         const res = await axiosInstance.get("/contact");
//         const { phone, email } = res.data.data;
//         setContact({ phone, email });
//       } catch (err) {
//         console.error("Failed to fetch contact data:", err);
//       }
//     };
//     fetchContact();
//   }, []);

//   return (
//     <>
//       <header className="backdrop-blur-lg  bg-white/70 border-b border-gray-200 px-4 sm:px-6 md:px-12 py-4 shadow z-50">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
//           <div className="flex items-center gap-4">
//             <img
//               src="https://images.timesnowhindi.com/photo/msid-107571279/thumbsize-46756,107571279.jpg"
//               alt="School Logo"
//               className="h-16 w-16 object-cover rounded-full ring-2 ring-blue-400 shadow"
//             />
//             <div>
//               <h1 className="text-2xl font-bold text-blue-900 font-serif">Krishna Public School</h1>
//               <p className="text-gray-600 text-sm">Sehatpur, Faridabad</p>
//             </div>
//           </div>

//           <div className="hidden md:grid sm:grid-cols-2 gap-4 text-sm text-gray-800">
//             <div className="flex items-center gap-4 bg-blue-50 px-4 py-3 rounded shadow hover:bg-blue-100 hover:shadow-lg transition-all duration-300">
//               <div className="h-10 w-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full">
//                 <i className="fa-solid fa-phone text-sm animate-bounce"></i>
//               </div>
//               <div>
//                 <p className="font-semibold text-blue-900 text-base">Call Us</p>
//                 <p className="text-sm text-gray-700">{contact.phone}</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 bg-blue-50 px-4 py-3 rounded shadow hover:bg-blue-100 hover:shadow-lg transition-all duration-300">
//               <div className="h-10 w-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full">
//                 <i className="fa-solid fa-envelope text-sm animate-bounce"></i>
//               </div>
//               <div>
//                 <p className="font-semibold text-blue-900 text-base">Email</p>
//                 <p className="text-sm break-all text-gray-700">{contact.email}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <nav className="sticky top-0 z-50 bg-blue-950 text-white shadow-md">
//         <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-3">
//           <div className="flex items-center gap-6">
//             <button className="md:hidden" onClick={() => setOpen(true)}>
//               <i className="fa-solid fa-bars text-xl"></i>
//             </button>
//             <div className="hidden md:flex gap-6 font-medium text-sm">
//               <CustomNavLink to="/" className="hover:text-yellow-300">Home</CustomNavLink>
//               <CustomNavLink to="/About" className="hover:text-yellow-300">About Us</CustomNavLink>
//               <CustomNavLink to="/Gallery" className="hover:text-yellow-300">Gallery</CustomNavLink>
//               <CustomNavLink to="/Admission" className="hover:text-yellow-300">Admission</CustomNavLink>
//               <CustomNavLink to="/mandatory-disclosure" className="hover:text-yellow-300">Disclosure</CustomNavLink>
//               <CustomNavLink to="/Career" className="hover:text-yellow-300">Career</CustomNavLink>
//               <CustomNavLink to="/Contact" className="hover:text-yellow-300">Contact Us</CustomNavLink>
//             </div>
//           </div>
//           <CustomNavLink to="/Admission">
//             <button className="bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-1.5 text-sm font-semibold rounded-full hover:scale-105 transition">
//               🎓 Apply Now
//             </button>
//           </CustomNavLink>
//         </div>
//       </nav>

//       {open && (
//         <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setOpen(false)} />
//       )}

//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-blue-950 text-white transition-transform duration-300 z-50 ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between items-center p-4 border-b border-blue-700">
//           <h2 className="text-lg font-bold">Menu</h2>
//           <button onClick={() => setOpen(false)}>
//             <i className="fa-solid fa-xmark text-2xl"></i>
//           </button>
//         </div>
//         <ul className="flex flex-col gap-4 p-4 text-sm">
//           <CustomNavLink to="/" onClick={() => setOpen(false)}>Home</CustomNavLink>
//           <CustomNavLink to="/About" onClick={() => setOpen(false)}>About</CustomNavLink>
//           <CustomNavLink to="/Gallery" onClick={() => setOpen(false)}>Gallery</CustomNavLink>
//           <CustomNavLink to="/Admission" onClick={() => setOpen(false)}>Admission</CustomNavLink>
//           <CustomNavLink to="/mandatory-disclosure" onClick={() => setOpen(false)}>Disclosure</CustomNavLink>
//           <CustomNavLink to="/Contact" onClick={() => setOpen(false)}>Contact</CustomNavLink>
//           <CustomNavLink to="/Career" onClick={() => setOpen(false)}>Career</CustomNavLink>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Header;












import { useState, useEffect } from "react";
import CustomNavLink from "./CustomNavLink.jsx";

function Header() {
  const [open, setOpen] = useState(false);

  const contact = {
    phone: "+91-9911733387, +91-9958403241",
    email: "kps5358@gmail.com"
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    const escHandler = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, [open]);

  return (
    <>
      <header className="backdrop-blur-lg bg-white/70 border-b border-gray-200 px-4 sm:px-6 md:px-12 py-4 shadow z-50">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img
              src="https://images.timesnowhindi.com/photo/msid-107571279/thumbsize-46756,107571279.jpg"
              alt="School Logo"
              className="h-16 w-16 object-cover rounded-full ring-2 ring-blue-400 shadow"
            />
            <div>
              <h1 className="text-2xl font-bold text-blue-900 font-serif">Krishna Public School</h1>
              <p className="text-gray-600 text-sm">Sehatpur, Faridabad</p>
            </div>
          </div>

          <div className="hidden md:grid sm:grid-cols-2 gap-4 text-sm text-gray-800">
            <div className="flex items-center gap-4 bg-blue-50 px-4 py-3 rounded shadow hover:bg-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="h-10 w-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-phone text-sm animate-bounce"></i>
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-base">Call Us</p>
                <p className="text-sm text-gray-700">{contact.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-blue-50 px-4 py-3 rounded shadow hover:bg-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="h-10 w-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-envelope text-sm animate-bounce"></i>
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-base">Email</p>
                <p className="text-sm break-all text-gray-700">{contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 z-50 bg-blue-950 text-white shadow-md">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-3">
          <div className="flex items-center gap-6">
            <button className="md:hidden" onClick={() => setOpen(true)}>
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
            <div className="hidden md:flex gap-6 font-medium text-sm">
              <CustomNavLink to="/" className="hover:text-yellow-300">Home</CustomNavLink>
              <CustomNavLink to="/About" className="hover:text-yellow-300">About Us</CustomNavLink>
              <CustomNavLink to="/Gallery" className="hover:text-yellow-300">Gallery</CustomNavLink>
              <CustomNavLink to="/Admission" className="hover:text-yellow-300">Admission</CustomNavLink>
              <CustomNavLink to="/mandatory-disclosure" className="hover:text-yellow-300">Disclosure</CustomNavLink>
              <CustomNavLink to="/Career" className="hover:text-yellow-300">Career</CustomNavLink>
              <CustomNavLink to="/Contact" className="hover:text-yellow-300">Contact Us</CustomNavLink>
            </div>
          </div>
          <CustomNavLink to="/Admission">
            <button className="bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-1.5 text-sm font-semibold rounded-full hover:scale-105 transition">
              🎓 Apply Now
            </button>
          </CustomNavLink>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setOpen(false)} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-950 text-white transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-blue-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-sm">
          <CustomNavLink to="/" onClick={() => setOpen(false)}>Home</CustomNavLink>
          <CustomNavLink to="/About" onClick={() => setOpen(false)}>About</CustomNavLink>
          <CustomNavLink to="/Gallery" onClick={() => setOpen(false)}>Gallery</CustomNavLink>
          <CustomNavLink to="/Admission" onClick={() => setOpen(false)}>Admission</CustomNavLink>
          <CustomNavLink to="/mandatory-disclosure" onClick={() => setOpen(false)}>Disclosure</CustomNavLink>
          <CustomNavLink to="/Contact" onClick={() => setOpen(false)}>Contact</CustomNavLink>
          <CustomNavLink to="/Career" onClick={() => setOpen(false)}>Career</CustomNavLink>
        </ul>
      </div>
    </>
  );
}

export default Header;
