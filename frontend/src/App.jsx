import "./App.css";
import Profile from "./pages/Profile";
import ProfileInfo from "./pages/Profile/ProfileInfo";
import ProfileSettings from "./pages/Profile/ProfileSettings";
import ProfileLogout from "./pages/Profile/ProfileLogout";
import ProfileDashboard from "./pages/profile/ProfileDashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile/>}>
        <Route path="dashboard" element={<ProfileDashboard />}/>
        <Route path="info" element={<ProfileInfo />}/>
        <Route path="settings" element={<ProfileSettings />}/>
        <Route path="logout" element={<ProfileLogout />}/>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
