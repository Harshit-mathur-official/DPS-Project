import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from './Pages/About';
import AdmissionPolicy from './Pages/AdmissionPolicy';
import AlumniRegister from './Pages/AlumniRegister';
import ExamPolicy from './Pages/ExamPolicy';
import Faculty from './Pages/Faculty';
import FeeStructure from './Pages/FeeStructure';
import Home from './Pages/Home';
import Hostel from './Pages/Hostel';
import HostelPolicy from './Pages/HostelPolicy';
import MandatoryPublicDisclosure from './Pages/MandatoryPublicDisclosure';
import MiddleWingSchool from './Pages/MiddleWingSchool';
import PrimaryWingSchoool from './Pages/PrimaryWingSchool';
import SchoolRules from './Pages/SchoolRules';
import SeniorWingSchool from './Pages/SeniorWingSchool';


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
    element: <PrimaryWingSchoool/>
  },
  {
    path: '/middle-wing',
    element: <MiddleWingSchool/>
  },
  {
    path: '/senior-wing',
    element: <SeniorWingSchool/>
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
  },
  {
    path: '/admission-policy',
    element: <AdmissionPolicy/>
  },
  {
    path: '/hostel-policy',
    element: <HostelPolicy/>
  },
  {
    path: '/exam-policy',
    element: <ExamPolicy/>
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
