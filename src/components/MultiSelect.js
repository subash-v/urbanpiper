import React from "react";

export default class MultiSelect extends React.Component {
  onSelect = key => {
    if (this.props.onSelect) {
      const selected = this.props.selected ? this.props.selected : [];
      let val = [];
      if (this.props.selected) {
        val = val.concat(this.props.selected);
      }
      if (!selected.includes(key)) {
        val.push(key);
        this.props.onSelect(val);
      } else {
        const filteredOptions = val.filter(value => {
          return value !== key;
        });

        this.props.onSelect(filteredOptions);
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.props.render({ ...this.props, onSelect: this.onSelect })}
      </React.Fragment>
    );
  }
}
