import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CertificateData from "./Pages/CertificateData";
import DigitialMarketing from "./Pages/DigitialMarketing";
import EmployeeData from "./Pages/EmployeeData";
import InvoiceData from "./Pages/InvoiceData";
import StudentData from "./Pages/StudentData";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/CertificateData" element={<CertificateData/>}/>
      <Route path="/DigitialMarketing" element={<DigitialMarketing/>}/>
      <Route path="/EmployeeData" element={<EmployeeData/>}/>
      <Route path="/InvoiceData" element={<InvoiceData/>}/>
      <Route path="/StudentData" element={<StudentData/>}/>


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
