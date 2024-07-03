// server.js

const express = require('express');
const next = require('next');
const axios = require('axios');
const NodeCache = require('node-cache');  // Import NodeCache for caching API responses
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });  // Set standard TTL for cache and the check period

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(express.json());

    server.get('/api/places', async (req, res) => {
        const { location = 'Golfito', pagetoken } = req.query;
        console.log(`Fetching places for location: ${location}, pagetoken: ${pagetoken}`);

        const cacheKey = `places-${location}-${pagetoken || 'initial'}`;
        const cachedData = myCache.get(cacheKey);

        if (cachedData) {
            console.log("Returning cached data.");
            res.status(200).send(cachedData);
            return;
        }

        try {
            const params = {
                textquery: `places in ${location}`,
                key: process.env.NEXT_PUBLIC_MAPS_API_KEY
            };
            if (pagetoken) {
                params.pagetoken = pagetoken;
            }

            const response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json`, { params });
            console.log(`Places fetched successfully. Results count: ${response.data.results.length}`);

            // Cache the response data
            myCache.set(cacheKey, response.data, 100);  // Cache the response for 100 seconds

            res.status(200).send(response.data);
        } catch (error) {
            console.error('Error fetching places:', error.response ? error.response.data : error.message);
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
