'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StarWarsCharacter() {
  const [starWarsCharacter, setStarWarsCharacter] = useState({}); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('https://swapi.dev/api/people/1');
        setStarWarsCharacter(response.data);
      } catch (error) {
        setError('Something went wrong. Please try again later.'); 
        console.error(error);
      } finally {
        setIsLoading(false); 
      }
    }
    getData(); 
  }, []); 

  return (
    <div>
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div>
          <p>Error: {error}</p>
        </div>
      )}

      {starWarsCharacter && ( 
        <>
          <h2>{starWarsCharacter.name}</h2>
          <p>Height: {starWarsCharacter.height}</p>
          <p>Mass: {starWarsCharacter.mass}</p>
          <p>Hair color :{starWarsCharacter.hair_color}</p>
          <p>Skin Color:{starWarsCharacter.skin_color}</p>
          <p>Eye color :{starWarsCharacter.eye_color}</p>
          <p>Birth Year :{starWarsCharacter.birth_year}</p>
          <p>Gender :{starWarsCharacter.gender}</p>
        </>
      )}
    </div>
  );
}
