const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/search', async (req, res) => {

});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});