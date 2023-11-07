import express from 'express';
import fetch from 'node-fetch';
import keys from './sources/keys.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from backend to frontend!');
});

app.post('/weather', async (req, res) => {
    const { cityName } = req.body;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${keys.API_KEY}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            const weatherText = `Current weather in ${cityName}: ${data.weather[0].description}. Temperature: ${data.main.temp}°C`;
            res.send({ weatherText, cityName, temperature: data.main.temp });
        } else {
            res.status(data.cod).send({ weatherText: "City is not found!" });
        }
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
        res.status(500).send({ error: "An error occurred while fetching data." });
    }
});

export default app;
