import React from "react";

function Dropdown({ title, handleCategory }) {
  return (
    <div className="select">
      <select
        onChange={handleCategory}
        defaultValue="0"
        name="format"
        id="format"
      >
        {title.map((t, i) => {
          return <option key={i}>{t.toUpperCase()}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;
