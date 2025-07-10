import Map from "./Map.jsx";
import CustomNavLink from "./CustomNavLink.jsx";

function Footer() {
  const year = new Date().getFullYear();

  const contactInfo = {
    heading: "Krishna Public School",
    address: "Sehatpur, Faridabad, Haryana 121003",
    phone: "+91-9911733387, +91-9958403241",
    email: "kps5358@gmail.com",
    website: "https://krishnapublicschool.net",
    facebook: "https://www.facebook.com/krishnapublicschool",
    instagram: "https://www.instagram.com/krishnapublicschool",
    youtube: "https://www.youtube.com/@krishnapublicschool",
  };

  return (
    <footer className="bg-[#0f172a] text-gray-300 font-[sans-serif]">
      {/* CTA Banner */}
      <div className="text-center py-14 bg-gradient-to-r from-blue-900 to-blue-700">
        <h2 className="text-3xl font-bold text-white">📞 Get In Touch With Us</h2>
        <p className="text-blue-200 mt-2 text-sm sm:text-base">
          We’d love to hear from you anytime.
        </p>
      </div>

      {/* Main Footer */}
      <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 px-6 py-20 max-w-7xl mx-auto">
        {/* School Info */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            {contactInfo.heading}
          </h3>
          <address className="not-italic leading-relaxed text-sm mb-4">
            {contactInfo.address}
          </address>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-sky-400"></i>
              <a href={`tel:${contactInfo.phone}`} className="hover:text-sky-400">
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-envelope text-sky-400"></i>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-sky-400">
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-globe text-sky-400"></i>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400"
              >
                {contactInfo.website.replace("https://", "")}
              </a>
            </li>
          </ul>

          <div className="mt-6">
            <p className="font-semibold mb-2 text-white">Follow Us</p>
            <div className="flex gap-4 text-xl">
              <a
                href={contactInfo.facebook}
                aria-label="Facebook"
                className="hover:text-blue-500"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href={contactInfo.instagram}
                aria-label="Instagram"
                className="hover:text-pink-500"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href={contactInfo.youtube}
                aria-label="YouTube"
                className="hover:text-red-500"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><CustomNavLink to="/" className="hover:text-sky-400 transition">🏠 Home</CustomNavLink></li>
            <li><CustomNavLink to="/About" className="hover:text-sky-400 transition">📘 About</CustomNavLink></li>
            <li><CustomNavLink to="/Gallery" className="hover:text-sky-400 transition">📸 Gallery</CustomNavLink></li>
            <li><CustomNavLink to="/Admission" className="hover:text-sky-400 transition">🎓 Admission</CustomNavLink></li>
            <li><CustomNavLink to="/mandatory-disclosure" className="hover:text-sky-400 transition">📄 Disclosure</CustomNavLink></li>
            <li><CustomNavLink to="/Contact" className="hover:text-sky-400 transition">📞 Contact</CustomNavLink></li>
            <li><CustomNavLink to="/Career" className="hover:text-yellow-300 transition">💼 Career</CustomNavLink></li>
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
        © {year} Krishna Public School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

