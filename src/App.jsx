// import { Outlet, useLocation } from 'react-router-dom';
// import Header from './component/header.jsx';
// import Footer from './component/footer.jsx';
// import Loader from './component/loader.jsx';
// import ScrollToTop from './component/ScrollToTop';
// import { useLoading } from './context/LoadingContext.jsx';
// import "./App.css";
// import Popup from "./component/PopUp.jsx";
// import WhatsAppButton from "./component/WhatsAppButton.jsx";

// function App() {
//   const { isLoading } = useLoading();
//   const location = useLocation();

//   return (
//     <>
//       <ScrollToTop />
//       <Header />
//       {isLoading && <Loader />}
//       <main
//         key={location.pathname}
//         className="fade-enter min-h-[70vh] bg-white"
//         aria-live="polite"
//       >
//         <Outlet />
//       </main>
//       <Footer />
//        <Popup />
//       <WhatsAppButton />
//     </>
//   );
// }

// export default App;

import { Outlet, useLocation } from 'react-router-dom';
import Header from './component/header.jsx';
import Footer from './component/footer.jsx';
import Loader from './component/loader.jsx';
import ScrollToTop from './component/ScrollToTop';
import { useLoading } from './context/LoadingContext.jsx';
import "./App.css";
import Popup from "./component/PopUp.jsx";
import WhatsAppButton from "./component/WhatsAppButton.jsx";

// ✅ Import toast container and its CSS
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isLoading } = useLoading();
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      {isLoading && <Loader />}
      <main
        key={location.pathname}
        className="fade-enter min-h-[70vh] bg-white"
        aria-live="polite"
      >
        <Outlet />
      </main>
      <Footer />
      <Popup />
      <WhatsAppButton />
      
      {/* ✅ Toasts will show here */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
