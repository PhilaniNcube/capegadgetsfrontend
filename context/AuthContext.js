import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { API_URL } from '../config/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Philani' });
  const [error, setError] = useState(null);

  // Register User
  const register = async (user) => {
    console.log(user);
  };

  // Login User
  const login = async ({ email: identifier, password }) => {
    console.log({ identifier, password });
  };

  // LogoutUser
  const logout = async () => {
    console.log('Log Out');
  };

  // Check User Is Logged In
  const checkUserLoggedIn = async (user) => {
    console.log('Check');
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
