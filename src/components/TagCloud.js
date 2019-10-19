import React from "react";
import Input from "./Input";
import MultiSelect from "./MultiSelect";
import styles from "./TagCloud.module.css";

export default class TagCloud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleUpdate(tags) {
    if (this.props.onSelect) {
      this.props.onSelect(tags);
    }
  }
  handleChange(val) {
    this.setState({ value: val });
  }
  handleKeyPress(val, event) {
    if (event.key === "Enter") {
      const tags = this.props.tags
        ? this.props.tags.map((val, i) => {
            return { key: i.toString(10), label: val.label };
          })
        : [];

      const key = tags.length.toString(10);
      if (
        this.state.value &&
        !tags
          .map(val => {
            return val.label;
          })
          .includes(this.state.value)
      ) {
        tags.push({ key, label: this.state.value });
        this.setState({ value: "" }, () => {
          this.handleUpdate(tags);
        });
      }
    }
  }
  handleSelect = selected => {
    const tags = this.props.tags.filter(val => {
      return selected.includes(val.key);
    });
    this.handleUpdate(tags);
  };
  render() {
    return (
      <div className={styles.base}>
        <Input
          value={this.state.value}
          onChange={(val, event) => {
            this.handleChange(val, event);
          }}
          onKeyPress={(val, event) => {
            this.handleKeyPress(val, event);
          }}
        />
        <MultiSelect
          onSelect={this.handleSelect}
          selected={
            this.props.tags &&
            this.props.tags.map(val => {
              return val.key;
            })
          }
          render={props =>
            this.props.tags && (
              <div className={styles.tagHolder}>
                {this.props.tags.map(val => {
                  return (
                    <div
                      className={styles.tag}
                      onClick={() => {
                        props.onSelect(val.key);
                      }}
                    >
                      {val.label}
                    </div>
                  );
                })}
              </div>
            )
          }
        />
      </div>
    );
  }
}
