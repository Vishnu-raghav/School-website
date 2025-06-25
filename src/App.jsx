import { Outlet } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import Loader from './component/loader';
import { useLoading } from './context/LoadingContext';

function App() {
  const { isLoading } = useLoading();

  return (
    <>
      <Header />
      {isLoading && <Loader />}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
