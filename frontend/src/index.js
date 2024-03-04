import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import FeeStructure from './Pages/FeeStructure';
import SchoolRules from './Pages/SchoolRules';
import MandatoryPublicDisclosure from './Pages/MandatoryPublicDisclosure';
import PrimaryWing from './Pages/PrimaryWing';
import MiddleWing from './Pages/MiddleWing';
import SeniorWing from './Pages/SeniorWing';
import AlumniRegister from './Pages/AlumniRegister';
import Hostel from './Pages/Hostel';
import Faculty from './Pages/Faculty';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'fee-structure',
    element: <FeeStructure />,
  },
  {
    path: '/school-rules',
    element: <SchoolRules />
  },
  {
    path: '/mandatory-public-disclosure',
    element: <MandatoryPublicDisclosure />
  },
  {
    path: '/primary-wing',
    element: <PrimaryWing />
  },
  {
    path: '/middle-wing',
    element: <MiddleWing />
  },
  {
    path: '/senior-wing',
    element: <SeniorWing />
  },
  {
    path: '/hostel',
    element: <Hostel />
  },
  {
    path: '/alumni-register',
    element: <AlumniRegister />
  },
  {
    path: '/faculty',
    element: <Faculty />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
