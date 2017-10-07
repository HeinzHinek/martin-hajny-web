import React, { Component } from 'react';
import './Presentation.css';
import HouseImg from '../../static/house_1_0.jpg';

class Presentation extends Component {
  render() {
    return (
      <div className="Presentation">
        <img src={HouseImg} className="Presentation-img" alt="" />
      </div>
    );
  }
}

export default Presentation;
