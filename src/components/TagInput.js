import React from "react";
import TagCloud from "./TagCloud";
import DropDown from "./DropDown";
import styles from "./TagInput.module.css";

export default class TagCloudDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      selected: null
    };
  }
  searchUserName = () => {
    this.setState({ searchEnable: true });
    this.props.searchUsers(this.state.tags[0] && this.state.tags[0].label);
  };
  handleSelectDropDown = selected => {
    this.setState({ selected });
  };
  handleSelect = tags => {
    this.setState({ tags });
  };
  render() {
    console.log();
    return (
      <React.Fragment>
        <div className={styles.TagCloudContainer}>
          <div>Enter the tag you need</div>
          <TagCloud onSelect={this.handleSelect} tags={this.state.tags} />
        </div>

        <div className={styles.DropDownContainer}>
          <div>Select One drop Down</div>
          <DropDown
            onSelect={this.handleSelectDropDown}
            placeHolder="Select an option"
            selected={this.state.selected}
            options={[
              { key: "1", label: "newly" },
              { key: "2", label: "weekly" },
              { key: "3", label: "monthly" }
            ]}
          />
        </div>
        <div
          className={styles.buttonHolder}
          onClick={() => this.searchUserName()}
        >
          <div>submit</div>
        </div>
      </React.Fragment>
    );
  }
}
