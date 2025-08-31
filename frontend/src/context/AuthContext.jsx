// AuthContext: provide us a box (pipe)
// AuthProvider: let us to add things to box (water tank)

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const checkSession = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/user/me", {
        withCredentials: true,
      });
      console.log(res.data.user);
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (form) => {
    const res = await axios.post("http://localhost:8000/api/auth/login", form, {
      withCredentials: true, // withCredentials will let us accept cookies
    });
    setUser(res.data.user);
  };

  const logout = () => {};

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout,loading }}>
      {children}
    </AuthContext.Provider>
  );
};
