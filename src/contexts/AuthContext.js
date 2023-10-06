import React, { useState, useContext, createContext} from 'react'

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

const AuthProvider = (props) => {
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
 
}

export default AuthProvider;
