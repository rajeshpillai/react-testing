import React from 'react';
import './navbar.css';

import {
  Link
} from 'react-router-dom';

export default function NavBar() {
  return (
    <ul className="navbar">
      <li><Link to="/usestate">useState</Link></li>
      <li><Link to="/list">List Items</Link></li>
      <li><Link to="/button-event">Button Event</Link></li>
    </ul>
  );
}