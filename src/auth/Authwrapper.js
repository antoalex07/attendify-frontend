import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

const AuthWrapper = () => {

    const [user, setUser] = useState({name: "", isAuthenticated: false});

    const login = (userName, password) => {
        return new Promise((resolve, reject) => {
            if(password === "password"){
              setUser({name: userName, isAuthenticated: true});
              resolve("success");
            } else {
              reject("User name or password is incorrect, Please try again");
            }
        })
    }

    const logout = () => {
      setUser({...user, isAuthenticated: false});
    }

  return (
    <div>
      <AuthContext.Provider value={{user, login, logout}}>
        <>
        </>
      </AuthContext.Provider>
    </div>
  )
}

export default AuthWrapper