import React, { Component } from "react";

class Counter extends Component {
  // arrow functions dont rebind the this keyword - below approach is still experimental over binding through constructor

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              {/* <i className="fa fa-plus fa-lg"></i> */}+
            </button>
            <button
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
            >
              {/* <i className="fa fa-minus fa-lg"></i> */}-
            </button>
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              {/* <i className="fa fa-delete fa-lg"></i> */}X
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
