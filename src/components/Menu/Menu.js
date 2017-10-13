import React from 'react';

import MenuItem from './MenuItem';
import './Menu.css';

const Menu = () => (
  <div className="Menu">
    <MenuItem name="projects" />
    <MenuItem name="about" />
    <MenuItem name="contact" />
  </div>
);

export default Menu;
