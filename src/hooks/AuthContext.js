import React from 'react'
import { createContext, useState } from 'react';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  function signIn() {
    setIsAuth(true);
  }

  function signOut() {
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}