import { useState } from 'react';

function useAuth() {
  // Simulating authentication state with useState
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Example login function
  const login = () => {
    setIsAuthenticated(true);
  };

  // Example logout function
  const logout = () => {
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}

export default useAuth;
