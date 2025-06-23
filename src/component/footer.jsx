import Map from "./Map";

function Footer() {
  return (
    <footer className="bg-black text-white text-sm">
      {/* Contact Header */}
      <div className=" px-6 py-6 text-white">
        <h1 className="text-xl font-bold">Get In Touch With Us</h1>
      </div>

      {/* Main Footer Content */}
      <div className="px-6 py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 bg-gray-900">
        {/* Left - Contact Info */}
        <div>
          <p className="text-lg font-semibold mb-2">Krishna Public School</p>
          <p className="mb-3 w-72">Galli No.5, Saraswati Colony, Sehatpur, Faridabad, Haryana 121003</p>
          
          <div className="flex items-center gap-2 mb-1">
            <i className="fa-solid fa-phone-flip"></i>
            <p>0129-2560378</p>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <i className="fa-solid fa-envelope"></i>
            <p>vishnur125@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <i className="fa-solid fa-earth-africa"></i>
            <p>krishnapublicschool.net</p>
          </div>

          <p className="font-medium mb-1">Connect With Us</p>
          <div className="flex gap-3 text-lg">
            <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        {/* Middle - Links */}
        <div>
          <p className="font-semibold text-lg mb-3">Useful Links</p>
          <div className="flex flex-col gap-2">
            <p className="border-b border-dotted border-gray-400 pb-1 hover:text-yellow-300">Home</p>
            <p className="border-b border-dotted border-gray-400 pb-1 hover:text-yellow-300">About</p>
            <p className="border-b border-dotted border-gray-400 pb-1 hover:text-yellow-300">Certificate</p>
            <p className="border-b border-dotted border-gray-400 pb-1 hover:text-yellow-300">Contact</p>
          </div>
        </div>

        {/* Right - Google Map */}
        <div className="text-center">
          <p className="font-semibold text-lg mb-3">Google Map</p>
          <div className="w-full h-48 mx-auto rounded overflow-hidden border border-gray-400">
            <Map />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-neutral-800 py-3 text-center">
        © 2025 Krishna Public School — Powered by{" "}
        <a
          href="https://www.linkedin.com/in/vishnu-raghav-093017261/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Vishnu
        </a>
      </div>
    </footer>
  );
}

export default Footer;
