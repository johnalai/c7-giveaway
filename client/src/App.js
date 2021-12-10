import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Admin from "./pages/Admin";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import CreateUserPage from "./pages/CreateUserPage";
import ProviderListPage from "./pages/ProviderListPage";
import UserEditPage from "./pages/EditPage";
// import ProviderEditPage from "./pages/ProviderEditPage";
// import ProviderDetailPage from "./pages/ProviderDetailPage";
// import VolunteerEditPage from "./pages/VolunteerEditPage";
import UserDetailPage from "./pages/UserDetailPage";


import "./App.css";





function App() {
 const[currentUser,setCurrentUser]=useState("admin")
 //this is a different user than provider//volunteer, this will be the current user ID after login

  return (
    <div className="App">





      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/provider-list">Provider List</Link>
        <Link to="/admin"> Admin</Link>
        <Link to="/login"> Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/provider-list" element={<ProviderListPage />} />
        <Route path="/register" element={<Register />} />
        <Route path = "/login" element ={<LoginPage />}/>
        <Route path="/user/:id" element={<UserDetailPage user={currentUser}/>}/>
      
        <Route path="/user/:id/edit" element={<UserEditPage />} />
        <Route path="/register/provider" element={<CreateUserPage />} />
        <Route path="/register/volunteer" element={<CreateUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
