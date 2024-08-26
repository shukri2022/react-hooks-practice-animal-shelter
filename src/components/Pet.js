import React from "react";

function Pet({ pet, onAdoptPet }) {
  return (
    <div data-testid="pet" className="card">
      <div className="content">
        <div className="header">{pet.name}</div>
        <div className="meta">
          {pet.type} - {pet.gender === "male" ? "♂" : "♀"}
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button
          className="ui primary button"
          onClick={() => onAdoptPet(pet.id)}
          disabled={pet.isAdopted}
        >
          {pet.isAdopted ? "Already adopted" : "Adopt pet"}
        </button>
      </div>
    </div>
  );
}

export default Pet;
