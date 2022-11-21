import { Component } from "react";
class ImageComponent extends Component {
  render() {
    return (
      <img
        ClassName="Landscape"
        src={this.props.landscapeUrl}
        alt={this.props.lanscapeName}
      />
    );
  }
}
export default ImageComponent;
