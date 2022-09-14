import React from 'react';

export default function ToggleDark(props) {
  return (
    <div>
      <div className="wrapper">
        <label className="switch">
          <input
            type="checkbox"
            id="checkbox-toggle"
            onClick={() => {
              props.toggleDark();
            }}
          />
          <span className="slider"></span>
          <span className="wave"> </span>
                   
        </label>
      </div>     
    </div>
  );
}