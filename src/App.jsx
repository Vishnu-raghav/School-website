import { Outlet, useLocation } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import Loader from './component/loader';
import ScrollToTop from './component/ScrollToTop';
import { useLoading } from './context/LoadingContext';
import "./App.css";
import Popup from "./component/PopUp.jsx";
import WhatsAppButton from "./component/WhatsAppButton.jsx";

function App() {
  const { isLoading } = useLoading();
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      {/* Global Site Header */}
      <Header />

      {isLoading && <Loader />}

      <main
        key={location.pathname}
        className="fade-enter min-h-[70vh] bg-white"
        aria-live="polite"
      >
        <Outlet />
      </main>

      {/* Global Site Footer */}
      <Footer />
       <Popup />
      <WhatsAppButton />
    </>
  );
}

export default App;
