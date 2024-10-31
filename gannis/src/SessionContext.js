import React, { createContext, useContext, useState } from 'react';

const SessionContext = createContext();

export const useSession = () => {
  return useContext(SessionContext);
};

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  const login = (user) => {
    setSession(user);
    sessionStorage.setItem('user', JSON.stringify(user)); // Optional: also store in sessionStorage
  };

  const logout = () => {
    setSession(null);
    sessionStorage.removeItem('user'); // Optional: also remove from sessionStorage
  };

  return (
    <SessionContext.Provider value={{ session, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};