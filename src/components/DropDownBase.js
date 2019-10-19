import React from "react";
import ReactDOM from "react-dom";

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownVisible: false,
      distanceToBottom: null
    };
    this.node = null;
  }
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    this.node.onclick = event => {
      this.handleClick(event);
    };
  }
  getDistanceToEdge = () => {
    const windowHeight = window.innerHeight;
    const scrollDistance = window.pageYOffset;
    const offsetBottom = this.node.getBoundingClientRect().bottom;
    const distanceToBottom = Math.abs(
      offsetBottom - (scrollDistance + windowHeight)
    );
    const distanceToTop = this.node.getBoundingClientRect().top;
    return { distanceToBottom, distanceToTop };
  };
  handleDropDown = () => {
    const distanceToBottom = this.getDistanceToEdge().distanceToBottom;
    const distanceToTop = this.getDistanceToEdge().distanceToTop;
    if (this.props.onDropDown) {
      this.props.onDropDown(!this.state.dropDownVisible);
    }
    this.setState(
      {
        dropDownVisible: !this.state.dropDownVisible,
        distanceToBottom,
        distanceToTop
      },
      () => {
        if (this.state.dropDownVisible) {
          document.addEventListener("mousedown", this.handleClick, false);
        } else {
          document.removeEventListener("mousedown", this.handleClick, false);
        }
      }
    );
  };
  setDropDown = val => {
    const distanceToBottom = this.getDistanceToEdge().distanceToBottom;
    const distanceToTop = this.getDistanceToEdge().distanceToTop;
    if (this.props.onDropDown) {
      this.props.onDropDown(val);
    }
    this.setState(
      {
        dropDownVisible: val,
        distanceToBottom,
        distanceToTop
      },
      () => {
        if (this.state.dropDownVisible) {
          document.addEventListener("mousedown", this.handleClick, false);
        } else {
          document.removeEventListener("mousedown", this.handleClick, false);
        }
      }
    );
  };
  handleClick = evt => {
    if (!this.node.contains(evt.target)) {
      this.setState({ dropDownVisible: false });
    }
  };
  handleSelect = val => {
    console.log("select");
    if (this.props.onSelect) {
      this.props.onSelect(val);
      this.setState({ dropDownVisible: false });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.props.render({
          ...this.state,
          handleDropDown: this.handleDropDown,
          handleSelect: this.handleSelect,
          setDropDown: this.setDropDown
        })}
      </React.Fragment>
    );
  }
}
