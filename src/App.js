import './App.css';
import Login from './components/Login.jsx';
import PersonalDetails from './components/PersonalDetails.jsx';
import BusinessDetails from './components/BusinessDetails.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import Admin_dashboard from './components/Admin_dashboard.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/Admin_dashboard' element={<Admin_dashboard/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/PersonalDetails' element={<PersonalDetails/>}></Route>
        <Route path='/BusinessDetails' element={<BusinessDetails/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
       
      </Routes>
    </Router>
    
  )
}

export default App;



