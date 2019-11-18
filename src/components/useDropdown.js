import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const DropDown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => updateState(e.target.value)}
        onBlur={e => updateState(e.target.value)}
        disabled={!options.length}
      >
        {options.map(name => (
          <option key={name.currency_code} value={name.currency_code}>
            {name.country}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, DropDown];
};

export default useDropdown;
