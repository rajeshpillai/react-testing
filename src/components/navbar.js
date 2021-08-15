import React from 'react';

import {
  Link
} from 'react-router-dom';

export default function NavBar() {
  return (
    <ul className="navbar">
      <li><Link to="/usestate">useState</Link></li>
    </ul>
  );
}