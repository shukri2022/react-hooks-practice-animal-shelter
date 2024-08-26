import React from 'react';
import Pet from './Pet';

function PetBrowser({ pets, onAdoptPet }) {
  return (
    <div className="ui cards">
      {Array.isArray(pets) && pets.length > 0 ? (
        pets.map((pet) => <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />)
      ) : (
        <p>No pets available</p>
      )}
    </div>
  );
}

export default PetBrowser;

