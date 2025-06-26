import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LoadingProvider } from './context/LoadingContext.jsx';

import App from './App.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Gallery from './pages/gallery.jsx';
import Admission from './pages/admission.jsx';
import MandatoryDisclosure from './pages/MandatoryDisclosure.jsx';
import AdminLogin from './pages/AdminLogin.jsx'; 
import AdminDashboard from './pages/AdminDashboard.jsx'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'admission', element: <Admission /> },
      { path: 'mandatory-disclosure', element: <MandatoryDisclosure /> },
      { path: 'admin/login', element: <AdminLogin /> },       
      { path: 'admin/dashboard', element: <AdminDashboard /> } 
    ],
  },
]);

createRoot(document.getElementById('root')).render(

    <HelmetProvider>
      <LoadingProvider>
        <RouterProvider router={router} />
      </LoadingProvider>
    </HelmetProvider>
  
);
