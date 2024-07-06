import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userType, setUserType] = useState("");
  const Navigate = useNavigate();

  const handleUserType = (type) => {
    setUserType(type);
    if (type === "student") {
      Navigate("/signup/signup1");
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <button onClick={() => handleUserType("teacher")}>Teacher</button>
      <button onClick={() => handleUserType("student")}>Student</button>
      <button onClick={() => handleUserType("manager")}>Manager</button>
      <p>Selected User Type: {userType}</p>
    </div>
  );
};

export default SignUp;
