import React, { useState } from "react";
import Navebar from "../Components/Navebar";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDb } from "../Firebase/FirebaseConfig";
import { useNavigate } from "react-router";

const DigitialMarketingForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clientName: "",
    contactNumber: "",
    email: "",
    aadharNumber: "",
    totalPayments: 0,
    paymentPaid: 0,
    startDate: "",
    endDate: "",
    businessname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "endDate" && value === "present") {
      setFormData({
        ...formData,
        startDate: "", // Resetting startDate when "Present" is selected for endDate
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(
        collection(fireDb, "DigitalMarketingFormData"),
        formData
      );

      const remainingPayment = formData.totalPayments - formData.paymentPaid;

      await updateDoc(doc(fireDb, "DigitalMarketingFormData", docRef.id), {
        remainingPayment: remainingPayment,
      });

      setFormData({
        clientName: "",
        contactNumber: "",
        email: "",
        aadharNumber: "",
        totalPayments: 0,
        paymentPaid: 0,
        startDate: "",
        endDate: "",
        businessname: "",
      });

      toast.success("Form data submitted successfully!");
      navigate("/viewdigitalmarketing");
    } catch (error) {
      console.error("Error submitting form data:", error);

      toast.error("Failed to submit form data. Please try again.");
    }
  };

  const calculateRemainingPayment = () => {
    const remaining = formData.totalPayments - formData.paymentPaid;
    return remaining >= 0 ? remaining : 0;
  };

  return (
    <>
      <div className="flex container bg-[rgb(181,181,181)] h-screen">
        <Navebar />
        <div className="grid grid-cols-2 gap-8 m-auto container w-[65%] bg-white rounded-xl git">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h1 className="text-center font-serif font-bold text-4xl">
              Digital Marketing Data
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name of Client
                    </label>
                    <div className="mt-2">
                      <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="clientName"
                          id="clientName"
                          autoComplete="clientName"
                          className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Full Name"
                          value={formData.clientName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="businessname"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Business Name
                    </label>
                    <div className="mt-2">
                      <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="businessname"
                          id="businessname"
                          autoComplete="businessname"
                          value={formData.businessname}
                          className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Name of Business"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="contact"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Contact Number
                    </label>
                    <div className="mt-2">
                      <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="number"
                          name="contact"
                          id="contact"
                          autoComplete="tel"
                          className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Contact Number"
                          value={formData.contact}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* email */}
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email Address
                    </label>
                    <div className="mt-2">
                      <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* remarks */}
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="remarks"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Remarks
                    </label>
                    <div className="mt-2">
                      <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="remarks"
                          id="remarks"
                          autoComplete="remarks"
                          className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Add a remark"
                          value={formData.username}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="block w-full py-3 mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h1 className="text-center font-serif font-bold text-4xl">
              Payment
            </h1>
            <div className="space-y-12 py-10">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="totalPayments"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Total Payments
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="totalPayments"
                      id="totalPayments"
                      className="block w-full border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg"
                      placeholder="Total Payments"
                      value={formData.totalPayments}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="paymentPaid"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Payment Paid
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="paymentPaid"
                      id="paymentPaid"
                      className="block w-full border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg"
                      placeholder="Payment Paid"
                      value={formData.paymentPaid}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="remainingPayment"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Remaining Payment
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="remainingPayment"
                      id="remainingPayment"
                      className="block w-full border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-lg"
                      placeholder="Remaining Payment"
                      value={calculateRemainingPayment()}
                      readOnly
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="doc"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Start Date
                  </label>
                  <div className="mt-2">
                    <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="date"
                        name="startDate"
                        id="tartDat"
                        autoComplete="b"
                        className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="DD-MM-YYYY"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="doc"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    End date
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="present"
                        name="startDateOption"
                        value="present"
                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        checked={formData.startDateOption === "present"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="present"
                        className="ml-2 block text-sm leading-5 text-gray-900"
                      >
                        Present
                      </label>
                    </div>
                    <div className="flex items-center mt-2">
                      <input
                        type="radio"
                        id="choose-date"
                        name="startDateOption"
                        value="choose-date"
                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        checked={formData.startDateOption === "choose-date"}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="choose-date"
                        className="ml-2 block text-sm leading-5 text-gray-900"
                      >
                        Choose Date
                      </label>
                      {formData.startDateOption === "choose-date" && (
                        <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            type="date"
                            name="endDate"
                            id="endDate"
                            autoComplete="bday"
                            className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="DD-MM-YYYY"
                            value={formData.endDate}
                            onChange={handleChange}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitialMarketingForm;
