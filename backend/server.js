const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));
const API_KEY = '39709500-3fa7c7110c7ab095eb9da8985';

app.get('/search', async (req, res) => {
    const { searchInput } = req.query;
    const apiUrl = `https://pixabay.com/api/?key=${API_KEY}&q=${searchInput}=&image_type=photo`;

    try {
        const response = await axios.get(apiUrl);
        return res.json(response.data);
    } catch (error) {
        return res.status(500).send('Error fetching data from server: ' + error.message);
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

