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

const CertificateDataForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    dob: "",
    aadharNumber: "",
    photo: null,
    photoUrl: "",
    selectedOption: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { photo, ...formDataWithoutPhoto } = formData;

      let photoUrl = ""; // Define photoUrl variable

      if (photo) {
        const storageRef = ref(
          getStorage(),
          `CertificateDataForm/${formData.username}/${photo.name}`
        );
        const uploadResult = await uploadBytes(storageRef, photo);
        photoUrl = await getDownloadURL(uploadResult.ref);
      }

      // Add a new document with the form data except the photo
      // and include the photoUrl if the photo was uploaded
      const docRef = await addDoc(collection(fireDb, "CertificateDataForm"), {
        ...formDataWithoutPhoto,
        photoUrl, // Include the photoUrl
      });

      // Clear the photo and photoUrl from formData after storing the URL
      setFormData((prevFormData) => ({
        ...prevFormData,
        photo: null,
        photoUrl: photoUrl, // Set photoUrl to empty string
      }));

      toast.success("Certificate data submitted successfully!");
      navigate("/viewCertificatedata");
    } catch (error) {
      console.error("Error submitting certificate data:", error);
      toast.error("Failed to submit certificate data. Please try again.");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const storageRef = ref(getStorage());
    const photoRef = ref(storageRef, `${formData.username}/${file.name}`);
    await uploadBytes(photoRef, file);
    const photoUrl = await getDownloadURL(photoRef);
    setFormData((prevState) => ({
      ...prevState,
      photo: file,
      photoUrl: photoUrl,
    }));
  };

  const handleDropdownChange = (e) => {
    const selectedOption = e.target.value;
    setFormData({
      ...formData,
      selectedOption: selectedOption,
    });
  };

  return (
    <>
      <div className="flex container bg-[rgb(181,181,181)] h-screen">
        <Navebar />
        <div className="grid grid-cols-2 gap-8 m-auto container w-[65%] bg-white rounded-xl git">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h1 className="text-center font-serif font-bold text-4xl">
              Certificate Data
            </h1>
            <form onSubmit={handleSubmit}>
              <div></div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name of Candidate
                </label>
                <div className="mt-2">
                  <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Full Name"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date Issued
                </label>
                <div className="mt-2">
                  <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      autoComplete="bday"
                      className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="DD-MM-YYYY"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category of Certificate
                </label>
                <div className="mt-2">
                  <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="categoryofCertificate"
                      id="categoryofCertificate"
                      autoComplete="tel"
                      className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Category of Certificate "
                      value={formData.categoryofCertificate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="position"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Position/Designation
                </label>
                <div className="mt-2">
                  <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="position"
                      id="position"
                      autoComplete="position"
                      className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Position/Designation"
                      value={formData.position}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="sm:col-span-4">
                    {/* Other form fields */}
                    <div className="mb-4">
                      <label
                        htmlFor="dropdown"
                        className="block mb-2 text-lg font-bold text-gray-800"
                      >
                        Document Type
                      </label>
                      <select
                        id="dropdown"
                        value={formData.selectedOption}
                        onChange={handleDropdownChange}
                        className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      >
                        <option value="Adhar card">Adhar card</option>
                        <option value="PAN card">PAN card</option>
                      </select>
                    </div>

                    {formData.selectedOption === "Adhar card" && (
                      <div className="mb-4">
                        <label
                          htmlFor="aadharNumber"
                          className="block mb-2 text-lg font-bold text-gray-800"
                        >
                          Aadhar Card Number
                        </label>
                        <input
                          type="text"
                          id="aadharNumber"
                          name="aadharNumber"
                          value={formData.aadharNumber}
                          onChange={handleChange}
                          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                          placeholder="Enter Aadhar Card Number"
                        />
                      </div>
                    )}
                    {formData.selectedOption === "PAN card" && (
                      <div className="mb-4">
                        <label
                          htmlFor="PanNumber"
                          className="block mb-2 text-lg font-bold text-gray-800"
                        >
                          PAN Number
                        </label>
                        <input
                          type="text"
                          id="PanNumber"
                          name="PanNumber"
                          value={formData.PanNumber}
                          onChange={handleChange}
                          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                          placeholder="Enter PAN Card Number"
                        />
                      </div>
                    )}
                  </div>

                  {/* File upload input */}
                  <div className="mb-4">
                    <label
                      htmlFor="file"
                      className="block mb-2 text-lg font-bold text-gray-800"
                    >
                      Upload Certificate
                    </label>
                    <input
                      type="file"
                      id="file"
                      onChange={handleImageUpload}
                      className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                    />
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
        </div>
      </div>
    </>
  );
};

export default CertificateDataForm;
