import React from 'react';
import PropTypes from 'prop-types';

import texts from '../../static/texts.json';
import './Infobox.css';

class Infobox extends React.Component {
  render() {
    const getText = () => {
      const { item, locale } = this.props;
      if (texts[item] === undefined || texts[item].infobox === undefined) return null;
      if (texts[item].infobox[locale] === undefined) return texts[item].infobox.en;
      return texts[item].infobox[locale];
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
  item: PropTypes.string,
  locale: PropTypes.string,
};

Infobox.defaultProps = {
  item: '',
  locale: 'en',
};

export default Infobox;
