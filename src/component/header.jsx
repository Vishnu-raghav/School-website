// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

// function Header() {
//   const [open, setOpen] = useState(false);

//   // Scroll lock when mobile menu open
//   useEffect(() => {
//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [open]);

//   return (
//     <>
//       {/* Logo + Contact */}
//       <div className="backdrop-blur-lg bg-white/70 border-b border-gray-200 px-4 sm:px-6 md:px-12 py-4 shadow">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
//           {/* Left: Logo + Name */}
//           <div className="flex items-center gap-4">
//             <img
//               src="https://images.timesnowhindi.com/photo/msid-107571279/thumbsize-46756,107571279.jpg"
//               alt="Logo"
//               className="h-16 w-16 object-cover rounded-full ring-2 ring-blue-400 shadow"
//             />
//             <div>
//               <h1 className="text-2xl font-bold text-blue-900 font-serif">
//                 Krishna Public School
//               </h1>
//               <p className="text-gray-600 text-sm">
//                 Empowering Future Generations
//               </p>
//             </div>
//           </div>

//           {/* Right: Contact Info */}
//           <div className="hidden md:grid sm:grid-cols-2 gap-4 text-sm text-gray-800">
//             {/* Call */}
//             <div className="flex items-center gap-4 bg-blue-50 px-4 py-3 rounded shadow hover:bg-blue-100 hover:shadow-lg hover:rotate-[1deg] transition-all duration-300">
//               <div className="h-10 w-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full shadow-sm">
//                 <i className="fa-solid fa-phone text-sm animate-bounce"></i>
//               </div>
//               <div>
//                 <p className="font-semibold text-blue-900 text-base">Call Us</p>
//                 <p className="text-sm text-gray-700">
//                   9711208294, 8860626419
//                 </p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex items-center gap-4 bg-blue-50 px-4 py-3 rounded shadow hover:bg-blue-100 hover:shadow-lg hover:rotate-[1deg] transition-all duration-300">
//               <div className="h-10 w-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full shadow-sm">
//                 <i className="fa-solid fa-envelope text-sm animate-bounce"></i>
//               </div>
//               <div>
//                 <p className="font-semibold text-blue-900 text-base">Email</p>
//                 <p className="text-sm break-all text-gray-700">
//                   vishnur1225@gmail.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Sticky Navbar */}
//       <nav className="sticky top-0 z-50 bg-blue-950 text-white shadow-md">
//         <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-3">
//           {/* Left: Burger + NavLinks */}
//           <div className="flex items-center gap-6">
//             {/* Burger (mobile) */}
//             <div className="md:hidden">
//               <button onClick={() => setOpen(true)}>
//                 <i className="fa-solid fa-bars text-xl"></i>
//               </button>
//             </div>

//             {/* Desktop Links */}
//             <div className="hidden md:flex gap-6 font-medium text-sm">
//               <NavLink to="/" className="hover:text-yellow-300 transition">Home</NavLink>
//               <NavLink to="/About" className="hover:text-yellow-300 transition">About</NavLink>
//               <NavLink to="/Admission" className="hover:text-yellow-300 transition">Admission</NavLink>
//               <NavLink to="/Gallery" className="hover:text-yellow-300 transition">Gallery</NavLink>
//               <NavLink to="/Contact" className="hover:text-yellow-300 transition">Contact</NavLink>
//             </div>
//           </div>

//           {/* CTA Button */}
//           <div>
//             <NavLink to="/Admission">
//               <button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:scale-105 hover:shadow-lg transition-all px-4 py-1.5 text-sm font-semibold rounded-full text-white">
//                 🎓 Apply Now
//               </button>
//             </NavLink>
//           </div>
//         </div>
//       </nav>

//       {/* Overlay when menu is open */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40"
//           onClick={() => setOpen(false)}
//         ></div>
//       )}

//       {/* Mobile Drawer */}
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
//           <NavLink to="/" onClick={() => setOpen(false)} className="hover:text-yellow-200">Home</NavLink>
//           <NavLink to="/About" onClick={() => setOpen(false)} className="hover:text-yellow-200">About</NavLink>
//           <NavLink to="/Admission" onClick={() => setOpen(false)} className="hover:text-yellow-200">Admission</NavLink>
//           <NavLink to="/Gallery" onClick={() => setOpen(false)} className="hover:text-yellow-200">Gallery</NavLink>
//           <NavLink to="/Contact" onClick={() => setOpen(false)} className="hover:text-yellow-200">Contact</NavLink>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default Header;





import { useState, useEffect } from "react";
import CustomNavLink from "./CustomNavLink";

function Header() {
  const [open, setOpen] = useState(false);

  // Scroll lock when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Logo + Contact */}
      <div className="backdrop-blur-lg bg-white/70 border-b border-gray-200 px-4 sm:px-6 md:px-12 py-4 shadow">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src="https://images.timesnowhindi.com/photo/msid-107571279/thumbsize-46756,107571279.jpg"
              alt="Logo"
              className="h-16 w-16 object-cover rounded-full ring-2 ring-blue-400 shadow"
            />
            <div>
              <h1 className="text-2xl font-bold text-blue-900 font-serif">
                Krishna Public School
              </h1>
              <p className="text-gray-600 text-sm">
                Empowering Future Generations
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:grid sm:grid-cols-2 gap-4 text-sm text-gray-800">
            <div className="flex items-center gap-4 bg-blue-50 px-4 py-3 rounded shadow hover:bg-blue-100 hover:shadow-lg hover:rotate-[1deg] transition-all duration-300">
              <div className="h-10 w-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full shadow-sm">
                <i className="fa-solid fa-phone text-sm animate-bounce"></i>
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-base">Call Us</p>
                <p className="text-sm text-gray-700">9711208294, 8860626419</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-blue-50 px-4 py-3 rounded shadow hover:bg-blue-100 hover:shadow-lg hover:rotate-[1deg] transition-all duration-300">
              <div className="h-10 w-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full shadow-sm">
                <i className="fa-solid fa-envelope text-sm animate-bounce"></i>
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-base">Email</p>
                <p className="text-sm break-all text-gray-700">
                  vishnur1225@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-blue-950 text-white shadow-md">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-3">
          {/* Left Side */}
          <div className="flex items-center gap-6">
            {/* Burger Icon */}
            <div className="md:hidden">
              <button onClick={() => setOpen(true)}>
                <i className="fa-solid fa-bars text-xl"></i>
              </button>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex gap-6 font-medium text-sm">
              <CustomNavLink to="/" className="hover:text-yellow-300 transition">Home</CustomNavLink>
              <CustomNavLink to="/About" className="hover:text-yellow-300 transition">About</CustomNavLink>
              <CustomNavLink to="/Admission" className="hover:text-yellow-300 transition">Admission</CustomNavLink>
              <CustomNavLink to="/Gallery" className="hover:text-yellow-300 transition">Gallery</CustomNavLink>
              <CustomNavLink to="/Contact" className="hover:text-yellow-300 transition">Contact</CustomNavLink>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <CustomNavLink to="/Admission">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:scale-105 hover:shadow-lg transition-all px-4 py-1.5 text-sm font-semibold rounded-full text-white">
                🎓 Apply Now
              </button>
            </CustomNavLink>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer */}
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
          <CustomNavLink to="/" onClick={() => setOpen(false)} className="hover:text-yellow-200">Home</CustomNavLink>
          <CustomNavLink to="/About" onClick={() => setOpen(false)} className="hover:text-yellow-200">About</CustomNavLink>
          <CustomNavLink to="/Admission" onClick={() => setOpen(false)} className="hover:text-yellow-200">Admission</CustomNavLink>
          <CustomNavLink to="/Gallery" onClick={() => setOpen(false)} className="hover:text-yellow-200">Gallery</CustomNavLink>
          <CustomNavLink to="/Contact" onClick={() => setOpen(false)} className="hover:text-yellow-200">Contact</CustomNavLink>
        </ul>
      </div>
    </>
  );
}

export default Header;

