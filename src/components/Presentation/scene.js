import scenes from '../../static/scenes.json';

class ScenePart {
  constructor(partId, sceneName, parentPart = null) {
    this.id = partId;
    this.sceneName = sceneName;
    this.parent = parentPart;

    this.visible = false;
    this.addressString = this.parseAddressString();

    this.polygon = scenes[this.sceneName].parts[this.id].polygon;
    this.children = [];
  }

  getPointString(width, height) {
    return this.polygon.map(item => `${width * item[0]},${height * item[1]}`).join(' ');
  }

  toggleVisibility() {
    this.visible = !this.visible;
  }

  parseAddressString() {
    if (!this.parent) return `${this.id}`;
    return [this.parent.addressString, this.id].join('-');
  }
}

class Scene {
  constructor(sceneId) {
    this.id = sceneId;
    this.state = '0';

    this.sceneName = `scene${this.id}`;
    this.tree = this.buildTree();
    this.baseImage = this.loadImage('state_0');
  }

  getActiveParts() {
    const checkChildren = (children) => {
      let ret = children.slice();
      children.forEach((child) => {
        if (child.visible) {
          ret = ret.concat(checkChildren(child.children));
        }
      });
      return ret;
    };
    return checkChildren(this.tree);
  }

  getSceneImage() {
    const activeParts = this.getActiveParts();
    const visibleIds = activeParts.filter(part => part.visible).map(part => parseInt(part.id, 10));
    if (!visibleIds.length) return this.baseImage;

    const sortedUniqueIds = visibleIds.filter((item, i, ar) => ar.indexOf(item) === i).sort();
    const imageFileName = `state_${sortedUniqueIds.join('-')}`;
    return this.loadImage(imageFileName);
  }

  buildTree() {
    const sceneParts = scenes[this.sceneName].parts;
    const partIds = Object.keys(sceneParts);
    const processId = (id = undefined) => {
      const childIds = partIds.filter(partId => sceneParts[partId].containerId === id);
      return childIds.reduce((map, childId) => {
        // eslint-disable-next-line
        map[childId] = processId(childId);
        return map;
      }, {});
    };

    const tree = processId();

    const createParts = (currObj, parentPart = undefined) => Object.entries(currObj).map(([key, val]) => {
      const part = new ScenePart(key, this.sceneName, parentPart);
      part.children = createParts(val, part);
      return part;
    });

    return createParts(tree);
  }

  loadImage(filename) {
    // eslint-disable-next-line
    return require(`../../static/scenes/${this.sceneName}/${filename}.jpg`);
  }
}

export default Scene;
