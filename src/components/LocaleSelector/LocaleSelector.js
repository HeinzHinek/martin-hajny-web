import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeLocale } from './actions';
import './LocaleSelector.css';

class LocaleSelector extends React.Component {
  render() {
    const { onChangeLocale } = this.props;
    return (
      <div className="LocaleSelector">
        <span
          aria-hidden
          className="LocaleSelector-span"
          onClick={() => { onChangeLocale('en'); }}
        >en
        </span>
        <span>&nbsp;/&nbsp;</span>
        <span
          aria-hidden
          className="LocaleSelector-span"
          onClick={() => { onChangeLocale('cs'); }}
        >cs
        </span>
      </div>
    );
  }
}

LocaleSelector.propTypes = {
  onChangeLocale: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  locale: state.localeSelector.locale,
});

export default connect(mapStateToProps, { onChangeLocale: changeLocale })(LocaleSelector);
