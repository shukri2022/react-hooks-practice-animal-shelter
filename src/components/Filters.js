import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  const handleTypeChange = (event) => {
    onChangeType(event.target.value);
  };

  return (
    <div className="ui filter">
      <select
        className="ui selection dropdown"
        onChange={handleTypeChange}
        defaultValue="all"
        aria-label="type"
      >
        <option value="all">All</option>
        <option value="cat">Cats</option>
        <option value="dog">Dogs</option>
        <option value="micropig">Micropigs</option>
      </select>
      <button
        className="ui primary button"
        onClick={onFindPetsClick}
      >
        Find pets
      </button>
    </div>
  );
}

export default Filters;

