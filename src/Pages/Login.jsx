import React, { useState } from "react";
import bg from "../assets/Frame2.png";
import pic from "../assets/girl.png";
import mail from "../assets/mailicon.png";
import pass from "../assets/password.png";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import FaEyeSlash for hiding the password

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        value={value}
        onChange={onChange}
        className="bg-gray-200 w-full h-10 rounded-sm placeholder-slate-400 pl-5 pr-4"
      />
      <button
        type="button"
        className="absolute right-0 top-0 bottom-0 mt-auto mb-auto mr-0 flex items-center text-gray-400 hover:text-gray-600"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye className="mr-1" />}
        <img src={pass} alt="" className="ml-1 size-10" />
      </button>
      
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Login Successful");
      navigate("/studentData");
    } catch (error) {
      console.log(`Login failed :${error.message}`);
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="h-screen relative" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
      <div className="absolute h-[34rem] w-[59rem]  right-20 top-[10rem]  border-8 border-blue-900 shadow-lg shadow-blue-500/50 rounded-3xl grid grid-cols-2 ">
        <div className="bg-white h-full rounded-xl flex flex-col justify-center items-center">
          <ReactTyped
            className="text-xl uppercase text-slate-600 text-center font-extrabold"
            strings={["Login to your account"]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
          <form onSubmit={handleLogin} className="mt-4 flex flex-col gap-4">
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
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-200 w-72 h-10 rounded-sm placeholder-slate-400 pl-4"
                />{" "}
                <img src={mail} alt="" className="size-10" />
              </div>
            </div>

            <div className="flex flex-col relative">
              <label
                htmlFor="password"
                className="text-slate-600 font-extrabold text-base"
              >
                Password
              </label>
              <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
              
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-500 w-48 h-8 text-white font-bold rounded-md hover:bg-orange-600"
              >
                Login
              </button>
            </div>
          </form>

          <div className="flex justify-end  w-72 mt-2">
            <h4 className="text-green-600 font-bold underline decoration-slate-200 decoration-2 cursor-pointer">
              forgot password?
            </h4>
          </div>
          <div className="flex mt-2">
            <div className="h-[2px] w-10 bg-gray-200 mt-[6px]"></div>
            <h6 className="text-[10px] px-2 text-green-600">OR</h6>
            <div className="h-[2px] w-10 bg-gray-200 mt-[6px]"></div>
          </div>

          <div className="flex justify-center">
            <NavLink to="/signup">
              <button
                className="border border-green-600 w-48 h-8 text-green-600 font-bold rounded-md mt-4 hover:bg-slate-100"
              >
                Signup now
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

export default Login;
