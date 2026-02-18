import { createContext, useContext, useState, useEffect } from 'react';
import authService from '../api/authService';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const data = await authService.login(email, password);
      const token = data.token;
      
      const user = { 
        email, 
        name: data.name || data.user?.name || 'User', 
        id: data.userId || data.user?.id || 'api-user-id',
        token 
      };

      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      if (token) {
        localStorage.setItem('authToken', token);
      }
      
      return user;
    } catch (error) {
      console.error("Login Failed:", error);
      const message = error.response?.data?.error || error.response?.data?.message || "Failed to login";
      throw new Error(message);
    }
  };

  const signup = async (email, password, name) => {
    try {
      const data = await authService.signup(name, email, password);

      const token = data.token;
      const user = { email, name, id: data.userId || 'api-user-id', token }; 
      
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      if (token) {
        localStorage.setItem('authToken', token);
      }
      return user;
    } catch (error) {
      console.error("Signup Request Failed:", error);
      const message = error.response?.data?.error || error.response?.data?.message || "Failed to create account";
      throw new Error(message);
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (token) {
        await authService.logout(token);
      }
    } catch (error) {
      console.error("Logout Failed:", error);
    } finally {
      setCurrentUser(null);
      localStorage.removeItem('currentUser');
      localStorage.removeItem('authToken');
      localStorage.removeItem('mockUser'); 
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser') || localStorage.getItem('mockUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
