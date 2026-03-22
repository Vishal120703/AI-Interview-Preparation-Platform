import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  // Step control
  const [step, setStep] = useState("signup");

  // Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // OTP state
  const [otp, setOtp] = useState("");

  // Handle input change
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle signup
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        formData
      );

      console.log(res.data);

      // store email temporarily
      sessionStorage.setItem("otpEmail", formData.email);

      // switch UI to OTP
      setStep("otp");

    } catch (err) {
      alert(err.response?.data?.msg || "Error");
    }
  };

  // Handle OTP verify
  const handleVerifyOtp = async () => {
    const email = sessionStorage.getItem("otpEmail");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/verify-otp",
        {
          email,
          otp,
        }
      );

      console.log(res.data);

      // remove temp email
      sessionStorage.removeItem("otpEmail");

      alert("Signup Successful");

      // redirect to login/dashboard
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.msg || "Invalid OTP");
    }
  };

  return (
    <div className="signup-container">

  <div className="signup-box">

    {step === "signup" && (
      <form onSubmit={handleOnSubmit}>
        <h2>Signup</h2>

        <input type="text" name="name" placeholder="Name" onChange={handleOnChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleOnChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleOnChange} required />

        <button type="submit">Signup</button>
      </form>
    )}

    {step === "otp" && (
      <div className="otp-box">
        <h2>Verify OTP</h2>

        <p>
          OTP sent to: <b>{sessionStorage.getItem("otpEmail")}</b>
        </p>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button onClick={handleVerifyOtp}>Verify OTP</button>
      </div>
    )}

  </div>

</div>
  );
};

export default Signup;