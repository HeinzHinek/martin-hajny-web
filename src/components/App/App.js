import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeLocale } from './actions';
import Menu from '../Menu';
import Infobox from '../Infobox';
import Presentation from '../Presentation';
import './App.css';

class App extends React.Component {
  render() {
    const { onChangeLocale } = this.props;

    return (
      <div className="App">
        <Presentation />
        <Menu />
        <Infobox />

        <div className="App-title">
          Martin Hajný
        </div>

        <div className="App-locale-div noselect">
          <span
            aria-hidden
            className="App-locale-span"
            onClick={() => { onChangeLocale('en'); }}
          >en
          </span>
          <span>&nbsp;/&nbsp;</span>
          <span
            aria-hidden
            className="App-locale-span"
            onClick={() => { onChangeLocale('cs'); }}
          >cs
          </span>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  onChangeLocale: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  locale: state.app.locale,
});

export default connect(mapStateToProps, { onChangeLocale: changeLocale })(App);
