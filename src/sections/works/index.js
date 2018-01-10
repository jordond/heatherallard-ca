import React, { Component } from "react";

import { key } from "../../utils/id";
import { noop } from "../../utils/misc";
import TitleHeader from "../../ui/titleHeader";

import titleBG from "./works-title.png";

// TODO: clean up
// TODO: look into http://dantrain.github.io/react-stonecutter/ for grid
//      or http://jrowny.github.io/react-absolute-grid/demo/

const Works = () => (
  <div className="works">
    <TitleHeader text="Work" src={titleBG} />
    <WorksGrid />
  </div>
);

export default Works;

export class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "" };
    this.filters = ["motion", "all", "design"];
  }

  handleClick(selected) {
    this.setState({ selected });
    (this.props.onSelect || noop)(selected);
  }

  render() {
    const { selected } = this.state;
    return (
      <div className="filters">
        {this.filters.map(filter => {
          const isActive = selected === filter;
          const styles = isActive ? { color: "red" } : {};
          return (
            <div
              {...key()}
              className={`filter ${isActive ? "active" : ""}`}
              onClick={() => this.handleClick(filter)}
              style={styles}
            >
              {filter}
            </div>
          );
        })}
      </div>
    );
  }
}

export const PhotoGrid = props => <div>{props.filter || "No filter..."}</div>;

export class WorksGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "" };
    this.onFilterSelected = this.onFilterSelected.bind(this);
  }

  onFilterSelected(selected) {
    this.setState({ selected });
  }

  render() {
    return (
      <div>
        <Filters onSelect={this.onFilterSelected} />
        <PhotoGrid filter={this.state.selected} />
      </div>
    );
  }
}
