import React, {useState} from 'react'
import { useAuth } from '../contexts/AuthContext'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Handle login logic here
      console.log('Username:', username);
      console.log('Password:', password);
    };

    // const  {
    //     authUser,
    //     setAuthUser,
    //     isLoggedIn,
    //     setIsLoggedIn
    // } = useAuth();

    // const logIn = (e) => {
    //     e.preventDefault()
    //     setIsLoggedIn(true)
    //     setAuthUser({
    //         Name: 'Loang khan',
    //         password: 12345
    //     })
    // }

    // const logOut = (e) => {
    //     e.preventDefault()
    //     setIsLoggedIn(false)
    //     setAuthUser(null)
    // }

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
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

export default Login