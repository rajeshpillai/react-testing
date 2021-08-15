import React from 'react';

import {
  Link
} from 'react-router-dom';

export default function NavBar() {
  return (
    <ul className="navbar" style={{display:"flex", listStyleType:"none", justifyContent:"space-evenly" }}>
      <li><Link to="/usestate">useState</Link></li>
      <li><Link to="/list">List Items</Link></li>
      <li><Link to="/button-event">Button Event</Link></li>

    </ul>
  );
}