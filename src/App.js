import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import 'semantic-ui-css/semantic.min.css';
import SideBar from './components/SideBar/SideBar';
import Account from './pages/Account/Account';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <SideBar /> */}
    </div>
  );
}

export default App;
