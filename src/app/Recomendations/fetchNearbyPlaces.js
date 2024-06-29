
const fetchNearbyPlaces = async (latitude, longitude) => {
    try {
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
      googleMapsScript.async = true;
      document.head.appendChild(googleMapsScript);
  
      await new Promise((resolve) => {
        googleMapsScript.onload = resolve;
      });
  
      const service = new google.maps.places.PlacesService(document.createElement('div'));
  
      const request = {
        location: new google.maps.LatLng(latitude, longitude),
        radius: '3000',
        type: ['point_of_interest'],
      };
  
      const results = await new Promise((resolve, reject) => {
        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            resolve(results);
          } else {
            reject(status);
          }
        });
      });
  
      const detailedPlaces = await Promise.all(
        results.map(async (place) => {
          const detailsRequest = { placeId: place.place_id };
          const placeDetails = await service.getDetails(detailsRequest).catch(() => null);
          return {
            ...place,
            details: placeDetails,
          };
        })
      );
  
      return detailedPlaces;
    } catch (error) {
      console.error('Error al obtener lugares cercanos:', error);
      return [];
    }
  };
  export default fetchNearbyPlaces;