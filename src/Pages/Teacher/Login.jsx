import React, { useState } from 'react';
import axios from 'axios';

function LoginPageTeacher() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
// לבדוק איך מוציאים נתונים להשתמש בסיפרייה axios
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('An error occurred');
    }
  };

  return (
    <div className="login-container">
      <h1>התחברות</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>:תעודת זהות</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label>:סיסמא</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">התחבר</button>
        {message && <p id="message">{message}</p>}
      </form>
    </div>
  );
}

export default LoginPageTeacher;
