import React, { useState } from 'react';

function SignUp() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [childId, setChildId] = useState(""); // New state for child ID
  const [parentId, setParentId] = useState(""); // New state for parent ID

  const collectData = async (e) => {
    e.preventDefault();

    try {
      let result = await fetch('http://localhost:3001/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, lastname, password, childId, parentId })
      });

      if (result.ok) {
        const data = await result.json();
        console.log('Server response:', data);
        localStorage.setItem("Student", JSON.stringify(data));
      } else {
        console.error('Server response failed:', result.status);
      }
    } catch (error) {
      console.error("Failed to fetch", error);
    }
  }

  return (
    <div className='signup-container'>
      <form onSubmit={collectData}>
        <h2>הרשמה</h2>
        <div className='mb-3'>
          <label className='form-label'>שם</label>
          <input type='text' className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='form-label'>שם משפחה</label>
          <input type='text' className='form-control'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='form-label'>סיסמא</label>
          <input type='password' className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='form-label'>תעודת זהות של הילד</label>
          <input type='text' className='form-control'
            value={childId}
            onChange={(e) => setChildId(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='form-label'>תעודת זהות של ההורה</label>
          <input type='text' className='form-control'
            value={parentId}
            onChange={(e) => setParentId(e.target.value)} />
        </div>
        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
