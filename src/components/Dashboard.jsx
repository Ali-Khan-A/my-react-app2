import React from 'react'
import "./Register.css";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate();
    const handleClickLogin = () => {
        navigate('/Login');
    }
    const handleClickRegister = () => {
        navigate('/Register');
    }
    const handleClickAdmin = () => {
      navigate('/Admin_dashboard');
  }


  return (
    <div className='dashboard-container'>
        <button onClick={handleClickLogin} className='dashboard-buttons'>Login</button>
        
        <button onClick={handleClickRegister} className='dashboard-buttons'>Register</button>

        <button onClick={handleClickAdmin} className='dashboard-buttons'>Admin Dashboard</button>

        
    </div>
  )
}

export default Dashboard
