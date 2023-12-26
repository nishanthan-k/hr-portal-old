import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import ProjectDetails from './components/ProjectDetails/ProjectDetails.jsx';
import Account from './pages/Account/Account';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Projects from "./pages/Projects/Projects.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/details" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
      {/* <SideBar /> */}
    </div>
  );
}

export default App;
