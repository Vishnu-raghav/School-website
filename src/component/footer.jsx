import Map from "./Map";
import CustomNavLink from "./CustomNavLink"; 

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 font-[sans-serif]">
      {/* Top Banner */}
      <div className="text-center py-14 bg-gradient-to-r from-blue-900 to-blue-700">
        <h2 className="text-3xl font-bold text-white">Get In Touch With Us</h2>
        <p className="text-blue-200 mt-2 text-sm sm:text-base">We’d love to hear from you anytime.</p>
      </div>

      {/* Main Content */}
      <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 px-6 py-20 max-w-7xl mx-auto">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Krishna Public School</h3>
          <p className="mb-4 leading-relaxed">
            Galli No.5, Saraswati Colony, Sehatpur,<br />Faridabad, Haryana 121003
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
          <div className="mt-6">
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
          <h3 className="text-2xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><CustomNavLink to="/" className="hover:text-sky-400 transition">🏠 Home</CustomNavLink></li>
              <li><CustomNavLink to="/About" className="hover:text-sky-400 transition">📘 About</CustomNavLink></li>
              <li><CustomNavLink to="/Admission" className="hover:text-sky-400 transition">🎓 Admission</CustomNavLink></li>
              <li><CustomNavLink to="/Gallery" className="hover:text-sky-400 transition">📸 Gallery</CustomNavLink></li>
              <li><CustomNavLink to="/Contact" className="hover:text-sky-400 transition">📞 Contact</CustomNavLink></li>
            </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4 text-center lg:text-left">📍 Our Location</h3>
          <div className="w-full h-72 md:h-80 rounded-xl overflow-hidden border border-gray-600 shadow-lg">
            <Map />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0f172a] border-t border-gray-700 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Krishna Public School. All rights reserved. <br className="md:hidden" />
        Website designed & developed by{" "}
        <a
          href="https://www.linkedin.com/in/vishnu-raghav-093017261/"
          className="text-sky-400 hover:text-sky-300 underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vishnu Raghav
        </a>
      </div>
    </footer>
  );
}

export default Footer;
