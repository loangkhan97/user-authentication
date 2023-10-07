import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [data, setData] = useState({
    name: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    if (data.name === 'ali' && data.password === '123') {
      console.log('Logged in');
      // Redirect to "NextPage"
      navigate('/NextPage');
    } else {
      console.log('Wrong credentials');
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            placeholder="Enter your username"
            value={data.name}
          onChange={(e) => {
            setData({...data, [e.target.name]: e.target.value})
          }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            placeholder="Enter your password"
            value={data.password}
            onChange={(e) => {
              setData({...data, [e.target.name]: e.target.value})
            }}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  )
}
export default Login;
