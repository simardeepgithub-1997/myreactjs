import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Login function using real API
  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });

      const data = response.data;
      const token = data.token;
      
      // Assuming API returns user object directly or within data
      // Adjust based on actual API response structure if needed
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
      // Check for 'error' field first (as per user request), then 'message', then fallback
      const message = error.response?.data?.error || error.response?.data?.message || "Failed to login";
      throw new Error(message);
    }
  };

  // Signup function using real API
  const signup = async (email, password, name) => {
    try {
      const response = await axios.post("http://localhost:3000/users/register", {
        name,
        email,
        password,
      });

      const data = response.data;

      // Assuming API returns user data or token
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
      // Axios stores the response in error.response
      const message = error.response?.data?.error || error.response?.data?.message || "Failed to create account";
      throw new Error(message);
    }
  };

  // Logout function using real API
  const logout = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (token) {
        await axios.post("http://localhost:3000/users/logout", {}, {
          headers: {
            Authorization: token
          }
        });
      }
    } catch (error) {
      console.error("Logout Failed:", error);
    } finally {
      setCurrentUser(null);
      localStorage.removeItem('currentUser');
      localStorage.removeItem('authToken');
      localStorage.removeItem('mockUser'); // Cleanup legacy key
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
