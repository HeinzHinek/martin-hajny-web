import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectItem } from './actions';
import './Menu.css';
import texts from '../../static/texts.json';

class MenuItem extends React.Component {
  render() {
    const {
      name, locale, selectedItem, onClick,
    } = this.props;
    const className = `MenuItem-link ${selectedItem === name ? 'MenuItem-selected' : null}`;
    return (
      <div className="MenuItem noselect">
        <span
          aria-hidden
          className={className}
          onClick={() => onClick(name)}
        >
          { texts[name].menuItem[locale] || texts[name].menuItem.en }
        </span>
      </div>
    );
  }
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  locale: PropTypes.string,
  selectedItem: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

MenuItem.defaultProps = {
  locale: 'en',
  selectedItem: '',
};

const mapStateToProps = state => ({
  locale: state.localeSelector.locale,
  selectedItem: state.menu.selectedItem,
});

export default connect(mapStateToProps, { onClick: selectItem })(MenuItem);
