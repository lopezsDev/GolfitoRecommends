// server.js
const express = require('express');
const next = require('next');
const axios = require('axios');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(express.json());

    server.get('/api/places', async (req, res) => {
        const { location = '8.637647754996475, -83.1572153212034', pagetoken } = req.query;  // Usar coordenadas para Golfito
        try {
            const params = {
                location, // Usar coordenadas para especificar el centro de búsqueda
                radius: '60000', // Radio de 60 km
                key: process.env.NEXT_PUBLIC_MAPS_API_KEY
            };
            if (pagetoken) {
                params.pagetoken = pagetoken;  // Para paginación
            }
            const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, { params });
            const places = response.data.results.map(place => ({
                place_id: place.place_id,
                name: place.name,
                formatted_address: place.vicinity, // 'vicinity' es adecuado para nearby search
                image: place.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}` : null,
                rating: place.rating,
                types: place.types
            }));
            res.status(200).send({ results: places, nextPageToken: response.data.next_page_token });
        } catch (error) {
            console.error('Error fetching places:', error);
            res.status(500).send('Error fetching places');
        }
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});
