import React, { useState, useEffect, useCallback } from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: 'all' });

  const fetchPets = useCallback(() => {
    let url = 'http://localhost:3001/pets';
    if (filters.type !== 'all') {
      url += `?type=${filters.type}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setPets(Array.isArray(data) ? data : []))
      .catch((error) => console.error('Error fetching pets:', error));
  }, [filters.type]);

  useEffect(() => {
    fetchPets();
  }, [fetchPets]);

  const handleChangeType = (type) => {
    setFilters({ ...filters, type });
  };

  const handleFindPetsClick = () => {
    fetchPets();
  };

  const handleAdoptPet = (id) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.id === id ? { ...pet, isAdopted: true } : pet
      )
    );
  };

  return (
    <div className="ui container">
      <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPetsClick} />
      <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
    </div>
  );
}

export default App;
