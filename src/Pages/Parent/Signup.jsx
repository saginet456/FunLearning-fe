import React, { useState } from 'react';
import axios from 'axios';

function SignUpParent() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [ID, setID] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    password: "",
    ID: ""
  });

  const sendData = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3001/SignUpParent', userData);

      if (response.status === 200) {
        const data = response.data;
        console.log('Server response:', data);
        localStorage.setItem("User", JSON.stringify(data));
      } else {
        console.error('Server response failed:', response.status);
      }
    } catch (error) {
      console.error("Failed to fetch", error);
    }
  }

  function validateData({ name, lastname, password, ID }) {
    const errors = {};
  
    if (!name.trim()) {
      errors.name = "שם פרטי הוא שדה חובה";
    } else if (!/^[א-ת\s]*$/.test(name)) {
      errors.name = "שם פרטי יכול להכיל רק אותיות בעברית";
    }

    if (!lastname.trim()) {
      errors.lastname = "שם משפחה הוא שדה חובה";
    } else if (!/^[א-ת\s]*$/.test(lastname)) {
      errors.lastname = "שם משפחה יכול להכיל רק אותיות בעברית";
    }

    if (password.length < 8) {
      errors.password = "הסיסמה חייבת להיות לפחות 8 תווים";
    }

    if (!/^\d{9}$/.test(ID)) {
      errors.ID = "תעודת זהות חייבת להיות בדיוק 9 ספרות";
    }
  
    return errors;
  }

  const collectData = async (e) => {
    e.preventDefault();
    const userData1 = { name, lastname, password, ID };
    const validationErrors = validateData(userData1);
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    const userData = {
      userType: 'Parent',
      name,
      lastname,
      password,
      ID
    };

    await sendData(userData);
  };

  return (
    <div className='signup-container'>
      <form onSubmit={collectData}>
        <h2>הרשמה</h2>
        <div className='mb-3'>
          <label className='form-label'> :שם פרטי</label>
          <input
            type='text'
            className='form-control'
            value={name}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[א-ת\s]*$/.test(value)) {
                setName(value);
                setErrors({ ...errors, name: "" });
              } else {
                setErrors({ ...errors, name: "שם פרטי יכול להכיל רק אותיות בעברית" });
                setName(value);
              }
            }}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>:שם משפחה</label>
          <input
            type='text'
            className='form-control'
            value={lastname}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[א-ת\s]*$/.test(value)) {
                setLastname(value);
                setErrors({ ...errors, lastname: "" });
              } else {
                setErrors({ ...errors, lastname: "שם משפחה יכול להכיל רק אותיות בעברית" });
                setLastname(value);
              }
            }}
          />
          {errors.lastname && <div className="error-message">{errors.lastname}</div>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>:תעודת זהות</label>
          <input
            type='text'
            className='form-control'
            value={ID}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,9}$/.test(value)) {
                setID(value);
                setErrors({ ...errors, ID: "" });
              } else {
                setErrors({ ...errors, ID: "תעודת זהות חייבת להיות בדיוק 9 ספרות" });
              }
            }}
          />
          {errors.ID && <div className="error-message">{errors.ID}</div>}
        </div>
        <div className='mb-3'>
          <label className='form-label'>:סיסמא</label>
          <input
            type='password'
            className='form-control'
            value={password}
            onChange={(e) => {
              const value = e.target.value;
              setPassword(value);
              setErrors({ ...errors, password: value.length <= 8 ? "הסיסמה חייבת להיות לפחות 8 תווים" : "" });
            }}
          />
          {errors.password && <div className="error-message">{errors.password}</div>}
        </div>
        
        <button type='submit' className='btn'>הרשמה</button>
      </form>
    </div>
  );
}

export default SignUpParent;
