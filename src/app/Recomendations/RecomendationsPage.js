'use client';

import React, { useEffect, useState } from 'react';
import CardRecomendations from '@/app/Recomendations/card-recomendations';
import fetchNearbyPlaces from './fetchNearbyPlaces'; 

const RecomendationsPage = () => {
  const [places, setPlaces] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const getPlaces = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const places = await fetchNearbyPlaces(latitude, longitude);
          setPlaces(places);
        });
      } catch (error) {
        console.error('Error al obtener lugares cercanos:', error);
      }
    };

    getPlaces();
  }, []);

  const getCategoryName = (types) => {
    const categoryMap = {
      'amusement_park': 'Entretenimiento',
      'bar': 'Bares',
      'restaurant': 'Restaurantes',
      'stadium': 'Deportes',
      'park': 'Parques',
      'fishing': 'Pesca',
    };

    for (let type of types) {
      if (categoryMap[type]) return categoryMap[type];
    }
    return 'Otro';
  };

  const filteredPlaces = selectedCategory === 'all' 
    ? places 
    : places.filter(place => place.types.includes(selectedCategory));

  return (
    <div>
      <div className="mb-5">
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded text-sm text-gray-800"
        >
          <option value="all">Todas las categorías</option>
          <option value="amusement_park">Entretenimiento</option>
          <option value="bar">Bares</option>
          <option value="restaurant">Restaurantes</option>
          <option value="stadium">Deportes</option>
          <option value="park">Parques</option>
          <option value="fishing">Pesca</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-20 mb-5">
        {filteredPlaces.map(place => (
          <CardRecomendations
            key={place.place_id}
            href={place.place_id ? `/place/${place.place_id}` : '#'}
            image={place.photos && place.photos.length > 0 ? place.photos[0].getUrl() : '/placeholder.png'}
            category={getCategoryName(place.types)}
            title={place.name}
            rating={place.rating}
            metadata={`${place.details && place.details.formatted_phone_number ? place.details.formatted_phone_number : 'No disponible'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RecomendationsPage;