import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  CertificateData,
  DigitalMaketing,
  EmployeeData,
  InvoiceData,
  ViewData,
  Form,
  Login,
  Signup,
  StudentData,
} from "./Components/index.js";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Login/>}/>
      <Route path="certificatedata" element={<CertificateData/>}/>
      <Route path="digitalmaketing" element={<DigitalMaketing/>}/>
      <Route path="employeedata" element={<EmployeeData/>}/>
      <Route path="invoicedata" element ={<InvoiceData/>}/>
      <Route path="Login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="studentData" element ={<StudentData/>}/>
      <Route path="form" element ={<Form/>}/>
      <Route path="viewdata" element ={<ViewData/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
  </div>
);
