import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from backend to frontend!');
});

app.post('/weather', (req, res) => {
    const { cityName } = req.body;
    res.send(`You submitted: ${cityName}`);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
