import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from './MenuItem';
import './Menu.css';

const Menu = ({ menuClickHandler, locale }) => {
  const handleMenuItemClick = (name) => {
    menuClickHandler(name);
  };

  return (
    <div className="Menu">
      <MenuItem name="home" locale={locale} clickHandler={handleMenuItemClick} />
      <MenuItem name="projects" locale={locale} clickHandler={handleMenuItemClick} />
      <MenuItem name="about" locale={locale} clickHandler={handleMenuItemClick} />
      <MenuItem name="contact" locale={locale} clickHandler={handleMenuItemClick} />
    </div>
  );
};

Menu.propTypes = {
  menuClickHandler: PropTypes.func.isRequired,
  locale: PropTypes.string,
};

Menu.defaultProps = {
  locale: 'en',
};

export default Menu;
