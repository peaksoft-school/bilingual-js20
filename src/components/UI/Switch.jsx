import React from "react";

function Switch() {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <div className="container">
        <label className="radio">
          <input type="radio" name="test" />
        </label>
        <label className="radio">
          <input type="radio" name="test" />
        </label>
      </div>
          <label className="container1">
            <input type="checkbox" />
            <div className="checkmark"></div>
          </label>
          <label className="container3">
            <input type="checkbox" />
            <div className="checkmark3"></div>
          </label>
    </div>
  );
}

export default Switch;
