import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Dashboard = () => {
// destructuring
    const  {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    } = useAuth();

    const logIn = (e) => {
        e.preventDefault()
        setIsLoggedIn(true)
        setAuthUser({
            Name: 'Loang khan'
        })
    }

    const logOut = (e) => {
        e.preventDefault()
        setIsLoggedIn(false)
        setAuthUser(null)
    }

  return (
    <>
        <span>User is Currently: {isLoggedIn ? 'Logged-In' : 'Logged Out'}.</span> <br />
        {isLoggedIn ? (<span>User name: {authUser.Name}</span>) : null}
        <br />
        {
            isLoggedIn ? <button onClick={(e) =>{logOut(e)}}>Log out</button> :
            <button onClick={(e) =>{logIn(e)}}>Log In</button>
        }
        
        
    </>
  )
}

export default Dashboard
