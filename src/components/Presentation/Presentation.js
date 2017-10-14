import React from 'react';
import ReactResizeDetector from 'react-resize-detector';

import scenes from '../../static/scenes.json';
import './Presentation.css';


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

class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sceneState: 0,
      sceneImages: loadSceneImages(),
      left: 0,
      width: 0,
      height: 0,
    };

    this.updateImageDimensions = this.updateImageDimensions.bind(this);
    this.change = this.handleScenePartClick.bind(this);
  }

  componentDidMount() {
    this.updateImageDimensions();
  }

  updateImageDimensions() {
    if (this.mainImage === undefined) return;
    const imageWidth = this.mainImage.clientWidth;
    const imageHeight = this.mainImage.clientHeight;
    const imageLeft = this.mainImage.getBoundingClientRect().left;

    const left = Math.max(imageLeft, 0);
    const width = imageWidth;
    const height = imageHeight;

    console.log(imageWidth)
    console.log(width, height)

    this.setState({ left, width, height });
  }

  handleScenePartClick(partId) {
    const { sceneState } = this.state;

    // eslint-disable-next-line
    const newValue = parseInt(sceneState) ^ parseInt(partId);

    this.setState({ sceneState: newValue });
    this.updateImageDimensions();
  }

  render() {
    const {
      left, width, height, sceneImages, sceneState,
    } = this.state;

    console.log(`Width is ${width}`);

    const sceneImage = sceneImages[sceneState];

    const { parts } = scenes[CURR_SCENE];
    const polygons = Object.keys(parts).map((key) => {
      const pointStr = parts[key].points.map(item => `${width * item[0]},${height * item[1]}`).join(' ');
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
        <ReactResizeDetector handleWidth handleHeight onResize={this.updateImageDimensions} />

        <img
          // eslint-disable-next-line
          ref={node => this.mainImage = node}
          onLoad={this.updateImageDimensions}
          className="Presentation-img"
          height={height}
          src={sceneImage}
          alt=""
        />

        <div className="Presentation-scene-parts-div noselect" style={{ left }}>
          <svg width={width} height={height}>
            {polygons}
          </svg>
        </div>
      </div>
    );
  }
}

export default Presentation;
