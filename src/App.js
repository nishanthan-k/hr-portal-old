import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import ProjectDetails from './components/ProjectDetails/ProjectDetails.jsx';
import Account from './pages/Account/Account';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Projects from "./pages/Projects/Projects.jsx";
import Layout from './Layout.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Layout><Dashboard /></Layout>} />

          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/account" element={<Layout><Account /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/projects/details" element={<Layout><ProjectDetails /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
