import "./App.css";
import Profile from "./pages/Profile";
import ProfileInfo from "./pages/Profile/ProfileInfo";
import ProfileSettings from "./pages/Profile/ProfileSettings";
import ProfileLogout from "./pages/Profile/ProfileLogout";
import ProfileDashboard from "./pages/profile/ProfileDashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // water tank needs to be one and should be at location through where each room(component) can get benefit

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />}>
            <Route path="dashboard" element={<ProfileDashboard />} />
            <Route path="info" element={<ProfileInfo />} />
            <Route path="settings" element={<ProfileSettings />} />
            <Route path="logout" element={<ProfileLogout />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
