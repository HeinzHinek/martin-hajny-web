import React from 'react';
import PropTypes from 'prop-types';

import './Menu.css';
import texts from '../../static/texts.json';

const MenuItem = ({ name, locale, clickHandler }) => {
  const handleClick = () => {
    clickHandler(name);
  };

  return (
    <div className="MenuItem noselect">
      <span
        aria-hidden
        className="MenuItem-link"
        onClick={handleClick}
      >
        { texts[name].menuItem[locale] || texts[name].menuItem.en }
      </span>
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  locale: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

MenuItem.defaultProps = {
  locale: 'en',
};

export default MenuItem;
