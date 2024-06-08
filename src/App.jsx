// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/style.css';
import Login from "./pages/Login_Web";
import Register from "./pages/Register_Web";
import ForgotPass from "./pages/ForgotPass_Web";
import ResetPass from "./pages/ResetPass_Web";
import Role from "./pages/Role_Web";
// import Dashboard from "./pages/Dashboard";
// import History from "./pages/History";
// import Home from "./pages/Home";
// import Ongoing from "./pages/Ongoing";
// import Upcoming from "./pages/Upcoming";
// import ForgotPassPhone from "./ForgotPass_phone_Web";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/resetpass" element={<ResetPass />} />
{/*         <Route path="/dashboard" element={<Dashboard />} /> */}
{/*         <Route path="/history" element={<History />} /> */}
{/*         <Route path="/ongoing" element={<Ongoing />} /> */}
{/*         <Route path="/upcoming" element={<Upcoming />} /> */}
      </Routes>
    </Router>
  );
}

export default App
