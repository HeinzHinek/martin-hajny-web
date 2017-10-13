import React, { Component } from 'react';
import ReactResizeDetector from 'react-resize-detector';

import './Presentation.css';
import scenes from '../../static/scenes.json';


// FIXME extract this
const CURR_SCENE = 'scene1';

const loadSceneImages = () => {
  const imageMap = {};
  const partsCount = Object.keys(scenes[CURR_SCENE].parts).length;
  const combinationCount = partsCount ** 2;
  for (let idx = 0; idx < combinationCount; idx += 1) {
    // eslint-disable-next-line
    imageMap[idx] = require(`../../static/scenes/${CURR_SCENE}/state_${idx}.jpg`)
  }
  return imageMap;
};

class Presentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sceneState: 0,
      sceneImages: loadSceneImages(),
      width: '0',
      height: '0',
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.change = this.handleScenePartClick.bind(this);
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

  handleScenePartClick(partId) {
    const { sceneState } = this.state;

    // eslint-disable-next-line
    const newValue = parseInt(sceneState) ^ parseInt(partId);

    this.setState({ sceneState: newValue });
    this.updateWindowDimensions();
  }

  render() {
    const {
      width, height, sceneImages, sceneState,
    } = this.state;

    const sceneImage = sceneImages[sceneState];

    const { parts } = scenes[CURR_SCENE];
    const polygons = Object.keys(parts).map((key) => {
      const pointStr = parts[key].points.map((item) => { return `${width * item[0]},${height * item[1]}`; }).join(' ');
      return (
        <polygon
          key={`scenePart${key}`}
          points={pointStr}
          onClick={() => { this.handleScenePartClick(key); }}
        />
      );
    });

    return (
      <div className="Presentation">
        <ReactResizeDetector handleWidth handleHeight onResize={this.updateWindowDimensions} />

        <img
          // eslint-disable-next-line
          ref={node => this.mainImage = node}
          onLoad={this.updateWindowDimensions}
          className="Presentation-img"
          src={sceneImage}
          alt=""
        />

        <div className="Presentation-scene-parts-div noselect">
          <svg width={width} height={height}>
            {polygons}
          </svg>
        </div>
      </div>
    );
  }
}

export default Presentation;
