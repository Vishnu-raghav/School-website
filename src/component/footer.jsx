import { NavLink } from "react-router-dom";
import Map from "./Map";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      {/* Top Strip */}
      <div className="px-6 py-8 text-center bg-gradient-to-r from-blue-900 to-blue-700">
        <h1 className="text-2xl font-bold tracking-wide text-white">Get In Touch With Us</h1>
        <p className="mt-1 text-blue-200">We’d love to hear from you anytime.</p>
      </div>

      {/* Main Footer Content */}
      <div className="px-6 py-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3 bg-[#1e293b]">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Krishna Public School</h2>
          <p className="mb-4 max-w-sm">
            Galli No.5, Saraswati Colony, Sehatpur, Faridabad, Haryana 121003
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-sky-400"></i> 0129-2560378
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-envelope text-sky-400"></i> vishnur125@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-globe text-sky-400"></i> krishnapublicschool.net
            </li>
          </ul>

          <div className="mt-5">
            <p className="font-semibold mb-2 text-white">Follow Us</p>
            <div className="flex gap-4 text-xl">
              <a href="#"><i className="fa-brands fa-facebook hover:text-blue-500"></i></a>
              <a href="#"><i className="fa-brands fa-instagram hover:text-pink-500"></i></a>
              <a href="#"><i className="fa-brands fa-youtube hover:text-red-500"></i></a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <NavLink to="/" className="hover:text-sky-400 transition">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About" className="hover:text-sky-400 transition">About</NavLink>
            </li>
            <li>
              <NavLink to="/Admission" className="hover:text-sky-400 transition">Admission</NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="hover:text-sky-400 transition">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Map Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4 text-center lg:text-left">Our Location</h2>
          <div className="w-full h-48 rounded overflow-hidden border border-gray-700">
            <Map />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0f172a] py-4 text-center text-gray-500 text-sm border-t border-slate-700">
        © 2025 Krishna Public School — Powered by{" "}
        <a
          href="https://www.linkedin.com/in/vishnu-raghav-093017261/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 underline hover:text-sky-300"
        >
          Vishnu
        </a>
      </div>
    </footer>
  );
}

export default Footer;
