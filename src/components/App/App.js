import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import Infobox from '../Infobox';
import Presentation from '../Presentation';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: this.props.locale,
      currentItem: null,
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(name) {
    this.setState({ currentItem: name });
  }

  handleLocaleClick(locale) {
    this.setState({ locale });
  }

  render() {
    const { currentItem, locale } = this.state;

    return (
      <div className="App">
        <Infobox item={currentItem} locale={locale} />
        <Presentation />
        <Menu menuClickHandler={this.handleMenuClick} locale={locale} />
        <div className="App-locale-div noselect">
          <span
            aria-hidden
            className="App-locale-span"
            onClick={() => { this.handleLocaleClick('en'); }}
          >en
          </span>
          <span>&nbsp;/&nbsp;</span>
          <span
            aria-hidden
            className="App-locale-span"
            onClick={() => { this.handleLocaleClick('cs'); }}
          >cs
          </span>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  locale: PropTypes.string,
};

App.defaultProps = {
  locale: 'en',
};

export default App;
