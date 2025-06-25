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
      <ScrollToTop />
      <Header />
      {isLoading && <Loader />}
      
      <div key={location.pathname} className="fade-enter">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default App;




