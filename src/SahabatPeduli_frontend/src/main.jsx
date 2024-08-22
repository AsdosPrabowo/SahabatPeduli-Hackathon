import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { initSatellite } from "@junobuild/core";
import Home from './Pages/User/Home';
import App from './Pages/User/App';
import AboutUs from './Pages/User/AboutUs';
import HomeGovernment from './Pages/Government/HomeGovernment';
import AboutUsGovernment from './Pages/Government/AboutUsGovernment';

async function startApp() {
  // Initialize the satellite
  await initSatellite({
    satelliteId: "3cjuy-iyaaa-aaaal-ajsuq-cai"
  });

  // Create the router
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/dana',
      element: <App />,
    },
    {
      path: '/about-us',
      element: <AboutUs />,
    },
    {
      path: '/government',
      element: <HomeGovernment />,
    },
    {
      path: '/about-us-government',
      element: <AboutUsGovernment />,
    },
  ]);

  // Render the application
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}

// Start the application
startApp();
