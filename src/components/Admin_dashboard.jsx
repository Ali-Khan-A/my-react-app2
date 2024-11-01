//import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import './Register.css'

const Admin_dashboard = () => {
  const navigate = useNavigate();

  const handleClickMainMenu = () => {
    navigate('/')
  }

  return (
    <div className='admin-dashboard'>
    <h1 className='admin-h2'>Administrator Dashboard</h1>
    <div className="admin-container">
      <div className="admin-box">
        <h2 className='heading-company'>Cosonas</h2>
        <p className='staff-info'>Owner: Mr Nasir Rashid</p>
        <p className='staff-info'>Type: IT</p>
        <p className='staff-info'>About: its a computer company</p>
        <p className='staff-info'>Location: Somewhere</p>
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </div>
      <div className="admin-box">
        <h2 className='heading-company'>Google</h2>
        <p className='staff-info'>Owner: Mr Isa Javad</p>
        <p className='staff-info'>Type: IT</p>
        <p className='staff-info'>About: its a special company</p>
        <p className='staff-info'>Location: Somewhere</p>
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </div>
      <div className="admin-box">
        <h2 className='heading-company'>Amazon</h2>
        <p className='staff-info'>Owner: Ms Syed Ali</p>
        <p className='staff-info'>Type: Multinational technology Company</p>
        <p className='staff-info'>About: its a company</p>
        <p className='staff-info'>Location: Amazon Rainforest</p>
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </div>
    </div>
    <button onClick={handleClickMainMenu} className='btn-main-menu'>Main Menu</button>
    </div>
  )
}

export default Admin_dashboard