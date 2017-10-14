import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import texts from '../../static/texts.json';
import './Infobox.css';

class Infobox extends React.Component {
  render() {
    const { selectedItem, locale } = this.props;
    const getText = () => {
      if (texts[selectedItem] === undefined || texts[selectedItem].infobox === undefined) return null;
      if (texts[selectedItem].infobox[locale] === undefined) return texts[selectedItem].infobox.en;
      return texts[selectedItem].infobox[locale];
    };

    const text = getText();
    const content = text ? (
      <div className="Infobox">
        {text}
      </div>
    ) : <div />;

    return content;
  }
}

Infobox.propTypes = {
  selectedItem: PropTypes.string,
  locale: PropTypes.string,
};

Infobox.defaultProps = {
  selectedItem: '',
  locale: 'en',
};

const mapStateToProps = (state) => {
  const { locale } = state.localeSelector;
  const { selectedItem } = state.menu;
  return { locale, selectedItem };
};

export default connect(mapStateToProps)(Infobox);
