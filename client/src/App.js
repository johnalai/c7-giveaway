import { Routes, Route, Link } from "react-router-dom";

import ProviderListPage from './pages/ProviderListPage';
import CreateProviderPage from './pages/CreateProviderPage';
import ProviderDetailPage from './pages/ProviderDetailPage';

import './App.css';
import ProviderEditPage from "./pages/ProviderEditPage";


function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
      </nav>
      <Routes>
        <Route path="/" element={ <ProviderListPage />} />
        <Route path="/new" element={ <CreateProviderPage /> } />
        <Route path="/provider/:id" element={ <ProviderDetailPage /> } />
        <Route path="/provider/:id/edit" element={ <ProviderEditPage /> } />
      </Routes>         
    </div>
  );
}

export default App;
