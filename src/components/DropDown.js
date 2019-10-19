import React from "react";
import DropDownBase from "./DropDownBase";
import styles from "./DropDown.module.css";

export default class DropDown extends React.Component {
  render() {
    return (
      <DropDownBase
        onSelect={this.props.onSelect}
        selected={this.props.selected}
        render={props => (
          <div className={styles.base}>
            <div className={styles.selected} onClick={props.handleDropDown}>
              {this.props.placeHolder && !this.props.selected && (
                <span className={styles.placeHolder}>
                  {this.props.placeHolder}
                </span>
              )}
              {this.props.selected && <span>{this.props.selected.label}</span>}
            </div>
            {props.dropDownVisible && (
              <div
                className={
                  props.distanceToBottom < 200 && props.distanceToTop > 200
                    ? styles.dropDownTop
                    : styles.dropDown
                }
              >
                {this.props.options.map(val => {
                  return (
                    <div
                      className={styles.option}
                      onClick={() => {
                        props.handleSelect(val);
                      }}
                    >
                      {val.label}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      />
    );
  }
}
