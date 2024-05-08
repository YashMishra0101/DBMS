import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";
import {
  CertificateData,
  DigitalMaketing,
  EmployeeData,
  InvoiceData,
  ViewData,
  CertificateCategory,
  EmployeCategory,
  InvoiceCategory,
  Form,
  Login,
  Signup,
  InvoiceForm,
  StudentData,
  DigitialMarketingForm,
  EmployeeDataForm,
  ViewDigitalMarketingData,
  ViewCertificateExperienceData,
  ViewCertificateIntern,
  ViewInternData,
  ViewEmployeData
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
      <Route path="formdigitalmarketing" element ={<DigitialMarketingForm/>}/>
      <Route path="viewdata" element ={<ViewData/>}/>
      <Route path="formemployeedata" element ={<EmployeeDataForm/>}/>
      <Route path="viewdigitalmarketing" element ={<ViewDigitalMarketingData/>}/>
      <Route path="invoiceform" element ={<InvoiceForm/>}/>
      <Route path="certificatecategory" element ={<CertificateCategory/>}/>
      <Route path="employecategory" element ={<EmployeCategory/>}/>
      <Route path="invoicecategory" element ={<InvoiceCategory/>}/>
      <Route path="viewcertificateexperiencedata" element ={<ViewCertificateExperienceData/>}/>
      <Route path="viewcertificatentern" element ={<ViewCertificateIntern/>}/>
      <Route path="viewinterndata" element ={<ViewInternData/>}/>
      <Route path="viewemployeedata" element ={<ViewEmployeData/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
    <Toaster position="top-center" />
  </div>
);
