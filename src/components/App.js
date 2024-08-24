import React, { useState } from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';
import data from '../db.json';


function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: 'all' });

  const handleTypeChange = (type) => {
    setFilters({ ...filters, type });
  };

  const fetchPets = () => {
    let filteredPets = data.pets;

    if (filters.type !== 'all') {
      filteredPets = data.pets.filter(pet => pet.type === filters.type);
    }

    setPets(filteredPets);
  };

  const handleAdoptPet = (id) => {
    const updatedPets = pets.map(pet =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    );
    setPets(updatedPets);
  };

  return (
    <div className="ui container">
      <Filters onChangeType={handleTypeChange} onFindPetsClick={fetchPets} />
      <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
    </div>
  );
}

export default App;

