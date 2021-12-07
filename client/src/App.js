import {useState} from "react"
import { Routes, Route, Link } from "react-router-dom";

import ProviderListPage from './pages/ProviderListPage';
import CreateProviderPage from './pages/CreateProviderPage';
import ProviderDetailPage from './pages/ProviderDetailPage';

import './App.css';
import ProviderEditPage from "./pages/ProviderEditPage";
import LandingPage from "./pages/LandingPage";
import Admin from "./pages/Admin";
import Register from "./pages/Register"


function App() {
  const [user, setUser] = useState("admin");

  return (
    <div className="App">
      <nav className = "nav">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/provider-list">Provider List</Link>
        <Link to="/admin"> Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/provider-list" element={ <ProviderListPage />} />
        <Route path="/register" element={ <Register /> } />
        <Route path="/provider/:id" element={ <ProviderDetailPage user={user}/> } />
        <Route path="/provider/:id/edit" element={ <ProviderEditPage /> } />
        <Route path="/provider/:id/edit" element={ <ProviderEditPage /> } />
        <Route path="/register/provider" element={ <CreateProviderPage /> } />
      </Routes>         
    </div>
  );
}

export default App;
