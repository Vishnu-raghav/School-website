// import Map from "./Map"

// function Footer(){

//     return(
// <div className="bg-black text-white ">
//       <div className=" bg-amber-200 pl-15 pt-10">
//         <h1 className="text-2xl font-bold">Get In Touch With Us</h1>
//       </div>
//       <div className="bg-pink-400 h-[25rem] flex mt-2">
//       <div className="bg-green-500 h-96 w-96 pt-10 pl-15 ">
//           <p className="text-xl font-medium ">Krishna Public school</p>
//           <p className="bg-pink-500 mt-3 text-sm font-medium w-72">Galli No.5 Saraswati Colony, Sehatpur, Faridabad, Haryana 121003</p>  
//           <div className="bg-yellow-300 flex text-sm mt-4  gap-x-2 items-center">
//             <i class="fa-solid fa-phone-flip"></i>
//             <p className="font-medium">0129-2560378</p>
//           </div>
//           <div className="bg-yellow-300 flex text-sm mt-4  gap-x-2 items-center">
//             <i class="fa-solid fa-envelope"></i>
//             <p className="font-medium">vishnur125@gmail.com</p>
//           </div>
//           <div className="bg-yellow-300 flex text-sm mt-4  gap-x-2 items-center">
//             <i class="fa-solid fa-earth-africa"></i>
//             <p className="font-medium">www.krishnapublicschool.net</p>
//           </div>

//       <div className="bg-orange-400 mt-4">
//         <p>Connect With Us</p>
//         <div className="flex items-center pt-3 gap-x-3 text-2xl  bg-amber-800">
//             <a href=""><i class="fa-brands fa-square-facebook"></i></a>
//             <a href=""><i class="fa-brands fa-instagram"></i></a>
//             <a href=""><i class="fa-brands fa-youtube"></i></a>
//         </div>
//       </div>
//       </div>
// <div className="bg-orange-600 p-6 pl-20 pt-11 flex gap-30 text-white">
//   {/* Column 1 */}
//   <div>
//     <p className="font-semibold text-lg mb-4">Useful Links</p>
//     <div className="flex flex-col gap-y-3">
//       <p className="border-b border-dotted border-gray-300 pb-2 hover:text-yellow-200 cursor-pointer">Home</p>
//       <p className="border-b border-dotted border-gray-300 pb-2 hover:text-yellow-200 cursor-pointer">About</p>
//       <p className="border-b border-dotted border-gray-300 pb-2 hover:text-yellow-200 cursor-pointer">Certificate</p>
//       <p className="border-b border-dotted border-gray-300 pb-2 hover:text-yellow-200 cursor-pointer">Contact</p>
//     </div>
//   </div>

//   {/* Column 2 */}
//   <div>
//     <p className="font-semibold text-lg mb-4">Opening Time</p>
//     <div className="flex flex-col gap-y-3">
//       <p className="border-b border-dotted border-gray-300 pb-2 hover:text-yellow-200 cursor-pointer">Mon to fri - 08 - 02 PM</p>
//       <p className="border-b border-dotted border-gray-300 pb-2 hover:text-yellow-200 cursor-pointer">Saturday - 09 AM - 01 PM</p>
//       <p className="border-b border-dotted border-gray-300 pb-2 hover:text-yellow-200 cursor-pointer">Sunday - Closed</p>
//     </div>
//   </div>

//   {/* Column 3 */}
//   <div>
//     <p className="font-semibold text-lg mb-4">Academic</p>
//     <div className="flex flex-col gap-y-3">
//       <p className="border-b border-dotted border-gray-300 pb-2 hover:text-yellow-200 cursor-pointer">Laboratory</p>
//       <p className="border-b border-dotted border-gray-300 pb-2 hover:text-yellow-200 cursor-pointer">Infrastructure Eco-Zone</p>
//       <p className="border-b border-dotted border-gray-300 pb-2 hover:text-yellow-200 cursor-pointer">Admissions Open</p>
//     </div>
//   </div>
// </div>
   
// <div className="bg-amber-300 py-8 px-4 text-center">
//   <p className="text-xl font-semibold mb-4">Google Map</p>

//   <div className="mx-auto w-96 h-64 rounded overflow-hidden shadow-lg border border-orange-400">
//     <Map />
//   </div>
// </div>

//       </div>
//     </div>
//     )
// }

// export default Footer






// import Map from "./Map";

// function Footer() {
//   return (
//     <div className="bg-black text-white">
//       {/* Top heading */}
//       <div className="bg-amber-200 px-6 py-10">
//         <h1 className="text-2xl font-bold">Get In Touch With Us</h1>
//       </div>

//       {/* Main footer grid */}
//       <div className="flex flex-col lg:flex-row gap-10 px-6 py-8 bg-pink-400">
//         {/* Contact Details */}
//         <div className="bg-green-500 p-6 rounded w-full lg:w-1/3">
//           <p className="text-xl font-medium mb-2">Krishna Public School</p>
//           <p className="text-sm font-medium mb-4 w-72">
//             Galli No.5, Saraswati Colony, Sehatpur, Faridabad, Haryana 121003
//           </p>

//           <div className="flex items-center text-sm gap-x-2 mb-2">
//             <i className="fa-solid fa-phone-flip"></i>
//             <p className="font-medium">0129-2560378</p>
//           </div>

//           <div className="flex items-center text-sm gap-x-2 mb-2">
//             <i className="fa-solid fa-envelope"></i>
//             <p className="font-medium">vishnur125@gmail.com</p>
//           </div>

//           <div className="flex items-center text-sm gap-x-2 mb-4">
//             <i className="fa-solid fa-earth-africa"></i>
//             <p className="font-medium">www.krishnapublicschool.net</p>
//           </div>

//           <div>
//             <p className="mb-2 font-semibold">Connect With Us</p>
//             <div className="flex gap-x-4 text-2xl text-white">
//               <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
//               <a href="#"><i className="fa-brands fa-instagram"></i></a>
//               <a href="#"><i className="fa-brands fa-youtube"></i></a>
//             </div>
//           </div>
//         </div>

//         {/* Links and Info */}
//         <div className="bg-orange-600 p-6 rounded w-full lg:w-2/3 flex flex-col md:flex-row justify-between text-white gap-8">
//           {/* Column 1 */}
//           <div>
//             <p className="font-semibold text-lg mb-4">Useful Links</p>
//             <div className="flex flex-col gap-y-3">
//               <p className="border-b border-dotted border-gray-300 pb-2 hover:text-yellow-200 cursor-pointer">Home</p>
//               <p className="border-b border-dotted border-gray-300 pb-2 hover:text-yellow-200 cursor-pointer">About</p>
//               <p className="border-b border-dotted border-gray-300 pb-2 hover:text-yellow-200 cursor-pointer">Certificate</p>
//               <p className="border-b border-dotted border-gray-300 pb-2 hover:text-yellow-200 cursor-pointer">Contact</p>
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div>
//             <p className="font-semibold text-lg mb-4">Opening Time</p>
//             <div className="flex flex-col gap-y-3">
//               <p className="border-b border-dotted border-gray-300 pb-2">Mon to Fri - 08:00 AM - 02:00 PM</p>
//               <p className="border-b border-dotted border-gray-300 pb-2">Saturday - 09:00 AM - 01:00 PM</p>
//               <p className="border-b border-dotted border-gray-300 pb-2">Sunday - Closed</p>
//             </div>
//           </div>

//           {/* Column 3 */}
//           <div>
//             <p className="font-semibold text-lg mb-4">Academic</p>
//             <div className="flex flex-col gap-y-3">
//               <p className="border-b border-dotted border-gray-300 pb-2">Laboratory</p>
//               <p className="border-b border-dotted border-gray-300 pb-2">Infrastructure Eco-Zone</p>
//               <p className="border-b border-dotted border-gray-300 pb-2">Admissions Open</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Map Section */}
//       <div className="bg-amber-300 py-8 px-4 text-center">
//         <p className="text-xl font-semibold mb-4">Google Map</p>
//         <div className="mx-auto w-full max-w-md h-64 rounded overflow-hidden shadow-lg border border-orange-400">
//           <Map />
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="bg-neutral-800 text-center text-sm py-4">
//         <p>
//           © 2025 Krishna Public School — Powered by{" "}
//           <a
//             href="https://www.linkedin.com/in/vishnu-raghav-093017261/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-400 underline hover:text-blue-300"
//           >
//             Vishnu
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Footer;





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
