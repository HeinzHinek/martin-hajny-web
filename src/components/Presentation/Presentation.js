import React, { Component } from 'react';
import ReactResizeDetector from 'react-resize-detector';

import './Presentation.css';
import HouseImg from '../../static/house_1.jpg';
import HouseImg2 from '../../static/house_1_0.jpg';


class Presentation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      changed: false,
      width: '0',
      height: '0',
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.change = this.change.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
  }

  updateWindowDimensions() {
    if (this.mainImage === undefined) return;
    const height = this.mainImage.clientHeight;
    const width = this.mainImage.clientWidth;
    this.setState({ width, height });
  }

  change() {
    const { changed } = this.state;
    this.setState({ changed: !changed });
    this.updateWindowDimensions();
  }

  render() {
    /* 485,245 532,145 914,199 914,428 845,436 506,428 505,342 */
    const ratios = [
      [0.384, 0.32798],
      [0.42122, 0.1941],
      [0.72367, 0.2664],
      [0.72367, 0.57296],
      [0.669, 0.58367],
      [0.40063, 0.57296],
      [0.39984, 0.457831],
    ];

    const { width, height } = this.state;
    const pointStr = ratios.map((item) => { return `${width * item[0]},${height * item[1]}`; }).join(' ');

    return (
      <div className="Presentation">
        <ReactResizeDetector handleWidth handleHeight onResize={this.updateWindowDimensions} />

        <img
          // eslint-disable-next-line
          ref={node => this.mainImage = node}
          onLoad={this.updateWindowDimensions}
          className="Presentation-img"
          src={this.state.changed ? HouseImg2 : HouseImg}
          alt=""
        />

        <div className="testArea noselect">
          <svg width={width} height={height}>
            {<polygon points={pointStr} onClick={this.change} />}
          </svg>
        </div>
      </div>
    );
  }
}

export default Presentation;
