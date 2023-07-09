import React, { useState } from 'react';

const ToggleSwitch = ({ onToggle ,ac}) => {
  const [isChecked, setIsChecked] = useState(ac);
  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onToggle) {
      onToggle(newValue);
    }
  };
  return (

    <label className="toggle-switch ">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
