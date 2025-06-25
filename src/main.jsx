import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ✅ Import this
import App from './App.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Gallery from './pages/gallery.jsx';
import Admission from './pages/admission.jsx';
import { LoadingProvider } from './context/LoadingContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Gallery", element: <Gallery /> },
      { path: "/Admission", element: <Admission /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* ✅ Wrap HelmetProvider here */}
      <LoadingProvider>
        <RouterProvider router={router} />
      </LoadingProvider>
    </HelmetProvider>
  </StrictMode>
);
