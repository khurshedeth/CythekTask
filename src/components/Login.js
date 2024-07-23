import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    document.cookie = "loggedIn=true; max-age=3600; path=/";
    navigate('/dashboard');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <button onClick={handleLogin} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Login</button>
    </div>
  );
}

export default Login;
