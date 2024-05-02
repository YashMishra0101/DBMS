import React, { useState } from "react";
import bg from "../assets/Signupcover.png";
import pic from "../assets/girl.png";
import mail from "../assets/mailicon.png";
import pass from "../assets/password.png";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDb } from "../Firebase/FirebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userUID = userCredential.user.uid;
      await setDoc(doc(fireDb, "users", userUID), {
        username,
        email,
      });
      toast.success("Signup Successful");
      navigate("/studentData");
    } catch (error) {
      console.log(`Signup failed: ${error.message}`);
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <div className="h-screen relative" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
      <div className="absolute h-[34rem] w-[59rem]  right-20 top-[10rem]  border-8 border-blue-900 shadow-lg shadow-blue-500/50 rounded-3xl grid grid-cols-2 ">
        <div className="bg-white h-full rounded-xl flex flex-col justify-center items-center">
          <ReactTyped
            className="text-xl uppercase text-slate-600 text-center font-extrabold"
            strings={["Signup into your account"]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
          <form onSubmit={handleSignup} className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="text-slate-600 font-extrabold text-base"
              >
                Username
              </label>
              <div className="flex ">
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-200 w-72 h-10 rounded-sm placeholder-slate-400 pl-4"
                />
                <img src={mail} alt="" className="size-10" />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-slate-600 font-extrabold text-base"
              >
                Email address
              </label>
              <div className="flex ">
                <input
                  type="email"
                  id="email"
                  placeholder="xyz@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-200 w-72 h-10 rounded-sm placeholder-slate-400 pl-4"
                />
                <img src={mail} alt="" className="size-10" />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-slate-600 font-extrabold text-base"
              >
                Password
              </label>
              <div className="flex ">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-200 w-72 h-10 rounded-sm placeholder-slate-400 pl-4"
                />
                <img src={pass} alt="" className="size-10" />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="text-slate-600 font-extrabold text-base"
              >
                Confirm Password
              </label>
              <div className="flex ">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-gray-200 w-72 h-10 rounded-sm placeholder-slate-400 pl-4"
                />
                <img src={pass} alt="" className="size-10" />
              </div>
            </div>

            <div className="flex justify-center ">
              <button
                type="submit"
                className="bg-orange-500 w-48 h-8 text-white font-bold rounded-md hover:bg-orange-600"
              >
                Signup
              </button>
            </div>
          </form>

          <div className="flex mt-2">
            <div className="h-[2px] w-10 bg-gray-200 mt-[6px]"></div>
            <h6 className="text-[10px] px-2 text-green-600">OR</h6>
            <div className="h-[2px] w-10 bg-gray-200 mt-[6px]"></div>
          </div>

          <div className="flex justify-center">
            <NavLink to="/">
              <button className="border border-green-600 w-64 h-8 text-green-600 font-bold rounded-md mt-4 hover:bg-slate-100">
                Already have an account?
              </button>
            </NavLink>
          </div>
        </div>

        <div className="bg-gray-200 h-full rounded-xl">
          <img src={pic} alt="" className="mt-12" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
