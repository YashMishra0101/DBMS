import React from "react";
import Navebar from "../../Components/Navebar";
import { Link } from 'react-router-dom';

function CertificateData() {
  return (
    <>
      <div className="flex container bg-[rgb(181,181,181)] h-screen">
        <Navebar />
        <div className="m-auto justify-center container h-[600px] w-[1000px] bg-white rounded-xl git ">
          <h1 className="text-center font-serif font-bold text-4xl">
            Certificate Data
          </h1>
          <div className="flex justify-center items-center my-10 py-20 space-x-20"> {/* Adjusted space-x */}
            <Link to="/viewcertificateexperiencedata" className="flex flex-col items-center justify-center mx-2"> {/* Added mx-2 */}
              <div className="bg-black text-white h-30 w-60 rounded-lg p-4 flex items-center justify-center hover:bg-[#FD7401]">
                <div className="text-4xl">Experience Certificate</div>
              </div>
            </Link>
            <div className="border-l border-orange-600 h-80 border-solid border-8 mx-4"></div>
            <Link to="/viewcertificatentern" className="flex flex-col items-center justify-center mx-2"> {/* Added mx-2 */}
              <div className="bg-black text-white h-30 w-60 rounded-lg p-4 flex items-center justify-center hover:bg-[#FD7401]">
                <div className="text-4xl">Internship Certificate</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificateData;
