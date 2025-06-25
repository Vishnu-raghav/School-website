import { Outlet, useLocation } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import Loader from './component/loader';
import ScrollToTop from './component/ScrollToTop';
import { useLoading } from './context/LoadingContext';
import "./App.css";

function App() {
  const { isLoading } = useLoading();
  const location = useLocation();

  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Global Site Header */}
      <Header />

      {/* Show loader if app is fetching data */}
      {isLoading && <Loader />}

      {/* Main Content Area with animation keying */}
      <main
        key={location.pathname}
        className="fade-enter min-h-[70vh] bg-white"
        aria-live="polite"
      >
        <Outlet />
      </main>

      {/* Global Site Footer */}
      <Footer />
    </>
  );
}

export default App;
