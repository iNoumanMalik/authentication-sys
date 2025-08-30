import { createContext, useState } from "react";

export const AuthContext = createContext(); // provide us a box (pipe)

export const AuthProvider = ({ children }) => {
  // let us to add things to box (water tank)
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
