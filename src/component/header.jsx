import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50 bg-white">
      {/* Top Section: Logo + Contact */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-4 gap-6">
        {/* Logo & Name */}
        <div className="flex items-center gap-4 w-full lg:w-2/3">
          <img
            className="h-24 w-24 object-cover rounded"
            src="https://images.timesnowhindi.com/photo/msid-107571279/thumbsize-46756,107571279.jpg"
            alt="Logo"
          />
          <div>
            <h1 className="text-2xl md:text-3xl text-blue-900 font-serif">
              Krishna Public School
            </h1>
            <p className="text-sm text-gray-600">
              (Lorem ipsum dolor sit amet)
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto justify-end">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5H13.5m-3 0V3h3V1.5h-3Zm0 18.75h3" />
            </svg>
            <div>
              <p className="font-semibold text-black">Contact Now</p>
              <p className="text-sm text-gray-700">9711208294, 8860626419</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <div>
              <p className="font-semibold text-black">Mail</p>
              <p className="text-sm text-gray-700">vishnur1225@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-blue-950 px-6 md:px-12 py-2 flex items-center justify-between text-white">
        {/* Left: Desktop Nav Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <p className="hover:text-yellow-300 cursor-pointer">Home</p>
          <p className="hover:text-yellow-300 cursor-pointer">About</p>
          <p className="hover:text-yellow-300 cursor-pointer">Infrastructure</p>
          <p className="hover:text-yellow-300 cursor-pointer">Gallery</p>
          <p className="hover:text-yellow-300 cursor-pointer">Contact</p>
        </div>

        {/* Right: Burger for mobile */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setOpen(true)}>
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {/* Right-side Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-950 text-white transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-sm">
          <li onClick={() => setOpen(false)} className="hover:text-yellow-200 cursor-pointer">Home</li>
          <li onClick={() => setOpen(false)} className="hover:text-yellow-200 cursor-pointer">About</li>
          <li onClick={() => setOpen(false)} className="hover:text-yellow-200 cursor-pointer">Infrastructure</li>
          <li onClick={() => setOpen(false)} className="hover:text-yellow-200 cursor-pointer">Gallery</li>
          <li onClick={() => setOpen(false)} className="hover:text-yellow-200 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
