import React, { useEffect, useState } from "react";
import Navebar from "../Components/Navebar";
import { collection, getDocs } from "firebase/firestore";
import { fireDb } from "../Firebase/FirebaseConfig";

const ViewEmployeData = () => {
  const [formData, setFormData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(fireDb, "EmployeeDataForm")
        );
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        const filteredData = statusFilter === "All" ? data : data.filter(entry => entry.status === statusFilter);
        setFormData(filteredData);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchData();
  }, [statusFilter]);

  return (
    <>
      <div className="flex items-center justify-center bg-[rgb(181,181,181)] h-screen w-screen">
        <Navebar />
        <div className="m-auto container max-w-[1020px] bg-white rounded-xl git overflow-hidden px-5">
          <h1 className="text-center font-serif font-bold text-4xl">
            Employee Data
          </h1>

          {/* Dropdown for filtering */}
          <div className="flex justify-end mb-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            >
              <option value="All">All</option>
              <option value="employee">Employee</option>
              <option value="intern">Intern</option>
            </select>
          </div>

          {/* Table Section */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-xl py-7 mt-8 shadow-md flex-grow overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Photo
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      DOB
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Contact Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Document Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Document Number
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-200 divide-y divide-gray-200">
                  {formData.map((entry, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-10 w-10 overflow-hidden rounded-full">
                          <a
                            href={entry.photoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <img
                              src={entry.photoUrl}
                              alt="Student"
                              className="h-full w-full object-cover"
                            />
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {entry.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {entry.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {entry.dob}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {entry.contact}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {entry.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {entry.identificationType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {entry.identificationNumber}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewEmployeData;
