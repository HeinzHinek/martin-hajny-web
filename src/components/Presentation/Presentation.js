import React from 'react';
import ReactResizeDetector from 'react-resize-detector';

import Scene from './scene';
import './Presentation.css';


// FIXME extract this
const CURR_SCENE = '1';

class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scene: new Scene(CURR_SCENE),
      left: 0,
      width: 0,
      height: 0,
    };

    this.updateImageDimensions = this.updateImageDimensions.bind(this);
    this.handleScenePartClick = this.handleScenePartClick.bind(this);
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

    this.setState({ left, width, height });
  }

  handleScenePartClick(part) {
    part.toggleVisibility();
    this.forceUpdate();
  }

  render() {
    const {
      scene, left, width, height,
    } = this.state;
    const sceneImage = scene.getSceneImage();
    const activeParts = scene.getActiveParts();

    const polygons = activeParts.map(part => (
      <polygon
        key={`scenePart${part.id}`}
        points={part.getPointString(width, height)}
        onClick={() => { this.handleScenePartClick(part); }}
      />
    ));

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
